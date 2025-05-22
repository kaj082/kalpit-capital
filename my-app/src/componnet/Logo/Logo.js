import Image from "next/image";
import React from "react";
import logoImg from "../../assets/images/logo.jpeg";

const Logo = ({ width, height }) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={logoImg}
        alt="logo"
        width={width || 150}
        height={height || 150}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default Logo;
