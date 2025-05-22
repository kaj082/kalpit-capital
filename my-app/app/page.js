import { HomeSlide1, PrimaryLayout } from "@/src/componnet";
import HomeSlide2 from "@/src/componnet/homeSlide2/HomeSlide2";
import HomeSlide3 from "@/src/componnet/homeSlide3/HomeSlide3";
import Image from "next/image";

export default function Home() {
  return (
    <PrimaryLayout>
      <HomeSlide1 />
      <HomeSlide2 />
      <HomeSlide3 />
    </PrimaryLayout>
  );
}
