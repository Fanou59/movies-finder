"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const useQueryState = (queryKey, initialValue) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!searchValue) {
      params.delete(queryKey);
    } else {
      params.set(queryKey, searchValue);
    }
    console.log(params);
  }, [queryKey, searchValue]);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);
  return [searchValue, setSearchValue];
};

export default function Home() {
  const [searchValue, setSearchValue] = useQueryState("s", "");

  return (
    <div className="flex flex-col gap-4 py-8 max-w-4xl m-auto px-4">
      <header>
        <h1 className="text-4xl font-bold text-center">MovieFinder</h1>
      </header>
      <main>
        <fieldset className="border p-4 w-full rounded-lg border-neutral">
          <legend className="bg-base-100">Search</legend>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </fieldset>
        {/* <Link
          href={`${url}?search=${searchValue}`}
        >{`${url}?search=${searchValue}`}</Link> */}
      </main>
    </div>
  );
}
