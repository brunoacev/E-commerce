import React from "react";

interface Props {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  noIcon?: boolean;
}

function Button({ title, onClick, loading, noIcon, padding, width }: Props) {
  return (
    <div>
      <button className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-indigo-500 bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 px-5 py-3 text-center text-base font-medium text-indigo-100 shadow-sm hover:text-white">
        <svg
          className="mr-2 h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
        <span className="relative">{loading ? "Redirecionando..." : title}</span>
      </button>
    </div>
  );
}

export default Button;
