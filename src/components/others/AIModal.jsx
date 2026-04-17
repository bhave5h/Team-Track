import React, { useState } from 'react';
import Loader from './Loader';

const AIModal = ({ isOpen, onClose, loading, content, title }) => {
  const [showFull, setShowFull] = useState(false);
  if (!isOpen) return null;

  let displayContent = content;
  const isTeamOverview = title === "Team Overview";
  const wordMatch = content ? content.match(/\S+/g) : [];
  const wordCount = wordMatch ? wordMatch.length : 0;
  const shouldTruncate = isTeamOverview && wordCount > 50;

  if (shouldTruncate && !showFull) {
      displayContent = wordMatch.slice(0, 50).join(" ") + "...";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-notion-black/40 backdrop-blur-[2px]" onClick={onClose}></div>
      
      <div className="relative bg-notion-white dark:bg-notion-dark border border-[rgba(0,0,0,0.1)] dark:border-white/10 w-full max-w-2xl max-h-[80vh] rounded-[16px] shadow-deep overflow-hidden flex flex-col items-start translate-y-0 transition-transform duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between w-full px-6 py-4 border-b border-[rgba(0,0,0,0.1)] dark:border-white/10 bg-notion-white dark:bg-notion-dark">
          <h2 className="text-[20px] font-bold text-notion-black dark:text-notion-white tracking-tight-xs flex items-center gap-2">
            {title}
          </h2>
          <button 
            onClick={onClose}
            className="text-notion-gray-500 dark:text-notion-gray-300 hover:text-notion-black dark:hover:text-white transition-colors p-1 rounded-[4px] hover:bg-black/5 dark:hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto w-full text-notion-black dark:text-notion-white text-[16px] leading-[1.6] whitespace-pre-wrap flex-1">
            {loading ? (
                <div className="flex flex-col items-center justify-center py-10">
                    <Loader />
                </div>
            ) : (
                <div className="leading-relaxed">
                    {displayContent}
                    {shouldTruncate && (
                      <button 
                         onClick={() => setShowFull(!showFull)}
                         className="block mt-4 text-notion-blue hover:underline font-medium"
                      >
                         {showFull ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default AIModal;
