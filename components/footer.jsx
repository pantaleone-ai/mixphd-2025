import React from 'react';

export function Footer () {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-2 border-t border-gray-800 shadow-sm bg-black">
      <span className="text-xs text-gray-500 sm:text-center">
        © <a href="https://mixphd.com/" className="hover:underline"><b>🍸 MixPHD™</b></a> All Rights Reserved
      </span>
      <ul className="flex flex-wrap items-center mt-1 mb-1 text-xs font-medium text-gray-500">
        {/* <li>
          <a href="#" className="hover:underline me-4 md:me-6">About</a>
        </li> */}
        <li>
          <a href="/privacy" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms" className="hover:underline me-4 md:me-6">Terms of use</a>
        </li>
        {/* <li>
          <a href="#" className="hover:underline">Contact</a>
        </li> */}
        <span className="text-xs text-gray-800 m-0 p-0">
          mixPHD.com is for those of legal drinking age. By accessing, you confirm you are of drinking age. Drink responsibly.
        </span>
      </ul>
    </footer>
  );
};
