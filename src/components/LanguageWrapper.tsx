"use client";
import { setLocale } from "@/store/languageSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const LanguageWrapper: React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();
  const [localeRoute, setLocaleRoute] = useState("en");

  useEffect(() => {
    const locale = getLocaleFromPath();
    dispatch(setLocale(locale));
    setLocaleRoute(locale);
  }, []);
  return <div dir={localeRoute === "en" ? "ltr" : "rtl"}>{children}</div>;
};

interface IProps {
  children: React.ReactNode;
}

const getLocaleFromPath = () => {
  if (typeof window !== "undefined") {
    const pathLocale = window.location.pathname.split("/")[1];
    return pathLocale || "en";
  }
  return "en";
};
