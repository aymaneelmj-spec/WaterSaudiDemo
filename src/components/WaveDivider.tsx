import React from 'react';

interface WaveDividerProps {
  className?: string;
  variant?: 'amber' | 'teal' | 'subtle';
  flip?: boolean;
}

export const WaveDivider: React.FC<WaveDividerProps> = ({
  className = '',
  variant = 'amber',
  flip = false
}) => {
  const colorMap = {
    amber: '#FF7A33',
    teal: '#3FB8AF',
    subtle: '#2A4354'
  };

  const activeColor = colorMap[variant];

  return (
    <div
      className={`w-full overflow-hidden flex items-center justify-center my-6 py-2 opacity-80 ${flip ? 'scale-y-[-1]' : ''} ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full max-w-5xl h-6 text-current"
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Baseline trace line */}
        <line x1="0" y1="20" x2="360" y2="20" stroke="#1D3442" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="840" y1="20" x2="1200" y2="20" stroke="#1D3442" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Sonar Acoustic Waveform Signature Motif */}
        <path
          d="M360 20 L390 20 L410 14 L430 26 L450 8 L470 32 L490 2 L510 38 L530 0 L550 40 L570 6 L590 34 L600 20 L610 6 L630 34 L650 0 L670 40 L690 2 L710 38 L730 8 L750 32 L770 14 L790 26 L810 20 L840 20"
          stroke={activeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Pulse center leak marker dots */}
        <circle cx="600" cy="20" r="3.5" fill={activeColor} className="animate-ping opacity-75" />
        <circle cx="600" cy="20" r="2.5" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
