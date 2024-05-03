import Header from "@/components/Layout/Header";
import LeftNavbar from "@/components/Layout/LeftNavbar";
import DownNavbar from "@/components/Layout/downNavbar";
import Category from "@/components/category/Category";
import AllHadith from "@/components/hadith/Hadith";
import RightSidebar from "@/components/rightSide/RightSidebar";
import { Inter } from "next/font/google";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-lvh sm:relative md:relative lg:block">
      <header>
        <Header />
      </header>

      <main className="flex lg:h-[837px] md:h-[700px] sm:h-[700px]">
        <nav className="flex-auto hidden lg:inline-block h-dvh">
          <LeftNavbar />
        </nav>

        <div className="bg-gray-100 w-full rounded-tl-3xl flex">
          <div className="flex-none w-[350px] h-[797px] bg-white mt-6 hidden xl:block rounded-2xl lg:ml-5 overflow-auto">
            <Category />
          </div>
          <div className="grow mt-6 overflow-auto sm:ml-6 md:rounded-lg">
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
      <div className="lg:hidden z-[9999999] absolute bottom-0 w-full">
        <DownNavbar />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
