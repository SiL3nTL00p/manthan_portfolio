

const BottomMenu = () => (
  <div
    className="fixed bottom-0 left-0 w-full flex justify-start items-end p-4 pt-0 "
    style={{ pointerEvents: 'none' }} // Make only menu itself intercept clicks if needed
  >
    <div className="flex gap-4 bg-transparent">
      {/* Sound */}
      
        <button
  className="flex items-center justify-center rounded-full border border-white/20 px-3 py-2 bg-black/40 backdrop-blur-sm"
  aria-label="Audio"
>
  <svg
    className="w-4 h-4 text-[#a09a95]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 23 23"
    aria-hidden="true"
  >
    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
    <path d="M16 9a5 5 0 0 1 0 6"></path>
    <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
  </svg>
</button>


      </div>
      
      

      

      
    </div>
  
);

export {BottomMenu};
