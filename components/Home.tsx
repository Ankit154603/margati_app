import React from 'react';

// Define the props interface for the QuestionCard component
interface QuestionCardProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define the QuestionCard component
const QuestionCard: React.FC<QuestionCardProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      {/* Your modal content */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>Question Card</h2>
            {/* Add your question card content here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
