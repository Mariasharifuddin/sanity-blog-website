import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center text-indigo-500 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl font-bold text-black">LUXURY ON WRIST</span>
          </a>
          {/* Navigation Links */}
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-black">
          <h3 className="text-xl font-semibold hover:text-gray-900 transition duration-300 cursor-pointer">
          𝖶𝗁𝖾𝗋𝖾 𝖲𝗍𝗒𝗅𝖾 𝖬𝖾𝖾𝗍𝗌 𝖯𝗋𝖾𝖼𝗂𝗌𝗂𝗈𝗇   
    
  </h3>
        </nav>
          {/* Call-to-Action Button */}
          <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
            Shop Now
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
