import Image from "next/image";
import book from "../../assets/book-hover.svg";
import bookmark from "../../assets/bookamark.svg";

import homeIcon from "../../assets/home.svg";

import searchHadith from "../../assets/search-hadith.svg";
import subjectWise from "../../assets/subject-wise.svg";

const DownNavbar = () => {
  return (
    <div className="bg-white w-full h-full flex flex-row items-center justify-center gap-28  ">
      <div className="w-14 h-14 flex items-center justify-center">
        <Image src={homeIcon} alt="asdfasdf" width={23} height={25} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center bg-[#2B9E76] rounded-lg">
        <Image src={book} alt="asdfasdf" width={25} height={25} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center">
        <Image src={subjectWise} alt="asdfasdf" width={25} height={25} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center">
        <Image src={bookmark} alt="asdfasdf" width={25} height={25} />
      </div>
      <div className="w-14 h-14 flex items-center justify-center">
        <Image src={searchHadith} alt="asdfasdf" width={25} height={25} />
      </div>
    </div>
  );
};

export default DownNavbar;
