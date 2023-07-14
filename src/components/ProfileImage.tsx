import Image from "next/image";
import React from "react";

type Props = {
  src?: string | null;
  className?: string;
};

const ProfileImage = (props: Props) => {
  return (
    <div
      className={`relative h-12 w-12 overflow-hidden rounded-full ${props.className}`}
    >
      {props.src == null ? null : (
        <Image src={props.src} alt="Profile Image" quality={100} fill />
      )}
    </div>
  );
};

export default ProfileImage;
