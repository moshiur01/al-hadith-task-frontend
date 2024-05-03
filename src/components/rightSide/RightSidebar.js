import Image from "next/image";
import { useState } from "react";
import downArrow from "../../assets/down-arrow.svg";
import Message from "./Message";
const RightSidebar = () => {
  const [arabicFontRange, setArabicFontRange] = useState(30);
  const [TranslateFontRange, setTranslateFontRange] = useState(60);
  return (
    <div>
      {/* setting part  */}
      <div className="bg-white rounded-xl">
        {/* <div className="text-center text-2xl pt-4 :flex lg:justify-between lg:mx-4">
          <h3>সেটিংস</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="size-7"
          >
            <path
              d="M6 18L18 6M6 6L18 18"
              stroke="#4D4D4D"
              strokewidth="1.5"
              strokelinecap="round"
              strokelinejoin="round"
            ></path>
          </svg>
        </div> */}
        <div className="text-center text-2xl pt-4">
          <h3>সেটিংস</h3>
        </div>

        <div className="ml-5 text-base mt-3 mr-4">
          <p className="font-medium text-[16.8px]">আরবি ফন্ট সিলেক্ট করুন</p>
          {/* Dropdown Select */}
          <details className="dropdown">
            <summary className=" mt-2 w-full p-2 border rounded-md focus:outline-none flex justify-end gap-60">
              <span className="ml-2 text-base">Select</span>
              <Image src={downArrow} alt="down arrow" width={20} height={20} />
            </summary>
            <ul className="p-2 menu dropdown-content z-[1] bg-base-100 rounded-box w-full shadow-lg text-lg">
              <li>
                <a>KFGQ</a>
              </li>
              <li>
                <a>Me Quran</a>
              </li>
              <li>
                <a>Al Mushaf</a>
              </li>
              <li>
                <a>Amiri</a>
              </li>
              <li>
                <a>Arial</a>
              </li>
            </ul>
          </details>
        </div>

        {/*arabic font size */}
        <div className="mx-4 mt-8">
          <p className="mb-3 font-medium text-[16.8px]">এরাবিক ফন্ট সাইজ</p>

          <div className="flex justify-end items-center gap-6">
            <input
              type="range"
              min={0}
              max={100}
              value={arabicFontRange}
              className="range range-success range-xs"
              onChange={(e) => {
                setArabicFontRange(e.target.value);
              }}
            />
            <span> {arabicFontRange}</span>
          </div>
        </div>
        {/*translate size */}
        <div className="mx-4 mt-8">
          <p className="mb-3 font-medium text-[16.8px]">অনুবাদ ফন্ট সাইজ</p>

          <div className="flex justify-end items-center gap-6">
            <input
              type="range"
              min={0}
              max={100}
              value={TranslateFontRange}
              className="range range-success range-xs"
              onChange={(e) => {
                setTranslateFontRange(e.target.value);
              }}
            />
            <span> {TranslateFontRange}</span>
          </div>
        </div>

        <div className="flex justify-between mx-5 mt-6 pb-4 gap-48 text-lg font-semibold">
          <span className="text-nowrap font-medium text-[16.8px]">
            নাইট মোড
          </span>
          <input
            type="checkbox"
            className="toggle [--tglbg:#ECEEF0] toggle-accent text-white w-11 h-5 border-0 "
          />
        </div>
      </div>

      <Message />
    </div>
  );
};

export default RightSidebar;
