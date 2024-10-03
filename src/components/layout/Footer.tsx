"use client";
import Image from "next/image";
import FooterImg01 from "../../../../public/android_app.png";
import FooterImg02 from "../../../../public/app_store.png";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 py-2  mx-auto ">
      <div className="flex justify-evenly md:items-center">
        <div className="text-black md:text-sm 4k:text-3xl font-normal flex flex-col text-[10px] dark:text-gray-200">
          <p>MSVP INNOVATIONS PRIVATE LIMITED</p>
          <p>CIN: U62099MH2024PTC416592</p>
          <p>GST: 27AARCM6409M1ZR</p>
        </div>
        <div className="flex flex-col text-neutral-700 dark:text-gray-200 text-xs 4k:text-3xl md:text-base cursor-pointer">
          <a
            className="hover:underline"
            onClick={() => router.push("/termscondition")}
          >
            Terms and Conditions
          </a>
          <a className="hover:underline" onClick={() => router.push("/faq")}>
            FAQ&apos;s
          </a>
        </div>
        {/* <div className="hidden md:flex items-center gap-2 md:gap-7">
          <Image
            src={FooterImg01}
            alt="android_app"
            className="max-md:w-10 max-md:h-3"
          />
          <Image
            src={FxooterImg02}
            alt="app_store"
            className="max-md:w-10 max-md:h-3"
          />
        </div> */}
      </div>

      <div className="text-neutral-400 text-[10px] 4k:text-2xl md:text-xs flex items-center justify-center py-2">
        <p>© 2024 rewardwale.com. All rights reserved.</p>
      </div>
    </div>
  );
}
