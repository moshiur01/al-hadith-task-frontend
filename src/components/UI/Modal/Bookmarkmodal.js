import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import downArrow from "../../../assets/down-arrow.svg";
import tikMark from "../../../assets/tikmark.svg";

const BookmarkModal = ({ id }) => {
  const [active, setActive] = useState("green");
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle font-bangla">
      <div className="modal-box">
        <h3 className="font-bold text-lg">বুকমার্ক</h3>

        <div className="flex flex-col gap-y-5 ">
          <details className="dropdown w-full">
            <summary className=" mt-2 w-full p-2 border rounded-md focus:outline-none flex justify-between gap-60">
              <span className="text-base">Select</span>
              <Image src={downArrow} alt="down arrow" width={20} height={20} />
            </summary>
            <ul className="p-2 menu dropdown-content z-[1] bg-base-100 rounded-box w-full shadow-lg text-lg"></ul>
          </details>

          <p>অথবা,</p>

          <div className="w-full">
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Create New Bookmark model"
            />
          </div>
          <p>ফোল্ডার কালার পরিবর্তন করুন</p>
          <div className="flex gap-8">
            <span
              className="bg-[#2B9E76] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("green")}
            >
              {active === "green" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
            <span
              className="bg-[#FFC107] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("yellow")}
            >
              {active === "yellow" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
            <span
              className="bg-[#9C27B0] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("pink")}
            >
              {active === "pink" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
            <span
              className="bg-[#2196F3] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("lightBlue")}
            >
              {active === "lightBlue" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
            <span
              className="bg-[#E91E63] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("red")}
            >
              {active === "red" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
            <span
              className="bg-[#3F51B5] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("violet")}
            >
              {active === "violet" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
            <span
              className="bg-[#00BCD4] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("skyBlue")}
            >
              {active === "skyBlue" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
            <span
              className="bg-[#8BC34A] w-8 h-8 xs-max:w-6 xs-max:h-6 rounded-full flex justify-center items-center transition duration-75 delay-75
              cursor-pointer"
              onClick={() => setActive("lemon")}
            >
              {active === "lemon" && (
                <Image src={tikMark} alt="tik mark" width={25} height={10} />
              )}
            </span>
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog" className="flex gap-5">
            {/* if there is a button in form, it will close the modal */}

            <button className="btn bg-[#EDEDED] px-12 text-base font-bangla-v2 font-normal">
              বাতিল
            </button>
            <button
              className="btn bg-[#2B9E76] text-white px-12 text-base font-bangla-v2 font-normal hover:bg-[#2B9E76]"
              onClick={() => {
                toast.success("শিঘ্রই আসছে ইন শা আল্লাহ");
              }}
            >
              সেভ
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default BookmarkModal;
