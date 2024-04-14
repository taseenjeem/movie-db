"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IoLanguage } from "react-icons/io5";

const LanguageSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();

  const availableLanguages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "bn",
      name: "Bangla",
    },
  ];

  const currentLanguage = availableLanguages.find((lang) =>
    pathname.includes(lang.code)
  );

  const [selectedLanguage, setSelectedLanguage] = useState(
    currentLanguage ?? availableLanguages[0]
  );

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    const selectedLang = availableLanguages.find(
      (lang) => lang.code === langCode
    );
    setSelectedLanguage(selectedLang);
    setShowMenu(false);
    router.push(`/${langCode}`);
  };

  return (
    <>
      <div className="flex gap-4 items-center">
        <div className="relative" ref={menuRef}>
          <button
            className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-2 flex items-center gap-2"
            onClick={() => setShowMenu(!showMenu)}
          >
            <IoLanguage className="text-primary size-6" />
            {selectedLanguage.name}
          </button>
          {showMenu && (
            <div className="absolute right-0 top-full mt-2 w-40 rounded-md dark:bg-body bg-white p-2 z-10 shadow-lg border border-primary">
              {availableLanguages.map((lang) => (
                <li
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:dark:bg-gray-800 hover:bg-gray-300 duration-200"
                >
                  {lang.name}
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LanguageSwitch;
