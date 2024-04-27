import Image from "next/image";
import toast from "react-hot-toast";
import bookmark from "../../assets/bookmark-thin.svg";
import breadcrumb from "../../assets/breadcome-book.svg";
import bookLogo from "../../assets/bukhari.svg";
import copy from "../../assets/copy.svg";
import direct from "../../assets/direct.svg";
import lineBar from "../../assets/linebar.svg";
import openBook from "../../assets/open-book.svg";
import report from "../../assets/report.svg";
import share from "../../assets/share.svg";
import triangle from "../../assets/triangle.svg";
import BookmarkModal from "../UI/Modal/Bookmarkmodal";
import ShareModal from "../UI/Modal/ShareModal";
import Category from "../category/Category";

const AllHadith = ({ allHadith }) => {
  //copy to clipboard
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("লিঙ্ক কপি করা হয়েছে");
    } catch (error) {
      console.log(error);
      alert("Error copying to clipboard:", error);
    }
  };

  return (
    <div className="font-sans lg:ml-5">
      {/* breadcrumbs */}
      <div className="text-sm breadcrumbs bg-[#FAFBFB] mr-5 h-14 rounded-t-xl  flex items-center ">
        <ul className="ml-5 text-md">
          <li>
            <Image
              src={breadcrumb}
              alt="breadcrumbs book icon "
              width={20}
              height={20}
            />
          </li>
          <li>
            <a>Bukari</a>
          </li>
          <li>1</li>
        </ul>
      </div>

      {/* category name  for lg */}
      <div className="h-28 mt-1 mr-5 px-5 lg:flex justify-between items-center bg-white rounded-b-xl  hidden ">
        <div className="flex gap-5  items-center">
          <div>
            <Image src={bookLogo} alt="book name logo" width={40} height={40} />
          </div>
          <div className="">
            <h1 className="font-bold text-xl mb-3 ">সহিহ বুখারী</h1>
            <p className="text-xs font-bold"> সর্বমোট হাদিস - ৭৫৬৩</p>
          </div>
        </div>
        <div className="font-arabic text-3xl">
          <p>صحيح البخاري</p>
        </div>
      </div>

      {/* category name for mb  */}
      <div className="h-14 mt-1 mr-5 px-5 flex justify-between items-center bg-white rounded-b-xl lg:hidden">
        <div className="flex gap-3  items-center">
          {/* drawer */}

          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className=" drawer-button">
                {/* drawer-icon  */}
                <Image
                  src={lineBar}
                  alt="book name logo"
                  width={15}
                  height={15}
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="bg-white h-full pt-20 px-4">
                <Category />
              </div>
            </div>
          </div>

          <div className="cursor-pointer  whitespace-nowrap">
            <h1 className="font-bold">সহিহ বুখারী</h1>
          </div>
        </div>
      </div>

      {/* chapter name  */}
      <div className="h-20 flex items-center bg-white mt-5 rounded-xl gap-5 px-5 mr-5">
        <p className="size-10 bg-[#2B9E76] text-white font-bold rounded-xl inline-block text-center pt-2">
          ১
        </p>
        <p className="text-base font-medium">ওহীর সূচনা অধ্যায়</p>
      </div>

      {/* map start here  */}
      {allHadith?.map((hadith) => (
        <>
          {/* section details  */}
          <div
            className="h-auto bg-white mr-5 mt-5 p-5 rounded-xl flex flex-col justify-center items-stretch gap-10"
            key={hadith?.id}
          >
            <div className="flex items-center gap-3">
              <Image
                src={openBook}
                alt="open book icon"
                width={33}
                height={33}
              />
              <p className="font-semibold">{hadith?.section_number}</p>
            </div>
            <div>
              <p className="font-medium text-sm">{hadith?.section_title}</p>
              <hr className="mt-4 mb-0" />
            </div>

            <div>
              <p className="text-sm">{hadith?.preface}</p>
            </div>
          </div>

          {/* main hadith  */}
          <div
            className="bg-white px-5 mr-5 mt-5 rounded-xl"
            key={hadith?.hadith_id}
          >
            <div className="pt-8 flex gap-4 items-center text-[#2B9E76]">
              <svg
                width="25"
                height="25"
                className="fill-[#2B9E76]"
                viewBox="0 0 25 25"
                fill="green"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 24.875C12.4259 24.8755 12.3525 24.8613 12.284 24.8333C12.2155 24.8053 12.1531 24.764 12.1006 24.7119L8.89433 21.5H4.06246C3.91327 21.5 3.7702 21.4408 3.66471 21.3353C3.55922 21.2298 3.49996 21.0867 3.49996 20.9375V16.1056L0.288083 12.8994C0.183316 12.794 0.124512 12.6514 0.124512 12.5028C0.124512 12.3542 0.183316 12.2117 0.288083 12.1063L3.49996 8.89439V4.06252C3.49996 3.91333 3.55922 3.77026 3.66471 3.66477C3.7702 3.55928 3.91327 3.50002 4.06246 3.50002H8.89433L12.1062 0.288144C12.2116 0.183378 12.3542 0.124573 12.5028 0.124573C12.6514 0.124573 12.7939 0.183378 12.8993 0.288144L16.1056 3.50002H20.9375C21.0866 3.50002 21.2297 3.55928 21.3352 3.66477C21.4407 3.77026 21.5 3.91333 21.5 4.06252V8.89439L24.7118 12.1063C24.8166 12.2117 24.8754 12.3542 24.8754 12.5028C24.8754 12.6514 24.8166 12.794 24.7118 12.8994L21.5 16.1056V20.9375C21.5 21.0867 21.4407 21.2298 21.3352 21.3353C21.2297 21.4408 21.0866 21.5 20.9375 21.5H16.1056L12.8937 24.7119C12.7889 24.8158 12.6475 24.8744 12.5 24.875ZM4.62496 20.375H9.12496C9.19899 20.3746 9.27237 20.3888 9.34091 20.4168C9.40944 20.4448 9.47177 20.486 9.52433 20.5381L12.5 23.5194L15.4756 20.5438C15.5277 20.4906 15.5898 20.4483 15.6584 20.4194C15.7269 20.3904 15.8005 20.3753 15.875 20.375H20.375V15.875C20.3745 15.801 20.3887 15.7276 20.4167 15.6591C20.4447 15.5905 20.486 15.5282 20.5381 15.4756L23.5193 12.5L20.5437 9.52439C20.4906 9.4723 20.4483 9.41017 20.4193 9.34162C20.3903 9.27306 20.3753 9.19944 20.375 9.12502V4.62502H15.875C15.8009 4.62545 15.7275 4.61126 15.659 4.58326C15.5905 4.55527 15.5281 4.51403 15.4756 4.46189L12.5 1.48064L9.52433 4.46189C9.47177 4.51403 9.40944 4.55527 9.34091 4.58326C9.27237 4.61126 9.19899 4.62545 9.12496 4.62502H4.62496V9.12502C4.62539 9.19905 4.6112 9.27243 4.5832 9.34097C4.55521 9.4095 4.51397 9.47183 4.46183 9.52439L1.48058 12.5L4.45621 15.4756C4.50936 15.5277 4.55164 15.5899 4.58061 15.6584C4.60957 15.727 4.62465 15.8006 4.62496 15.875V20.375Z"></path>
                <path d="M12.5 20.3751C12.4259 20.3755 12.3525 20.3613 12.284 20.3333C12.2155 20.3053 12.1531 20.2641 12.1006 20.212L10.0193 18.1251H7.43746C7.28827 18.1251 7.1452 18.0658 7.03971 17.9603C6.93422 17.8548 6.87496 17.7118 6.87496 17.5626V14.9807L4.78808 12.8938C4.68332 12.7884 4.62451 12.6459 4.62451 12.4973C4.62451 12.3487 4.68332 12.2061 4.78808 12.1007L6.87496 10.0195V7.43758C6.87496 7.2884 6.93422 7.14532 7.03971 7.03983C7.1452 6.93434 7.28827 6.87508 7.43746 6.87508H10.0193L12.1062 4.7882C12.2116 4.68344 12.3542 4.62463 12.5028 4.62463C12.6514 4.62463 12.7939 4.68344 12.8993 4.7882L14.9806 6.87508H17.5625C17.7116 6.87508 17.8547 6.93434 17.9602 7.03983C18.0657 7.14532 18.125 7.2884 18.125 7.43758V10.0195L20.2118 12.1063C20.3166 12.2117 20.3754 12.3543 20.3754 12.5029C20.3754 12.6515 20.3166 12.7941 20.2118 12.8995L18.125 14.9807V17.5626C18.125 17.7118 18.0657 17.8548 17.9602 17.9603C17.8547 18.0658 17.7116 18.1251 17.5625 18.1251H14.9806L12.8937 20.212C12.7889 20.3159 12.6475 20.3745 12.5 20.3751ZM7.99996 17.0001H10.25C10.324 16.9997 10.3974 17.0138 10.4659 17.0418C10.5344 17.0698 10.5968 17.1111 10.6493 17.1632L12.5 19.0195L14.3506 17.1688C14.4027 17.1157 14.4648 17.0734 14.5334 17.0444C14.6019 17.0155 14.6755 17.0004 14.75 17.0001H17V14.7501C16.9995 14.6761 17.0137 14.6027 17.0417 14.5341C17.0697 14.4656 17.111 14.4033 17.1631 14.3507L19.0193 12.5001L17.1687 10.6495C17.1156 10.5974 17.0733 10.5352 17.0443 10.4667C17.0153 10.3981 17.0003 10.3245 17 10.2501V8.00008H14.75C14.6759 8.00051 14.6025 7.98632 14.534 7.95833C14.4655 7.93033 14.4031 7.88909 14.3506 7.83695L12.5 5.9807L10.6493 7.83133C10.5972 7.88448 10.5351 7.92676 10.4666 7.95573C10.398 7.9847 10.3244 7.99977 10.25 8.00008H7.99996V10.2501C8.00039 10.3241 7.9862 10.3975 7.9582 10.466C7.93021 10.5346 7.88897 10.5969 7.83683 10.6495L5.98058 12.5001L7.83121 14.3507C7.88436 14.4028 7.92664 14.4649 7.95561 14.5335C7.98457 14.602 7.99965 14.6757 7.99996 14.7501V17.0001Z"></path>
                <path d="M12.5 14.75C12.055 14.75 11.62 14.618 11.25 14.3708C10.88 14.1236 10.5916 13.7722 10.4213 13.361C10.251 12.9499 10.2064 12.4975 10.2932 12.061C10.3801 11.6246 10.5943 11.2237 10.909 10.909C11.2237 10.5943 11.6246 10.3801 12.061 10.2932C12.4975 10.2064 12.9499 10.251 13.361 10.4213C13.7722 10.5916 14.1236 10.88 14.3708 11.25C14.618 11.62 14.75 12.055 14.75 12.5C14.75 13.0967 14.5129 13.669 14.091 14.091C13.669 14.5129 13.0967 14.75 12.5 14.75ZM12.5 11.375C12.2775 11.375 12.06 11.441 11.875 11.5646C11.69 11.6882 11.5458 11.8639 11.4606 12.0695C11.3755 12.275 11.3532 12.5012 11.3966 12.7195C11.44 12.9377 11.5472 13.1382 11.7045 13.2955C11.8618 13.4528 12.0623 13.56 12.2805 13.6034C12.4988 13.6468 12.725 13.6245 12.9305 13.5394C13.1361 13.4542 13.3118 13.31 13.4354 13.125C13.559 12.94 13.625 12.7225 13.625 12.5C13.625 12.2016 13.5065 11.9155 13.2955 11.7045C13.0845 11.4935 12.7984 11.375 12.5 11.375Z"></path>
              </svg>
              <p className="font-bold text-xl">{hadith?.hadith_id}</p>
            </div>

            {/* hadith details  */}
            <div className="">
              <p className="font-arabic-KFGQ_hafs text-4xl py-10 pl-10 ">
                {hadith?.ar}
              </p>
            </div>
            <div className="">
              <p className="text-[#34AB82] font-semibold font-serif py-5">
                {hadith?.narrator} থেকে বর্ণিতঃ
              </p>
              <p className=" tracking-wider text-base">{hadith?.bn}</p>
            </div>
            <div className="flex justify-between py-14">
              <div>
                <p>
                  হাদিসের মান :{" "}
                  <span className="px-3 py-2 bg-[#46B891] text-white font-medium rounded-xl">
                    {hadith?.grade}
                  </span>
                </p>
              </div>
              <div className="flex justify-between gap-10">
                {" "}
                {/* copy  */}
                <div
                  className="relative group/item cursor-pointer"
                  onClick={() =>
                    copyToClipboard(
                      `${hadith?.narrator} থেকে বর্ণিত, \n\n${hadith?.bn} \n\nসহিহ বুখারী: ${hadith?.hadith_id} \nহাদিসের মান: ${hadith?.grade} \nSource: www.ihadis.com/bukhari/hadith/${hadith?.hadith_id}`
                    )
                  }
                >
                  <Image src={copy} alt="copy icon" width={25} height={25} />

                  {/* pop up  */}
                  <div className="absolute bottom-9 right-[-5px] invisible  group-hover/item:visible">
                    <div className="relative">
                      <p className="p-1 bg-black text-white rounded-lg text-xs">
                        কপি
                      </p>
                      <Image
                        src={triangle}
                        alt="triangle"
                        width={10}
                        height={10}
                        className="absolute left-3"
                      />
                    </div>
                  </div>
                </div>
                {/* bookmark  */}
                <div className="relative group/item cursor-pointer">
                  <Image
                    src={bookmark}
                    alt="copy icon"
                    width={25}
                    height={25}
                    onClick={() => document.getElementById("2").showModal()}
                  />

                  <BookmarkModal id={"2"} />

                  {/* pop up  */}
                  <div className="absolute bottom-9  right-[-5px] invisible  group-hover/item:visible">
                    <div className="relative">
                      <p className="p-1 bg-black text-white rounded-lg text-xs">
                        বুকমার্ক
                      </p>
                      <Image
                        src={triangle}
                        alt="triangle"
                        width={10}
                        height={10}
                        className="absolute left-5"
                      />
                    </div>
                  </div>
                </div>
                {/*share  */}
                <div
                  className="relative group/item cursor-pointer"
                  onClick={() => document.getElementById("1").showModal()}
                >
                  <ShareModal id={"1"} />

                  <Image src={share} alt="copy icon" width={25} height={25} />

                  {/* pop up  */}
                  <div className="absolute bottom-9 right-[-5px] invisible  group-hover/item:visible">
                    <div className="relative">
                      <p className="p-1 bg-black text-white rounded-lg text-xs">
                        শেয়ার
                      </p>
                      <Image
                        src={triangle}
                        alt="triangle"
                        width={10}
                        height={10}
                        className="absolute left-4"
                      />
                    </div>
                  </div>
                </div>
                {/* report  */}
                <div
                  className="relative group/item cursor-pointer"
                  onClick={() => toast.success("শিগ্রই আসছে")}
                >
                  <Image src={report} alt="copy icon" width={25} height={25} />

                  {/* pop up  */}
                  <div className="absolute bottom-9 right-[-5px] invisible  group-hover/item:visible">
                    <div className="relative">
                      <p className="p-1 bg-black text-white rounded-lg text-xs">
                        রিপোর্ট
                      </p>
                      <Image
                        src={triangle}
                        alt="triangle"
                        width={10}
                        height={10}
                        className="absolute left-4"
                      />
                    </div>
                  </div>
                </div>
                {/* direct  */}
                <div className="relative group/item cursor-pointer">
                  <Image src={direct} alt="copy icon" width={25} height={25} />

                  {/* pop up  */}
                  <div className="absolute bottom-9 right-[-5px] invisible  group-hover/item:visible">
                    <div className="relative">
                      <p className="p-1 bg-black text-white rounded-lg text-xs">
                        ডিরেক্ট
                      </p>
                      <Image
                        src={triangle}
                        alt="triangle"
                        width={10}
                        height={10}
                        className="absolute left-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AllHadith;
