import Image from "next/image";
import { Inter } from "next/font/google";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ImageGallery from "react-image-gallery";

const inter = Inter({ subsets: ["latin"] });

const images = [
  {
    original: "https://picsum.photos/id/1018/1920/1080/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1920/1080/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1920/1080/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default function Home() {
  return (
    <main className={`min-h-screen ${inter.className}`}>
      <ImageGallery
        items={images}
        showThumbnails={false}
        showBullets
        showFullscreenButton={false}
        showPlayButton={false}
        slideDuration={550}
        slideInterval={3000}
        autoPlay
      />
    </main>
  );
}
