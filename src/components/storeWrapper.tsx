"use client";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

export const StoreWrapper: React.FC<IProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

interface IProps {
  children: React.ReactNode;
}
