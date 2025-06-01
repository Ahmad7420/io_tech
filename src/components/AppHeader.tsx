"use client";
import Link from "next/link";
import { ServiceMenu } from "./ServiceMenu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useCallback, useEffect, useRef, useState } from "react";
import { LangToggle } from "./LangToggle";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useAppSelector } from "@/store";

export const AppHeader: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const text = searchParams.get("text");
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("HeaderNavigation");
  const locale = useAppSelector((state) => state.language.locale);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowSearch(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (text) {
      setSearchText(text as string);
      setShowSearch(true);
    }
  }, [text]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        showSearch &&
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setSearchText("");
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearch]);

  const handleSearch = useCallback(() => {
    router.push(`${locale}/search?text=${searchText}`);
  }, [router, searchText]);

  return (
    <header
      className={`w-full h-16 bg-transparent py-4 px-6 flex items-center ${
        !showSearch ? "justify-between" : "justify-end"
      }  text-white fixed top-0 z-50 font-dm-sans`}
    >
      {/* Logo / Site Name */}
      {/* <div className="text-lg font-bold">Logo</div> */}

      {/* Navigation Links */}
      {!showSearch && (
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-gray-300">
            {t("home")}
          </Link>
          <Link href="#" className="hover:text-gray-300">
            {t("about_us")}
          </Link>
          <ServiceMenu />
          <Link href="#" className="hover:text-gray-300">
            {t("blog")}
          </Link>
          <Link href="#" className="hover:text-gray-300">
            {t("our_team")}
          </Link>
          <Link href="#" className="hover:text-gray-300">
            {t("contact_us")}
          </Link>
        </nav>
      )}

      {/* Right Side Icons */}
      <div className="flex items-center gap-4" ref={searchRef}>
        {showSearch ? (
          <div className="relative">
            <span onClick={() => handleSearch()}>
              <MagnifyingGlassIcon className="w-5 h-5 text-white absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </span>
            <input
              type="text"
              value={searchText}
              className="w-[403px] h-[41px] rounded-[8px] border border-white bg-transparent text-white pl-10 pr-4 placeholder-white"
              autoFocus
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
          </div>
        ) : (
          <button
            className="hover:text-gray-300"
            onClick={() => setShowSearch(true)}
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
        )}

        <button className="w-[130px] h-[40px] rounded-[8px] border">
          <span className="text-white text-sm">{t("appointment")}</span>
        </button>
      </div>

      {/* Lang toggle */}
      {!showSearch && <LangToggle />}
    </header>
  );
};
