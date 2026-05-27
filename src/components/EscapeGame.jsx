import React, { useEffect, useRef, useState } from 'react';

const EscapeGame = ({ 
  hp, // 0-100
  inventory, // array of item names
  fullText, // the full text to display with typewriter effect
  choices, // array of up to 3 choice strings
  userInput, // current input value
  setUserInput, // setter for input
  isLoading,
  handleChoiceClick, // (index) => void
  handleSendInput // () => void
}) => {
  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (!fullText) {
      setDisplayText('');
      setCharIndex(0);
      return;
    }
    
    // Reset when fullText changes
    if (textRef.current !== fullText) {
      textRef.current = fullText;
      setCharIndex(0);
      setDisplayText('');
    }
    
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullText.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 30); // Adjust speed as needed
      return () => clearTimeout(timer);
    }
  }, [fullText, charIndex]);

  // Progress bar width based on HP
  const hpWidth = `${Math.max(0, Math.min(100, hp))}%`;
  const hpColor = hp > 50 ? 'bg-green-400' : hp > 20 ? 'bg-yellow-400' : 'bg-red-400';

  return (
    <div className="min-h-screen bg-black text-primary flex flex-col">
      {/* Scanlines overlay (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.01)0,rgba(255,255,255,0.01)1px,transparent 1px,transparent 2px)]" />
      </div>

      {/* Container */}
      <div className="relative flex flex-col h-full w-[1000px] mx-auto my-8 border-2 border-primary/20 rounded-lg overflow-hidden bg-[rgba(5,5,5,0.8)] backdrop-blur-sm">
        {/* Header */}
        <header className="flex flex-col p-4 border-b border-primary/10">
          <div className="flex justify-between items-center w-full">
            <div className="flex-1">
              <p className="text-xs text-primary/60 font-mono uppercase tracking-wider">HULL INTEGRITY</p>
              <div className="w-full bg-gray-800/50 rounded h-2.5 overflow-hidden">
                <div className={`${hpWidth} h-full ${hpColor} transition-width duration-500`} />
              </div>
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <p className="text-xs text-primary/60 font-mono uppercase tracking-wider">CARGO MANIFEST</p>
              <div className="h-6 overflow-y-auto space-y-1">
                {inventory.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-secondary/50 mr-2" />
                    <span className="text-xs text-secondary/80 font-mono">{item}</span>
                  </div>
                ))}
                {inventory.length === 0 && (
                  <p className="text-xs text-secondary/50 font-mono italic">empty</p>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Text Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="animate-pulse text-primary/50 text-lg font-mono">
                통신 연결 중...
              </div>
              {/* Optional scanning animation */}
              <div className="mt-4 w-[200px] h-1 bg-primary/20 rounded overflow-hidden">
                <div className="h-full w-[20%] bg-primary animate-[scan_2s_linear_infinite]" />
              </div>
              <style jsx>{`
                @keyframes scan {
                  to { transform: translateX(100%); }
                }
              `}</style>
            </div>
          ) : (
            <div 
              className="whitespace-pre-wrap font-mono text-primary text-lg leading-relaxed"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {displayText}
              {/* Cursor blink effect */}
              <span className="animate-blink">_</span>
            </div>
          )}
        </main>

        {/* Interaction Area */}
        <footer className="p-4 border-t border-primary/10">
          {/* Choice Buttons */}
          {!isLoading && choices.length > 0 && (
            <div className="space-y-3 mb-4">
              {choices.map((choice, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChoiceClick(idx)}
                  disabled={isLoading}
                  className="w-full text-left bg-transparent border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors font-mono text-primary text-left px-3 py-2 rounded"
                >
                  {choice}
                </button>
              ))}
            </div>
          )}

          {/* Text Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="직접 행동 입력하기..."
              className="flex-1 bg-gray-900/50 border border-primary/30 text-primary placeholder-primary/40 font-mono px-3 py-2 rounded-l focus:outline-none focus:border-primary/70 focus:bg-gray-900/80"
              disabled={isLoading}
            />
            <button
              onClick={handleSendInput}
              disabled={isLoading || userInput.trim() === ''}
              className="bg-transparent border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-colors font-mono text-primary px-4 py-2 rounded-r"
            >
              전송
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default EscapeGame;