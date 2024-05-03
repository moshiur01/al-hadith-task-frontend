import Image from "next/image";

import { toast } from "react-toastify";
import copy from "../../../assets/copy.svg";
import email from "../../../assets/email.svg";
import facebook from "../../../assets/facebook.svg";
import linkedIn from "../../../assets/linkedIn.svg";
import reddit from "../../../assets/reddit.svg";
import telegram from "../../../assets/teligram.svg";
import tweeter from "../../../assets/tweeter.svg";
import whatsapp from "../../../assets/whatsapp.svg";

const ShareModal = ({ id }) => {
  //copy to clipboard
  const copyToClipboard = async (text) => {
    toast.success("Copied to clipboard");
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.log(error);
      alert("Error copying to clipboard:", error);
    }
  };

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">এই দোয়াটি শেয়ার করুন</h3>

        <div className="pl-3 pt-3 flex flex-col gap-y-4">
          <p className="">সোশ্যাল মিডিয়াতে শেয়ার করুন</p>
          <div className="flex gap-4">
            <Image src={facebook} alt="share icon" width={30} height={30} />
            <Image src={tweeter} alt="share icon" width={30} height={30} />
            <Image src={telegram} alt="share icon" width={30} height={30} />
            <Image src={whatsapp} alt="share icon" width={30} height={30} />
            <Image src={linkedIn} alt="share icon" width={30} height={30} />
            <Image src={reddit} alt="share icon" width={30} height={30} />
            <Image src={email} alt="share icon" width={30} height={30} />
          </div>
          <div>
            <p>অথবা, লিংক কপি করুন</p>
          </div>

          <div className="flex justify-between p-4 border border-green-700 rounded-lg">
            <p className="text-sm">https://ihadis.com/bukhari/hadith/{id}</p>

            <Image
              src={copy}
              alt="copy icon"
              width={20}
              height={20}
              onClick={() =>
                copyToClipboard(`https://ihadis.com/bukhari/hadith/${id}`)
              }
            />
          </div>
        </div>

        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn bg-[#2B9E76] text-white px-12 text-lg font-thin font-serif hover:bg-[#2B9E76]">
              ওকে
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ShareModal;
