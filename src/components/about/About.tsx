import { html } from "@/data/cv/icons";
import { Html } from "next/document";
import {
  IoCodeSlashOutline,
  IoGridOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import ProfilePic from "../header/profilepic";

interface aboutProps {
  className?: string;
}

export default function About({ className }: aboutProps) {
  return (
    <section
      className={
        `flex flex-col items-start justify-start text-center w-full gap-6 bg-main-bg ` +
        className
      }>
      <h2 className='text-title'>About me</h2>
      <div className='flex flex-col items-stretch justify-between gap-6 overflow-auto w-full'>
        <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-6'>
          <figure className='px-24'>
            <ProfilePic size={8} />
          </figure>
          <h5 className='text-left indent-10 flex flex-col-reverse md:flex-row items-start justify-center'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </h5>
        </div>
      </div>
    </section>
  );
}
