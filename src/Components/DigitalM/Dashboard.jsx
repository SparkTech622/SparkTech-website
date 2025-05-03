import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth,db } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Payment from './Payment';
import EmailAdmin from '../../utility/EmailAdmin';
import { 
    collection, 
    query, 
    where, 
    getDocs,
    doc,
    getDoc, 
    addDoc,
    onSnapshot
  } from 'firebase/firestore';
import { AlertCircle, CheckCircle } from 'lucide-react';



const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolledLessons, setEnrolledLessons] = useState([]);
  const [availableCourses, setAvailableCourses] = useState([]);
  const [error, setError] = useState(null);
  const [enrollingCourseId, setEnrollingCourseId] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);





 
    const fetchUserData = async (currentUser) => {
      if (!currentUser) return;

      try {
        // Fetch user's enrolled courses
        const enrollmentsRef = collection(db, 'enrollments');
        const enrollmentsQuery = query(
          enrollmentsRef,
          where('userId', '==', currentUser.uid)
        );
        
        const enrollmentsSnapshot = await getDocs(enrollmentsQuery);
        const enrolledCoursesPromises = enrollmentsSnapshot.docs.map(async (enrollment) => {
          const courseRef = doc(db, 'courses', enrollment.data().courseId);
          const courseSnap = await getDoc(courseRef);
          

          if (!courseSnap.exists()) {
            console.error(`Course ${enrollment.data().courseId} not found`);
            return null;
          }

          return {
            id: courseSnap.id,
            ...courseSnap.data(),
            enrolled: enrollment.data().enrolled, 
            progress: enrollment.data().progress || 0,
            enrollmentId: enrollment.id 
          };
        });

       const enrolledCoursesData = (await Promise.all(enrolledCoursesPromises))
        .filter(course => course !== null);
      setEnrolledLessons(enrolledCoursesData);

        // Fetch available courses
        const coursesRef = collection(db, 'courses');
    const coursesSnapshot = await getDocs(coursesRef);
    const allCourses = coursesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

        // Filter out enrolled courses
        const enrolledIds = enrolledCoursesData.map(course => course.id);
        const availableCoursesData = allCourses.filter(
          course => !enrolledIds.includes(course.id)
        ); 
        
        setAvailableCourses(availableCoursesData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load courses. Please try again later.');
      }
    };





useEffect(() => {
  setLoading(true); 
  const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (!currentUser) {
          setLoading(false); 
          return;
      }

      try {
          await fetchUserData(currentUser);
          
          //  real-time listener for enrollments
          const enrollmentsRef = collection(db, 'enrollments');
          const enrollmentsQuery = query(
              enrollmentsRef,
              where('userId', '==', currentUser.uid)
          );

          const unsubscribeEnrollments = onSnapshot(enrollmentsQuery, async (snapshot) => {
              if (!snapshot.empty) {
                  await fetchUserData(currentUser);
                  
                  snapshot.docChanges().forEach((change) => {
                      if (change.type === "modified" && 
                          change.doc.data().enrolled === true) {
                          setError('Your enrollment has been approved! You can now start your learning journey.');
                          setTimeout(() => setError(null), 5000);
                      }
                  });
              }
              setLoading(false); 
          }, (error) => {
              console.error('Enrollment listener error:', error);
              setError('Failed to  for enrollment updates');
              setLoading(false);
          });

          return () => {
              unsubscribeEnrollments();
              unsubscribeAuth();
          };

      } catch (error) {
          console.error('Error in auth state change:', error);
          setError('Hang on tightly as we approve your enrollment');
          setLoading(false);
      }
  });

  return () => unsubscribeAuth();
}, []);


  

 



//  handleEnroll function
const handleEnroll = async (course) => {
  if (!user) {
    setError('Please login to enroll in courses');
    return;
  }
  console.log(course)
  setSelectedCourse(course);
  setShowPaymentModal(true);
}
const handlePaymentSubmit = async (refCode) => {
  if (!selectedCourse || !user) return;
  
  setIsProcessing(true);
  setError(null);
  try {
    // Check if already enrolled
    const enrollmentsRef = collection(db, 'enrollments');
    const existingEnrollmentQuery = query(
      enrollmentsRef,
      where('userId', '==', user.uid),
      where('courseId', '==', selectedCourse.id)
    );
    
    const existingEnrollment = await getDocs(existingEnrollmentQuery);
    
    if (!existingEnrollment.empty) {
      setError('You are already enrolled in this course');
      return;
    }

    // Create new enrollment
    const enrollmentData = {
      userId: user.uid,
      courseId: selectedCourse.id,
      enrolled: false,
      userName: user.displayName || 'Anonymous User',
      userEmail: user.email,
      enrolledAt: new Date(),
      progress: 0,
      completedLessons: [],
      lastAccessed: new Date(),
      paymentRefCode: refCode,
    };

    const enrollmentRef = await addDoc(enrollmentsRef, enrollmentData);

    // Send email notification
    await EmailAdmin({
      userEmail: user.email,
      userName: user.displayName || 'Anonymous User',
      courseTitle: selectedCourse.title,
      coursePrice: selectedCourse.price,
      enrollmentId: enrollmentRef.id,
      paymentRefCode: refCode,
      enrollmentDate: new Date().toLocaleString(),
    });

    setError('Enrollment request submitted. Waiting for approval.');
    setShowPaymentModal(false);
    await fetchUserData(user);
    
  } catch (err) {
    console.error('Error enrolling in course:', err);
    setError('Failed to enroll in course. Please try again.');
  } finally {
   
    setEnrollingCourseId(null);
  }
};


const renderEnrollButton = (course) => (
  <button
    className={`w-full ${
      enrollingCourseId === course.id
        ? 'bg-gray-400'
        : 'bg-secondary hover:bg-secondary/90'
    } text-white py-2 rounded-lg transition-colors`}
    onClick={() => handleEnroll(course)}
    disabled={enrollingCourseId === course.id}
  >
    {enrollingCourseId === course.id ? (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
        Enrolling...
      </div>
    ) : (
      'Enroll Now'
    )}
  </button>
);




if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
     
{error && (
    <div 
        className={`mb-8 p-4 rounded-lg ${
            error.includes('approved') || error.includes('submitted')
                ? 'bg-green-50 border-l-4 border-green-400 text-green-700'
                : 'bg-red-50 border-l-4 border-red-400 text-red-700'
        }`}
    >
        <p className="flex items-center">
            {error.includes('approved') || error.includes('submitted') ? (
                <CheckCircle className="w-5 h-5 mr-2" />
            ) : (
                <AlertCircle className="w-5 h-5 mr-2" />
            )}
            {error}
        </p>
    </div>
)}

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.displayName}!
          </h1>
        
        </header>

        {/* Enrolled Courses Section */}
        <section className="mb-12">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
      Your Enrolled Courses
    </h2>
    {enrolledLessons.length === 0 ? (
      <p className="text-gray-600">You haven&apos;t enrolled in any courses yet.</p>
    ) : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {enrolledLessons.map(course => (
          <article 
            key={course.id}
            className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow ${
              course.enrolled ? 'border-2 border-green-500' : 'border border-yellow-500'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h3>
              {course.enrolled ? (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Approved
                </span>
              ) : (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Pending Approval
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">{course.description}</p>
          {course.enrolled && (
            <div className="mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {course.progress}% Complete
              </p>
            </div>
          )}
          <button
            className={`w-full ${
              course.enrolled 
                ? 'bg-primary hover:bg-primary/90' 
                : 'bg-gray-300 cursor-not-allowed'
            } text-white py-2 rounded-lg transition-colors`}
            onClick={() => course.enrolled && navigate(`/dashboard/course/${course.id}`)}
            disabled={!course.enrolled}
          >
            
            {course.enrolled 
                ? (course.progress > 0 ? 'Continue Learning' : 'Start Course')
                : 'Awaiting Approval'}
            </button>
          </article>
        ))}
      </div>
    )}
  </section>
        {/* Available Courses Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Available Courses
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {availableCourses.map(course => (
              <article 
                key={course.id}
                className="bg-quinary rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center mb-4">
                 
                  <span className="text-xl font-semibold text-primary">
                    KSH {course.price}
                  </span>
                </div>
                {renderEnrollButton(course)}
              </article>
            ))}
          </div>
        </section>
      </div>
      {showPaymentModal && selectedCourse && (
  <Payment
    course={selectedCourse}
    onClose={() => {
      setShowPaymentModal(false);
      setSelectedCourse(null);
    }}
    onSubmit={handlePaymentSubmit}
    isProcessing={isProcessing}
  />
)}
    </main>
  );
};

export default Dashboard;