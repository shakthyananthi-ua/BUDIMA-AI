export default function BudimaLogo({ size = 'default' }: { size?: 'small' | 'default' | 'large' }) {
  const sizeClasses = {
    small: 'w-6 h-6',
    default: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={sizeClasses[size]}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* D Shape - Purple */}
      <path
        d="M 20 15 L 50 15 Q 65 15 65 40 L 65 60 Q 65 85 50 85 L 20 85 L 20 15 Z"
        fill="#8B5CF6"
      />

      {/* Inner white space for D */}
      <path
        d="M 32 28 L 50 28 Q 60 28 60 45 L 60 55 Q 60 72 50 72 L 32 72 L 32 28 Z"
        fill="white"
      />

      {/* Vertical lines in D - Purple accent */}
      <rect x="25" y="20" width="4" height="60" fill="#8B5CF6" />
      <rect x="38" y="20" width="3" height="60" fill="#8B5CF6" />
      <rect x="50" y="20" width="3" height="60" fill="#8B5CF6" />

      {/* Blue Arrow - trending up */}
      <g>
        {/* Arrow shaft */}
        <line x1="70" y1="55" x2="85" y2="35" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round" />
        {/* Arrow head top */}
        <line x1="85" y1="35" x2="80" y2="42" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round" />
        {/* Arrow head right */}
        <line x1="85" y1="35" x2="78" y2="35" stroke="#3B82F6" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
