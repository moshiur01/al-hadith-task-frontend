import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/asset 0.png";
import helpingHand from "../../assets/helping-hand.svg";
import drawerIcon from "../../assets/setting-drawer.svg";
import SearchModal from "../UI/Modal/SearchModal";
import RightSidebar from "../rightSide/RightSidebar";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* desktop  */}

        {/* heading + logo  */}
        <Link href={"/"} className="flex gap-6 lg:mt-2 lg:ml-1">
          {/* logo */}
          <div className="w-11 md-max:w-9 h-11 md-max:h-9">
            <Image src={logo} alt="website-logo" />
          </div>
          <div className="my-auto">
            {/* for lg and more  */}
            <p className="font-bold lg:text-xl text-3xl hidden lg:block ">
              হাদিস সমূহ
            </p>

            {/* for sm and tablet  */}
            <p className="font-medium lg:text-xl text-2xl text-[#2B9E76] lg:hidden xl:hidden 2xl:hidden ">
              আল হাদিস
            </p>
            <p className="text-sm hidden lg:inline-block">
              হাদিস পড়ুন শিখুন এবং জানুন
            </p>
          </div>
        </Link>
      </div>

      <div className="navbar-end lg:gap-8 gap-5 my-auto ">
        {/* search bar  for lg */}
        <div className="hidden lg:inline-block ">
          <div className="relative flex font-sans ">
            <div className="px-3 py-2 rounded-md flex items-center justify-center absolute top-[6px] left-1 bottom-1 lg:size-10 ">
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
              className="w-full rounded-md pr-4 pl-12 py-3 shadow-sm focus:outline-none border-[2.5px] border-[#DEE1E5]  placeholder:text-mute-grey placeholder:text-base bg-white lg:w-64"
              id="search"
              name="search"
              type="text"
              placeholder="Search Hadith"
            />
          </div>
        </div>

        {/* search btn for sm and md*/}
        <div className="mb-2">
          <button className="bg-[#DEE1E5] size-11 flex justify-center items-center rounded-lg lg:hidden">
            {/* search logo  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              onClick={() =>
                document.getElementById("search-modal").showModal()
              }
            >
              <path
                d="M19 19L13 13L19 19ZM15 8C15 8.91925 14.8189 9.82951 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.82951 14.8189 8.91925 15 8 15C7.08075 15 6.1705 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.82951 1 8.91925 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8Z"
                stroke="#868686"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* <SearchModal id={"search-modal"} /> */}
          </button>
          <SearchModal id={"search-modal"} />
        </div>

        {/* donate btn */}
        <div className="hidden 2xl:block ">
          <button className="flex bg-[#2B9E76] w-40 h-12 rounded-lg items-center justify-center gap-3">
            <p className="text-white text-base font-semibold">সাপোর্ট করুন</p>
            <Image src={helpingHand} alt="support logo" className="" />
          </button>
        </div>

        {/* responsive drawer  */}
        {/* setting - drawer  */}
        <div className="size-14 2xl:hidden">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn bg-[#2B9E76] "
              >
                {/* drawer-icon  */}
                <Image
                  src={drawerIcon}
                  alt="drawer-icon"
                  width={60}
                  height={60}
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>

              <div className="menu p-4 w-90 min-h-full bg-base-200 text-base-content">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
