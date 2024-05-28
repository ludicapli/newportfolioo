'use client';

import Image from "next/image";

import cv from "../../../public/cv.png";
import {useState} from "react";


export default function Home() {

    const [darkMode, setDarkMode] = useState(false);

    const openInNewTab = (url) => {
      window.open(url, "_blank", "noreferrer");
    };

    return (
        <div>



            <Image src={cv} className="rounded-lg absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] max-w-screen lg:top-0 lg:translate-y-[0%] lg:max-w-4xl md:translate-y-[0%] md:max-w-4xl md:top-0" />

        </div>



    )
};
