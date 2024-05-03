import Image from "next/image";

import downArrow from "../../../assets/down-arrow.svg";

const SearchModal = ({ id }) => {
  return (
    <dialog id={id} className="modal sm:modal-middle">
      <div className="modal-box">
        {/* search box  */}
        <div className="relative flex font-sans ">
          <div className="px-3 py-2 rounded-md flex items-center justify-center absolute top-[6px] left-1 bottom-1 size-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            className="min-w-full rounded-md pr-4 pl-12 py-3 shadow-sm outline-none border-0  placeholder:text-mute-grey placeholder:text-base lg:w-64 bg-gray-100"
            id="search"
            name="search"
            type="text"
            placeholder="Search Hadith"
          />
        </div>
        {/* hadith book select  */}
        <div className="mt-5 mr-4 w-full text-xl">
          <p className="font-medium font-bangla-v2 text-[16.8px]">
            হাদিসের বই সিলেক্ট করুন
          </p>
          {/* Dropdown Select */}
          <details className="dropdown w-full">
            <summary className=" mt-2 w-full p-2 border rounded-md focus:outline-none flex justify-between gap-60">
              <span className="ml-2 text-base">সকল বই</span>
              <Image src={downArrow} alt="down arrow" width={10} height={10} />
            </summary>
          </details>
        </div>

        {/* hadith chapter select  */}

        <div className="mt-5 mr-4 w-full text-xl">
          <p className="font-medium font-bangla-v2 text-[16.8px]">
            হাদিসের অধ্যায় সিলেক্ট করুন
          </p>
          {/* Dropdown Select */}
          <details className="dropdown w-full">
            <summary className=" mt-2 w-full p-2 border rounded-md focus:outline-none flex justify-between gap-60">
              <span className="ml-2 text-base">সকল অধ্যায়</span>
              <Image src={downArrow} alt="down arrow" width={10} height={10} />
            </summary>
          </details>
        </div>

        {/* checkbox */}
        <div className="form-control mt-6  ">
          <label className="label cursor-pointer justify-start gap-3">
            <input type="checkbox" className="checkbox size-4 " />
            <span className="label-text text-lg">আংশিক মিল</span>

            <input type="checkbox" className="checkbox size-4" />
            <span className="label-text text-lg">হুবহু মিল</span>
          </label>
        </div>

        <div className="modal-action">
          <form
            method="dialog"
            className="flex gap-5 justify-center items-center"
          >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-gray-100 px-24">বাতিল</button>
            <button className="btn bg-[#2B9E76] px-20 text-white">
              সার্চ করুন
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default SearchModal;
