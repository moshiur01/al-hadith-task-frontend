import { useState } from "react";

const Category = ({ isDrawerMode }) => {
  const [active, setActive] = useState("chapter");

  const hadithBookName = [
    { id: 1, name: "সহিহ বুখারি", denote: "B", total: "৭৫৬৩" },
    { id: 2, name: "সহিহ মুসলিম", denote: "M", total: "৭৪৫৩" },
    { id: 3, name: "সুনানে আন-নাসায়ী", denote: "N", total: "৫৭৫৮" },
    { id: 4, name: "সুনানে আবু দাউদ", denote: "AD", total: "৫২৭৪" },
    { id: 5, name: "জামে' আত-তিরমিজি", denote: "T", total: "৩৯৫৬" },
    { id: 6, name: "সুনানে ইবনে মাজাহ", denote: "IM", total: "৪৩৪১" },
    { id: 7, name: "মুয়াত্তা ইমাম মালিক", denote: "MI", total: "১৮৩২" },
    { id: 8, name: "রিয়াদুস সলেহিন", denote: "RS", total: "১৯০৫" },
    { id: 9, name: "বুলুগুল মারাম", denote: "BM", total: "১৯০৬" },
  ];

  const hadithChapterName = [
    { id: 1, name: "ওহীর সূচনা অধ্যায়", range: "১ - ৭" },
    { id: 2, name: "ঈমান", range: "৮ - ৫৮" },
    { id: 3, name: "ইল্‌ম", range: "৫৯ - ১৩৪" },
    { id: 4, name: "ওজু", range: "১৩৫ - ২৪৭" },
    { id: 5, name: "গোসল", range: "২৪৮ - ২৯৩" },
    { id: 6, name: "হায়েজ", range: "২৯৪ - ৩৩৩" },
    { id: 7, name: "তায়াম্মুম", range: "৩৩৪ - ৩৪৮" },
    { id: 8, name: "সালাত", range: "৩৪৯ - ৫২০" },
    { id: 9, name: "সালাতের ওয়াক্তসমূহ", range: "৫২১ - ৬০২" },
  ];

  return (
    <div className="">
      <div
        className={`flex flex-row h-14 border-b items-center text-center font-semibold `}
      >
        {/* book bar  */}
        <p
          className={`flex-grow h-full py-4 text-lg cursor-pointer ${
            active === "book" ? "bg-[#2B9E76] text-white" : ""
          }`}
          onClick={() => {
            setActive("book");
          }}
        >
          বই
        </p>
        {/* chapter bar  */}
        <p
          className={`flex-grow h-full py-4 text-lg rounded-tr-lg cursor-pointer ${
            active === "chapter" ? "bg-[#2B9E76] text-white" : ""
          }`}
          onClick={() => {
            setActive("chapter");
          }}
        >
          অধ্যায়
        </p>
      </div>

      {/* search  */}
      <div className=" relative flex font-sans px-4 py-3 mt-3">
        <div className="px-3 rounded-md flex items-center justify-center absolute top-1 bottom-1">
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
          className="w-full h-12 rounded-md pr-4 pl-12 shadow-sm focus:outline-none border-[1.5px] border-[#DEE1E5]  placeholder:text-mute-grey placeholder:text-md  bg-[#F2F4F6] border-none"
          id="search"
          name="search"
          type="text"
          placeholder="Search for Filter"
        />
      </div>

      {/* category  */}

      {/* hadith book wise  */}

      {active === "book" && (
        <>
          {hadithBookName?.map((book) => (
            <div
              className={`mx-4 flex rounded-xl h-24 gap-6 hover:bg-[#EBFCF6] ${
                book?.id === 1 && `bg-[#EBFCF6]`
              } `}
              key={book.id}
            >
              {/* numbering */}
              <div className="ml-4 w-12 sm-max:w-10 flex items-center relative ">
                <h3
                  className={`text-white absolute font-semibold ${
                    book?.denote.length > 1 ? "left-4" : "left-5"
                  }`}
                >
                  {book?.denote}
                </h3>
                <svg
                  className=""
                  width="56"
                  height="62"
                  viewBox="0 0 56 62"
                  fill="#2B9E76"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>

              {/* name and range  */}
              <div className="flex flex-col justify-center gap-1.5 group">
                <p className="font-semibold">{book.name} </p>
                <p className="text-gray-500 text-sm">
                  {" "}
                  সর্বমোট হাদিস - <span>{book?.total}</span>
                </p>
              </div>
            </div>
          ))}
        </>
      )}

      {/* chapter wise  */}
      {active === "chapter" && (
        <div className="">
          {hadithChapterName?.map((chapter) => (
            <div
              className={`mx-4 flex rounded-xl h-24 gap-6 hover:bg-[#EBFCF6] cursor-pointer mb-2 ${
                chapter?.id === 1 && `bg-[#EBFCF6]`
              }`}
              key={chapter?.id}
            >
              {/* numbering */}
              <div className=" ml-4 w-12 sm-max:w-10 flex items-center relative">
                <h3 className="text-white absolute font-semibold left-5">
                  {chapter?.id}
                </h3>
                <svg
                  className=""
                  width="56"
                  height="62"
                  viewBox="0 0 56 62"
                  fill="#2B9E76"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </div>

              {/* name and range  */}
              <div className="flex flex-col justify-center gap-1.5 group">
                <p className="font-semibold"> {chapter?.name}</p>
                <p className="text-gray-500 text-sm">
                  {" "}
                  হাদিসের রেঞ্জ: <span>{chapter?.range}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
