"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export const EmailSubscription: React.FC = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Subscribed with email:", values.email);
      resetForm();
      // Add API call here if needed
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-white text-black w-[16%] flex items-center justify-between rounded-[6px]"
    >
      <div className="w-full">
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="px-3 py-2 bg-white text-black outline-none w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs ml-2 mt-1">
            {formik.errors.email}
          </p>
        )}
      </div>
      <div className="py-2 mr-3">
        <button
          type="submit"
          className="bg-[#4B2615] rounded text-white text-sm p-1"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};
