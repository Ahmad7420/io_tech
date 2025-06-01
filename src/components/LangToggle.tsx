"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { setLocale } from "@/store/languageSlice";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const languages = [
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export const LangToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector((state) => state.language.locale);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLangUageSwitch = (newLocale: string) => {
    dispatch(setLocale(newLocale));

    // Keep existing query parameters
    const queryString = searchParams.toString();

    // Replace current locale in path with newLocale
    const segments = pathname.split("/");
    segments[1] = newLocale; // Assumes the locale is in the first segment
    const newPath = segments.join("/");

    router.push(`${newPath}${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <Menu
      as="div"
      className={`relative inline-block text-left ${
        locale === "ar" ? "mr-4" : "ml-4"
      }`}
    >
      {({ open }) => (
        <>
          <MenuButton className="inline-flex items-center gap-2 px-3 py-1.5 text-sm/6 border-none">
            {locale.toUpperCase()}
            {open ? (
              <ChevronUpIcon className="size-4" />
            ) : (
              <ChevronDownIcon className="size-4" />
            )}
          </MenuButton>
          <MenuItems
            className={`absolute mt-2 w-28 origin-top-right rounded-md bg-[#4B2615] z-50 focus:outline-none
          ${locale === "ar" ? "left-0" : "right-0"}`}
          >
            {languages.map((lang) => (
              <MenuItem key={lang.code}>
                <button
                  onClick={() => handleLangUageSwitch(lang.code)}
                  className="block w-full px-4 py-2 text-sm text-left text-white hover:bg-amber-950"
                >
                  {lang.label}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
};
