import Header from "@/components/Layout/Header";
import LeftNavbar from "@/components/Layout/LeftNavbar";
import DownNavbar from "@/components/Layout/downNavbar";
import Category from "@/components/category/Category";
import AllHadith from "@/components/hadith/Hadith";
import RightSidebar from "@/components/rightSide/RightSidebar";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-lvh">
      <header>
        <Header />
      </header>

      <main className="flex lg:h-[837px] md:h-[700px] sm:h-[700px]">
        <nav className="flex-auto hidden lg:inline-block">
          <LeftNavbar />
        </nav>

        <div className="bg-gray-100 w-full rounded-tl-3xl flex">
          <div className="flex-none w-[350px] h-[797px] bg-white mt-6 hidden lg:block rounded-xl lg:ml-5 overflow-y-scroll scrollbar-light">
            <Category />
          </div>
          <div className="grow mt-6 overflow-y-scroll scrollbar-light">
            <AllHadith />
          </div>

          {/* right  */}
          <div className=" flex-none w-[337px] mt-6 mr-4 hidden 2xl:block ml-3">
            <div>
              <RightSidebar />
            </div>
          </div>
        </div>
      </main>
      <div className="lg:hidden">
        <DownNavbar />
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   try {
//     const res = await fetch("http://localhost:5000/hadiths");
//     const data = await res.json();
//     return {
//       props: {
//         allHadith: data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         allHadith: [],
//       },
//     };
//   }
// };
