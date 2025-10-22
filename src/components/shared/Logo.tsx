export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* simplified from your large SVG */}
        <path d="M12 0L15 9H9L12 0Z" />
        <path d="M12 24L9 15H15L12 24Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className="font-semibold text-lg tracking-tight">
        Digital Wallet
      </span>
    </div>
  );
}
