import Image from "next/image";
import { useState } from "react";
import book from "../../assets/book.svg";
import bookmark from "../../assets/bookamark.svg";
import bookmarkHover from "../../assets/bookmark-hover.svg";
import homeIconHover from "../../assets/home-hover.svg";
import homeIcon from "../../assets/home.svg";
import othersHover from "../../assets/other-hover.svg";
import others from "../../assets/others.svg";
import searchHadithHover from "../../assets/search-hadith-hover.svg";
import searchHadith from "../../assets/search-hadith.svg";
import subjectWiseHover from "../../assets/subject-wise-hover.svg";
import subjectWise from "../../assets/subject-wise.svg";

const LeftNavbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    { id: 1, src: homeIcon, hoverSrc: homeIconHover, alt: "home icon 1" },
    { id: 2, src: book, hoverSrc: book, alt: "book icon", isActive: true },
    {
      id: 3,
      src: subjectWise,
      hoverSrc: subjectWiseHover,
      alt: "subject wise category",
    },
    {
      id: 4,
      src: bookmark,
      hoverSrc: bookmarkHover,
      alt: "book mark",
    },
    {
      id: 5,
      src: others,
      hoverSrc: othersHover,
      alt: "other items",
    },
    {
      id: 6,
      src: searchHadith,
      hoverSrc: searchHadithHover,
      alt: "search hadith",
    },
  ];

  return (
    <div className="bg-white w-24 h-full flex flex-col items-center justify-center gap-7">
      {items.map((item) => (
        <div
          key={item.id}
          className={`w-14 h-14 flex items-center justify-center hover:bg-gray-100 hover:rounded-md cursor-pointer`}
          onMouseEnter={() => setIsHovered(item.id)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Image
            src={isHovered === item.id ? item.hoverSrc : item.src}
            alt={item.alt}
            width={25}
            height={25}
          />
        </div>
      ))}
    </div>
  );
};

export default LeftNavbar;
