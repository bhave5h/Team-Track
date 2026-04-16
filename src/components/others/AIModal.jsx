import React from 'react';

const AIModal = ({ isOpen, onClose, loading, content, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#1c1c1c] border border-gray-700/50 w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col items-start translate-y-0 transition-transform duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between w-full px-6 py-4 border-b border-gray-700/50 bg-[#252525]">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center gap-2">
            🤖 {title}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto w-full text-gray-300 whitespace-pre-wrap flex-1 scrollbar-thin scrollbar-thumb-gray-600">
            {loading ? (
                <div className="flex flex-col items-center justify-center py-10 opacity-70">
                    <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
                    <p className="animate-pulse">Generating insights...</p>
                </div>
            ) : (
                <div className="leading-relaxed">
                    {content}
                </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default AIModal;
