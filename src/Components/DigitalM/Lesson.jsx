import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '../../firebase';
import { collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
const Lesson = () => {
  const { id: lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizFeedback, setQuizFeedback] = useState(null);
  


  

  useEffect(() => {
    const fetchLesson = async () => {
      if (!auth.currentUser) {
        setError('Please log in to access this lesson');
        setLoading(false);
        return;
      }
  
      try {
        // First fetch the lesson to get its courseId
        const lessonRef = doc(db, 'lessons', lessonId);
        const lessonSnap = await getDoc(lessonRef);
  
        if (!lessonSnap.exists()) {
          setError('Lesson not found');
          setLoading(false);
          return;
        }
  
        const lessonData = lessonSnap.data();
  
        // Check enrollment status
        const enrollmentRef = collection(db, 'enrollments');
        const enrollmentQuery = query(
          enrollmentRef,
          where('userId', '==', auth.currentUser.uid),
          where('courseId', '==', lessonData.courseId),
          where('enrolled', '==', true)
        );
  
        const enrollmentSnap = await getDocs(enrollmentQuery);
  
        if (enrollmentSnap.empty) {
          setError('You do not have access to this lesson');
          setLoading(false);
          return;
        }
  
        // If we get here, user is enrolled and approved
        setLesson({
          id: lessonSnap.id,
          ...lessonData
        });
  
        // Update progress
        const enrollmentDoc = enrollmentSnap.docs[0];
        const currentProgress = enrollmentDoc.data();
        
        if (!currentProgress.completedLessons?.includes(lessonId)) {
          await updateDoc(enrollmentDoc.ref, {
            completedLessons: [...(currentProgress.completedLessons || []), lessonId],
            lastAccessed: new Date()
          });
        }
  
      } catch (err) {
        console.error('Error fetching lesson:', err);
        setError('Failed to load lesson content');
      } finally {
        setLoading(false);
      }
    };
  
    fetchLesson();
  }, [lessonId]);

  const handleAnswerSelection = (questionId, selectedOption) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOption
    }));
  };

  const handleQuizSubmission = async () => {
    const currentQuiz = lesson.sections[currentSection];
    const questions = currentQuiz.questions;
    
    // Check if all questions are answered
    if (Object.keys(userAnswers).length !== questions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    
    // Calculate score
    let correctAnswers = 0;
    questions.forEach(question => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = (correctAnswers / questions.length) * 100;
    let feedback;

    // Determine feedback based on score
    if (score === 100) {
      feedback = currentQuiz.feedback.perfect;
    } else if (score >= 70) {
      feedback = currentQuiz.feedback.good;
    } else {
      feedback = currentQuiz.feedback.poor;
    }

    // Show results
    setQuizFeedback({
      score,
      feedback,
      results: questions.map(question => ({
        question: question.question,
        correct: userAnswers[question.id] === question.correctAnswer,
        explanation: question.explanation,
        userAnswer: question.options[userAnswers[question.id]],
        correctAnswer: question.options[question.correctAnswer]
      }))
    });

    setQuizSubmitted(true);

    
    // Update progress in Firebase if needed
    try {
      const enrollmentRef = collection(db, 'enrollments');
      const enrollmentQuery = query(
        enrollmentRef,
        where('userId', '==', auth.currentUser.uid),
        where('courseId', '==', lesson.courseId)
      );

      const enrollmentSnap = await getDocs(enrollmentQuery);
      if (!enrollmentSnap.empty) {
        const enrollmentDoc = enrollmentSnap.docs[0];
        const currentQuizzes = enrollmentDoc.data().completedQuizzes || [];
        
        if (!currentQuizzes.includes(currentQuiz.id)) {
          await updateDoc(enrollmentDoc.ref, {
            completedQuizzes: [...currentQuizzes, currentQuiz.id],
            quizScores: {
              ...enrollmentDoc.data().quizScores,
              [currentQuiz.id]: score
            }
          });
        }
      }
    } catch (error) {
      console.error('Error updating quiz progress:', error);
    }
  };

  const renderQuizFeedback = () => {
    if (!quizSubmitted || !quizFeedback) return null;

    return (
      <div className="mt-8 space-y-6">
        <div className={`p-4 rounded-lg ${
          quizFeedback.score === 100 ? 'bg-green-50 text-green-800' :
          quizFeedback.score >= 70 ? 'bg-yellow-50 text-yellow-800' :
          'bg-red-50 text-red-800'
        }`}>
          <h4 className="font-bold mb-2">Quiz Results</h4>
          <p>Score: {quizFeedback.score}%</p>
          <p className="mt-2">{quizFeedback.feedback}</p>
        </div>

        <div className="space-y-4">
          {quizFeedback.results.map((result, index) => (
            <div key={index} className={`p-4 rounded-lg ${
              result.correct ? 'bg-green-50' : 'bg-red-50'
            }`}>
              <p className="font-medium">{result.question}</p>
              <p className="mt-2">Your answer: {result.userAnswer}</p>
              {!result.correct && (
                <p className="mt-1 text-red-600">
                  Correct answer: {result.correctAnswer}
                </p>
              )}
               <p className="mt-2 text-sm text-gray-600">{result.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const navigateSection = (direction) => {
    setCurrentSection(prev => {
      const next = direction === 'next' ? prev + 1 : prev - 1;
      return Math.max(0, Math.min(next, (lesson?.sections?.length || 1) - 1));
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen grid place-items-center bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="text-center space-y-4">
          <p className="text-red-500 font-medium">{error}</p>
          <button
            onClick={() => navigate(-1)}
            className="text-purple-600 hover:text-purple-800 transition-colors"
          >
            Return to Course
          </button>
        </div>
      </div>
    );
  }

 
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
        <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-10">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-primary hover:text-secondary hover:underline transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Back to Course</span>
            </button>
          </nav>
        </header>
  
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="space-y-8">
            <header className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-primary">
                {lesson?.title}
              </h1>
              <p className="text-lg text-gray-600">
                Section {currentSection + 1} of {lesson?.sections?.length}
              </p>
            </header>
  
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-[600px] w-full max-w-4xl mx-auto">
              <div className="h-full overflow-y-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="p-6 sm:p-8 lg:p-10"
                  >
                  {lesson?.sections?.[currentSection]?.type === 'video' && (
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg mb-6">
                      <iframe
                        src={lesson.sections[currentSection].videoUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}

                 {lesson?.sections?.[currentSection]?.type === 'image' && (
                    <div className="my-6">
                      <img
                        src={lesson.sections[currentSection].imageUrl}
                        alt={lesson.sections[currentSection].alt || "Marketing concept illustration"} 
                       className="rounded-lg shadow-lg max-w-full h-auto mx-auto"
                      />
                    </div>
                  )}

                {lesson?.sections?.[currentSection]?.type === 'quiz' && (
                  <div className="bg-white rounded-lg p-6 my-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {lesson.sections[currentSection].title}
                    </h3>

                    {!quizSubmitted ? (
                      <div className="space-y-8">
                        {lesson.sections[currentSection].questions.map((question, index) => (
                          <div key={question.id} className="bg-gray-50 rounded-lg p-6">
                            <p className="text-lg font-medium text-gray-800 mb-4">
                              {index + 1}. {question.question}
                            </p>
                            <div className="space-y-3">
                              {question.options.map((option, optionIndex) => (
                                <label 
                                  key={optionIndex} 
                                  className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer
                                    ${userAnswers[question.id] === optionIndex 
                                      ? 'border-purple-500 bg-purple-50' 
                                      : 'border-transparent hover:bg-gray-100'
                                    }`}
                                >
                                  <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={optionIndex}
                                    checked={userAnswers[question.id] === optionIndex}
                                    onChange={() => handleAnswerSelection(question.id, optionIndex)}
                                    className="mt-1"
                                  />
                                  <span className="text-gray-700">{option}</span>
                                </label>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div className="sticky bottom-0 bg-white py-4">
                          <button
                            onClick={handleQuizSubmission}
                            className={`w-full px-6 py-3 bg-purple-600 text-white rounded-lg 
                              hover:bg-purple-700 transition-colors disabled:opacity-50
                              ${Object.keys(userAnswers).length !== lesson.sections[currentSection].questions.length
                                ? 'opacity-50 cursor-not-allowed'
                                : ''
                              }`}
                            disabled={Object.keys(userAnswers).length !== lesson.sections[currentSection].questions.length}
                          >
                            Submit Answers
                          </button>
                        </div>
                      </div>
                    ) : (
                      renderQuizFeedback()
                    )}
                  </div>
                )}
  
                  {lesson?.sections?.[currentSection]?.type === 'text' && (
                    <div 
                      className="prose prose-lg max-w-none
                        prose-headings:text-purple-900 
                        prose-p:text-gray-700 
                        prose-a:text-purple-600 hover:prose-a:text-purple-800
                        prose-img:rounded-lg prose-img:shadow-lg
                        prose-strong:text-purple-900"
                      dangerouslySetInnerHTML={{ 
                        __html: lesson.sections[currentSection].content 
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            
  
              {/* Navigation Controls */}
              <div className="flex justify-between items-center p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-transparent to-gray-50">
                <button
                  onClick={() => navigateSection('prev')}
                  disabled={currentSection === 0}
                  className="flex items-center gap-2 px-4 py-2 text-purple-600 
                    bg-white rounded-lg shadow-md hover:shadow-lg transition-all 
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
  
                <span className="text-sm text-gray-500">
                  {currentSection + 1} / {lesson?.sections?.length}
                </span>
  
                <button
                  onClick={() => navigateSection('next')}
                  disabled={currentSection === (lesson?.sections?.length || 1) - 1}
                  className="flex items-center gap-2 px-4 py-2 text-white 
                    bg-purple-600 rounded-lg shadow-md hover:shadow-lg 
                    hover:bg-purple-700 transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          </article>
        </main>
      </div>
    );
  };
  
  export default Lesson;