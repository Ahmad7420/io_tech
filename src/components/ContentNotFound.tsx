// app/not-found.tsx
import { FC } from "react";

const NotFoundPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#643F2E] p-4 rounded-2xl">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-white mb-6">Oops! Content not found.</p>
    </div>
  );
};

export default NotFoundPage;
