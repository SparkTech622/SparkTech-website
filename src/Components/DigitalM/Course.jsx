import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, CheckCircle, ArrowLeft } from 'lucide-react';
import { db, auth } from '../../firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';

const Course = () => {
  const { id: courseId } = useParams();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeModule, setActiveModule] = useState(null);




  // Update the useEffect hook to properly handle enrollment check
useEffect(() => {
  const fetchCourseAndProgress = async () => {
    setLoading(true);
    setError(null);

    if (!courseId || !auth.currentUser) {
      setError('Please log in to access this course');
      setLoading(false);
      return;
    }

    try {
      // Check enrollment status first
      const enrollmentRef = collection(db, 'enrollments');
      const enrollmentQuery = query(
        enrollmentRef,
        where('userId', '==', auth.currentUser.uid),
        where('courseId', '==', courseId)
      );

      const enrollmentSnap = await getDocs(enrollmentQuery);

      if (enrollmentSnap.empty) {
        setError('You are not enrolled in this course');
        setLoading(false);
        return;
      }

      const enrollment = enrollmentSnap.docs[0].data();

      if (!enrollment.enrolled) {
        setError('Your enrollment is pending approval');
        setLoading(false);
        return;
      }

      // Set user progress from enrollment data
      setUserProgress(enrollment);

      // Fetch course data
      const courseRef = doc(db, 'courses', courseId);
      const courseSnap = await getDoc(courseRef);

      if (!courseSnap.exists()) {
        setError('Course not found');
        setLoading(false);
        return;
      }

      setCourseData({
        id: courseSnap.id,
        ...courseSnap.data()
      });

    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'An error occurred while loading the course');
    } finally {
      setLoading(false);
    }
  };

  fetchCourseAndProgress();
}, [courseId]);



  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-900"></div>
      </div>
    );
  }

  // Error state
  // Update the error state JSX
if (error) {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="text-center space-y-4">
          <p className="text-red-500 font-medium">{error}</p>
          {error.includes('pending') ? (
            <p className="text-gray-600 text-sm">
              Please wait for an administrator to approve your enrollment.
            </p>
          ) : (
            <p className="text-gray-600 text-sm">
              {error.includes('enrolled') ? 
                'Return to dashboard to enroll in this course.' : 
                'Please try again or contact support if the problem persists.'}
            </p>
          )}
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-800 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Dashboard
            </button>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{courseData?.title}</h1>
          <p className="mt-2 text-gray-600">{courseData?.description}</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Course Content</h2>
              <div className="space-y-4">
  {courseData?.modules.map((module, moduleIndex) => (
    <div key={moduleIndex} className="border rounded-lg">
      <button
        onClick={() => {
          setActiveModule(activeModule === moduleIndex ? null : moduleIndex);
        }}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
      >
        <span className="font-medium">{module.title}</span>
        {activeModule === moduleIndex ? <ChevronUp /> : <ChevronDown />}
      </button>
      
      {activeModule === moduleIndex && (
        <ul className="p-4 space-y-2 border-t">
          {module.lessons.map((lessonId, lessonIndex) => (
            <li key={lessonId}>
              <button
                onClick={() => {
                  if (userProgress?.enrolled) {
                    navigate(`/dashboard/course/${courseId}/lesson/${lessonId}`);
                  } else {
                    setError('Your enrollment needs to be approved to access lessons');
                  }
                }}
                className={`w-full flex items-center gap-3 p-2 rounded 
                  ${userProgress?.enrolled 
                    ? 'hover:bg-gray-50 cursor-pointer' 
                    : 'cursor-not-allowed opacity-60'}`}
                disabled={!userProgress?.enrolled}
              >
                {userProgress?.completedLessons?.includes(lessonId) ? (
                  <CheckCircle className="text-green-500 w-5 h-5" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                )}
                <span className={`${!userProgress?.enrolled ? 'text-gray-400' : ''}`}>
                  {module.lessonTitles[lessonIndex]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  ))}
              </div>
            </div>
          </div>

          {/* Course Progress Overview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Your Progress</h2>
              
              <div className="space-y-6">
             
{courseData?.modules.map((module, moduleIndex) => {
  const completedLessons = module.lessons.filter(
    lessonId => userProgress?.completedLessons?.includes(lessonId)
  ).length;
  const progress = (completedLessons / module.lessons.length) * 100;

  return (
    <div key={moduleIndex} className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{module.title}</h3>
        <span className="text-sm text-gray-600">
          {completedLessons} / {module.lessons.length} lessons
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
})}
              </div>

              {/* Overall Progress */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Overall Progress</h3>
                  <span className="text-sm text-gray-600">
                    {Math.round(userProgress?.progress || 0)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${userProgress?.progress || 0}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;