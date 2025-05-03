import { useState } from 'react';
import { X } from 'lucide-react';
import PropTypes from 'prop-types';

const PaymentModal = ({ course, onClose, onSubmit, isProcessing }) => {
  const [refCode, setRefCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(refCode);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          disabled={isProcessing}
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Course: {course.title}</h3>
          <p className="text-xl font-bold text-primary mb-4">Amount: KSH {course.price}</p>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-medium mb-2">Payment Instructions:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Send KSH <span className="font-bold">{course.price}</span>to M-PESA number: <span className="font-bold">+254796591251</span></li>
              <li>Confirm Payment to <span className="font-bold">PETER KINYANJUI.</span></li>
              <li>Enter the M-PESA reference code below</li>
              <li>Wait for approval after submission</li>
            </ol>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="refCode" className="block text-sm font-medium text-gray-700 mb-2">
              M-PESA Reference Code
            </label>
            <input
              type="text"
              id="refCode"
              value={refCode}
              onChange={(e) => setRefCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Enter Mpesa refCode eg.TBN6V9M6Y"
              required
              disabled={isProcessing}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:bg-gray-400"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              'Submit Payment'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

PaymentModal.propTypes = {
    course: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired
  };
  
  PaymentModal.defaultProps = {
    isProcessing: false
  };

export default PaymentModal;