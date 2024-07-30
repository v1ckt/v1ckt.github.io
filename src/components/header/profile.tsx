import ProfilePic from "./profilepic";

interface ProfileProps {
  size?: number;
}

export default function Profile({ size }: ProfileProps) {
  return (
    <div className="flex items-center gap-2">
      <ProfilePic size={size} />
      <p className="font-normal">Vicktor Teixeira</p>
    </div>
  );
}
