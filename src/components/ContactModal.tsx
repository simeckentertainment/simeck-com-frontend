import { X, Mail, Clock } from 'lucide-react';
import { Button } from './ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

export function ContactModal({ isOpen, onClose, type, message }: ContactModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {type === 'success' ? (
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
              ) : (
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {type === 'success' ? 'Message Sent!' : 'Oops!'}
                </h3>
                <p className="text-sm text-gray-500">
                  {type === 'success' ? 'Thank you for reaching out' : 'Something went wrong'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              {message}
            </p>
            
            {type === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-800 mb-1">What happens next?</h4>
                    <p className="text-sm text-green-700">
                      We'll review your message and get back to you as soon as possible. 
                      Our team typically responds within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-end">
            <Button
              onClick={onClose}
              className={`${
                type === 'success' 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'bg-red-600 hover:bg-red-700 text-white'
              } px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105`}
            >
              {type === 'success' ? 'Got it!' : 'Try Again'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
