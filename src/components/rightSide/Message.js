const Message = () => {
  return (
    <div className="w-[340px] h-[315px] bg-[#34AB82] text-white p-4 rounded-lg mt-6">
      {/*content  */}
      <div>
        <h2 className="text-2xl font-semibold">
          আপনিও সদাকায়ে জারিয়াতে অংশ নিন
        </h2>
        <p>
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে
        </p>

        <div className="text-center my-8">
          <button className="w-40 h-12 bg-white text-[#40997A]  rounded-lg inline-block text-lg">
            সাপোর্ট করুন
          </button>
        </div>
      </div>
      {/* image
      <div className="absolute right-0 bottom-0">
        <Image src={mosque} alt="donate svg image" width={200} height={200} />
      </div> */}
    </div>
  );
};

export default Message;
