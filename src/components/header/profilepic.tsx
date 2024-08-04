import Image from "next/image";
import PPic from "@images/profilepic.png";

interface ProfilePicProps {
  size?: number;
}

export default function ProfilePic({ size = 2 }: ProfilePicProps) {
  const paddingSize = size / 8;
  const newSize = size - paddingSize;
  const newSizepx = newSize * 16;

  return (
    <div
      style={{ padding: `${paddingSize}rem`, width: `${size}rem`, aspectRatio: "1" }}
      className="bg-profile-pic-bg rounded-full"
    >
      <Image
        src={PPic}
        width={newSizepx}
        height={newSizepx}
        alt="Profile Picture"
      />
    </div>
  );
}
