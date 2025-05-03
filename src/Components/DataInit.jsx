// import { useState } from 'react';
// import { initializeCourseData } from '../assets/Services';

// const DataInitializer = () => {
//   const [status, setStatus] = useState('');
//   const [isInitializing, setIsInitializing] = useState(false);

//   const handleInitialize = async () => {
//     if (isInitializing) return;

//     try {
//       setIsInitializing(true);
//       setStatus('Initializing course data...');
      
//       const result = await initializeCourseData();
      
//       setStatus(result.message);
//     } catch (error) {
//       setStatus(`Error: ${error.message}`);
//     } finally {
//       setIsInitializing(false);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 p-4 bg-white rounded-lg shadow-lg z-50">
//       <button
//         onClick={handleInitialize}
//         disabled={isInitializing}
//         className={`px-4 py-2 rounded-lg ${
//           isInitializing 
//             ? 'bg-gray-400 cursor-not-allowed' 
//             : 'bg-blue-500 hover:bg-blue-600'
//         } text-white font-medium`}
//       >
//         {isInitializing ? 'Initializing...' : 'Initialize Course Data'}
//       </button>
//       {status && (
//         <p className={`mt-2 text-sm ${
//           status.includes('Error') ? 'text-red-500' : 'text-green-500'
//         }`}>
//           {status}
//         </p>
//       )}
//     </div>
//   );
// };

// export default DataInitializer;