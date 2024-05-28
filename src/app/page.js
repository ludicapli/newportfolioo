'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaBeer } from 'react-icons/fa';
import { PiPaperPlaneTiltFill } from 'react-icons/pi'
import { AiFillHtml5, AiFillWindows } from "react-icons/ai"
import { FaReact, FaCss3Alt, FaJava, FaLinux, FaFigma, FaUnity, FaGithub, FaRocket } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { IoIosArrowDown, IoMdArrowRoundBack } from "react-icons/io"
import { BiLogoTailwindCss,  } from "react-icons/bi"
import { TbBrandNextjs, TbBrandCSharp } from "react-icons/tb"
import { SiCplusplus, SiBlueprint, SiPython, SiSanity, SiStripe, SiPhp, SiPostgresql, SiAdobephotoshop, SiBlender, SiObsstudio, SiOpenai } from "react-icons/si"
import TailwindColor from "@videsk/tailwind-random-color"

import EmbedText from '@/components/EmbedText';

import React, { useEffect, useState } from 'react';

import site1 from "../../public/site_ecommerce_final.png";
import site2 from "../../public/site_cloud_final.png";
import site3 from "../../public/site_bank_final.png";
import site4 from "../../public/site_ludicapli_final.png";
import site5 from "../../public/site_cineapp_final.png";

import moi from "../../public/moi1.png"

import Layout from '@/components/Layout';


const langFR = {
  aboutLines: {
    discover: "découvrez mon projet !",
    hello: "Bonjour, je m'appelle Rémi !",
    studiesBegin: "J'ai obtenu ma licence à ",
    studiesEmbed: "l'Université de Lille",
    studiesEnd: "et développe mes projets depuis.",
    passion: "Je suis un passionné des technologies numériques et de la création de jeux.",
    qualityBegin: "Mes ",
    qualityEmbed: "meilleures qualités",
    qualityEnd: "sont: ",
    qualityUnderlined : "l'autonomie, la créativité et la curiosité.",
    projectButton: "UN PROJET ?",
    projectHeaderBegin: "Voici ",
    projectHeaderEmbed: "quelques projets",
    projectHeaderEnd: "que j'ai pu réaliser :",
    compsHeaderBegin: "Au fil des années d'études et des projets, j'ai développé diverses ",
    compsHeaderEmbed: "compétences",
    compsHeaderEnd: ":",
    talkButton: "Envie de papoter ?",
    navAbout: "a propos",
    navProject: "projets",
    navComps: "Compétences",
    navLang: "fr",
  },
  techColors: [
    "techGreen",
    "techRed",
    "techOrange",
    "techBlue",
    "techPurple",
    "techYellow"
  ],
  competencesWeb: [
    {
      color: "compOrange",
      icon: <AiFillHtml5 />,
      name: "HTML"
    },
    {
      color: "compLightBlue",
      icon: <FaReact />,
      name: "React"
    },
    {
      color: "compBlue",
      icon: <FaCss3Alt />,
      name: "CSS"
    },
    {
      color: "compYellow",
      icon: <IoLogoJavascript />,
      name: "Javascript"
    },
    {
      color: "compSkyBlue",
      icon: <BiLogoTailwindCss />,
      name: "Tailwind"
    },
    {
      color: "compBlack",
      icon: <TbBrandNextjs />,
      name: "Nextjs"
    },
    {
      color: "compStripe",
      icon: <SiStripe />,
      name: "Stripe"
    },
    {
      color: "compSanity",
      icon: <SiSanity />,
      name: "Sanity"
    },
    {
      color: "compPhp",
      icon: <SiPhp />,
      name: "PHP"
    },
    {
      color: "compSql",
      icon: <SiPostgresql />,
      name: "SQL"
    },
    
    
  ],
  competencesObjets: [
    {
      color: "compCplus",
      icon: <SiCplusplus />,
      name: "C++"
    },
    {
      color: "compBp",
      icon: <SiBlueprint />,
      name: "Blueprint"
    },
    {
      color: "compPy",
      icon: <SiPython />,
      name: "Python"
    },
    {
      color: "compCsharp",
      icon: <TbBrandCSharp />,
      name: "C#"
    },
    {
      color: "compJava",
      icon: <FaJava />,
      name: "Java"
    },
  ],
  competencesAutre: [
    {
      color: "compFigma",
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      color: "compUnity",
      icon: <FaUnity />,
      name: "Unity"
    },
    {
      color: "compGit",
      icon: <FaGithub />,
      name: "Git"
    },
    {
      color: "compPs",
      icon: <SiAdobephotoshop />,
      name: "Photoshop"
    },
    {
      color: "compBlender",
      icon: <SiBlender />,
      name: "Blender"
    },
    {
      color: "compObs",
      icon: <SiObsstudio />,
      name: "OBS"
    },
    {
      color: "compGpt",
      icon: <SiOpenai />,
      name: "ChatGPT"
    },
  
  ],
  competencesOs: [
    {
      color: "compSkyBlue",
      icon: <AiFillWindows />,
      name: "Windows"
    },
    {
      color: "compBlack",
      icon: <FaLinux />,
      name: "Linux"
    },
  
  ],
  competencesMobile: [
    {
      color: "compLightBlue",
      icon: <FaReact />,
      name: "React Native"
    }
  
  ],
  sites: [
    {
      name: "Ludicapli",
      link: "https://www.ludicapli.com/",
      description: "C'est le site où je poste mes applications ! Il a été fait en utilisant le CMS de Google. La plupart des applications sont faites en Javascript ou C# avec Unity.",
      image: site4,
      tech: ["GoogleCMS", 
              "HTML/CSS",
              "Javascript"]
    },
    {
      name: "MyCineApp",
      link: "https://mycineapp.vercel.app/home",
      description: "Un clone de Netflix avec gestion du routing pour accéder aux pages et aux différentes catégories de films/séries. Ce site a été créé grâce à l'api de TMDB (The Movie Database) pour récupérer les différents films et leurs caractéristiques.",
      image: site5,
      tech: ["NextJS/React", 
              "Tailwind",
              "TMDB's Api"]
    },
    {
      name: "Sound Stripe",
      link: "https://remi-ober-ecommerce-site.vercel.app/",
      description: "Un site d'e-commerce entièrement fonctionnel avec la gestion de la base de données faite avec Sanity et la méthode de paiement effectuée en utilisant Stripe.",
      image: site1,
      tech: ["Nextjs", 
              "Stripe",
              "Sanity"]
    },
    {
      name: "Odito",
      link: "https://remi-ober-webservice.vercel.app/",
      description: "Un site vitrine pour une agence fictive de services sur le cloud. Ce site avait pour but de me familiariser avec React et Tailwind pour la mise en page et la gestion des composants.",
      image: site2,
      tech: ["React", 
              "Tailwind",
              "Javascript"]
    },
    {
      name: "HooBank",
      link: "https://remi-ober-banksite.vercel.app/",
      description: "Un site vitrine pour une banque en ligne fictive. Ce site avait pour but de me familiariser avec React et Tailwind pour la mise en page et la gestion des composants.",
      image: site3,
      tech: ["React", 
              "Tailwind",
              "Javascript"]
    },
  ]
}


const langEN = {
  aboutLines: {
    discover: "discover my project !",
    hello: "Hello I'm Rémi !",
    studiesBegin: "I am a graduate from ",
    studiesEmbed: "Lille's University, ",
    studiesEnd: "and I now develop my own projects",
    passion: "I am keen on new technologies and game creation.",
    qualityBegin: "My ",
    qualityEmbed: "best qualities ",
    qualityEnd: "are: ",
    qualityUnderlined : "independaence, creativity and curiosity.",
    projectButton: "A PROJECT ?",
    projectHeaderBegin: "Here are ",
    projectHeaderEmbed: "somes projects",
    projectHeaderEnd: " i made :",
    compsHeaderBegin: "Throughout the years, I have developed various",
    compsHeaderEmbed: "skills",
    compsHeaderEnd: ":",
    talkButton: "Want to talk ?",
    navAbout: "about",
    navProject: "projects",
    navComps: "skills",
    navLang: "en",
  },
  techColors: [
    "techGreen",
    "techRed",
    "techOrange",
    "techBlue",
    "techPurple",
    "techYellow"
  ],
  competencesWeb: [
    {
      color: "compOrange",
      icon: <AiFillHtml5 />,
      name: "HTML"
    },
    {
      color: "compLightBlue",
      icon: <FaReact />,
      name: "React"
    },
    {
      color: "compBlue",
      icon: <FaCss3Alt />,
      name: "CSS"
    },
    {
      color: "compYellow",
      icon: <IoLogoJavascript />,
      name: "Javascript"
    },
    {
      color: "compSkyBlue",
      icon: <BiLogoTailwindCss />,
      name: "Tailwind"
    },
    {
      color: "compBlack",
      icon: <TbBrandNextjs />,
      name: "Nextjs"
    },
    {
      color: "compStripe",
      icon: <SiStripe />,
      name: "Stripe"
    },
    {
      color: "compSanity",
      icon: <SiSanity />,
      name: "Sanity"
    },
    {
      color: "compPhp",
      icon: <SiPhp />,
      name: "PHP"
    },
    {
      color: "compSql",
      icon: <SiPostgresql />,
      name: "SQL"
    },
    
    
  ],
  competencesObjets: [
    {
      color: "compCplus",
      icon: <SiCplusplus />,
      name: "C++"
    },
    {
      color: "compBp",
      icon: <SiBlueprint />,
      name: "Blueprint"
    },
    {
      color: "compPy",
      icon: <SiPython />,
      name: "Python"
    },
    {
      color: "compCsharp",
      icon: <TbBrandCSharp />,
      name: "C#"
    },
    {
      color: "compJava",
      icon: <FaJava />,
      name: "Java"
    },
  ],
  competencesAutre: [
    {
      color: "compFigma",
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      color: "compUnity",
      icon: <FaUnity />,
      name: "Unity"
    },
    {
      color: "compGit",
      icon: <FaGithub />,
      name: "Git"
    },
    {
      color: "compPs",
      icon: <SiAdobephotoshop />,
      name: "Photoshop"
    },
    {
      color: "compBlender",
      icon: <SiBlender />,
      name: "Blender"
    },
    {
      color: "compObs",
      icon: <SiObsstudio />,
      name: "OBS"
    },
    {
      color: "compGpt",
      icon: <SiOpenai />,
      name: "ChatGPT"
    },
  
  ],
  competencesOs: [
    {
      color: "compSkyBlue",
      icon: <AiFillWindows />,
      name: "Windows"
    },
    {
      color: "compBlack",
      icon: <FaLinux />,
      name: "Linux"
    },
  
  ],
  competencesMobile: [
    {
      color: "compLightBlue",
      icon: <FaReact />,
      name: "React Native"
    }
  
  ],
  sites: [
    {
      name: "Ludicapli",
      link: "https://www.ludicapli.com/",
      description: "This is the site where I post my applications! It was made using Google CMS. Most applications are made in Javascript or C# with Unity.",
      image: site4,
      tech: ["GoogleCMS", 
              "HTML/CSS",
              "Javascript"]
    },
    {
      name: "MyCineApp",
      link: "https://mycineapp.vercel.app/home",
      description: "A Netflix clone with routing management to access pages and different categories of films/series. This site was created using the TMDB API (The Movie Database) to retrieve different films and their characteristics",
      image: site5,
      tech: ["NextJS/React", 
              "Tailwind",
              "TMDB's Api"]
    },
    {
      name: "Sound Stripe",
      link: "https://remi-ober-ecommerce-site.vercel.app/",
      description: "A fully functional e-commerce site with database management done using Sanity and payment method done using Stripe.",
      image: site1,
      tech: ["Nextjs", 
              "Stripe",
              "Sanity"]
    },
    {
      name: "Odito",
      link: "https://remi-ober-webservice.vercel.app/",
      description: "A showcase site for a fictitious cloud services agency. This site was intended to familiarize me with React and Tailwind for layout and component management.",
      image: site2,
      tech: ["React", 
              "Tailwind",
              "Javascript"]
    },
    {
      name: "HooBank",
      link: "https://remi-ober-banksite.vercel.app/",
      description: "A showcase site for a fictitious online bank. This site was intended to familiarize me with React and Tailwind for layout and component management.",
      image: site3,
      tech: ["React", 
              "Tailwind",
              "Javascript"]
    },
  ]
}

const techColors = [
  "techGreen",
  "techRed",
  "techOrange",
  "techBlue",
  "techPurple",
  "techYellow"
];

const competencesWeb = [
  {
    color: "compOrange",
    icon: <AiFillHtml5 />,
    name: "HTML"
  },
  {
    color: "compLightBlue",
    icon: <FaReact />,
    name: "React"
  },
  {
    color: "compBlue",
    icon: <FaCss3Alt />,
    name: "CSS"
  },
  {
    color: "compYellow",
    icon: <IoLogoJavascript />,
    name: "Javascript"
  },
  {
    color: "compSkyBlue",
    icon: <BiLogoTailwindCss />,
    name: "Tailwind"
  },
  {
    color: "compBlack",
    icon: <TbBrandNextjs />,
    name: "Nextjs"
  },
  {
    color: "compStripe",
    icon: <SiStripe />,
    name: "Stripe"
  },
  {
    color: "compSanity",
    icon: <SiSanity />,
    name: "Sanity"
  },
  {
    color: "compPhp",
    icon: <SiPhp />,
    name: "PHP"
  },
  {
    color: "compSql",
    icon: <SiPostgresql />,
    name: "SQL"
  },
  
  
]

const competencesObjets = [
  {
    color: "compCplus",
    icon: <SiCplusplus />,
    name: "C++"
  },
  {
    color: "compBp",
    icon: <SiBlueprint />,
    name: "Blueprint"
  },
  {
    color: "compPy",
    icon: <SiPython />,
    name: "Python"
  },
  {
    color: "compCsharp",
    icon: <TbBrandCSharp />,
    name: "C#"
  },
  {
    color: "compJava",
    icon: <FaJava />,
    name: "Java"
  },
]

const competencesAutre = [
  {
    color: "compFigma",
    icon: <FaFigma />,
    name: "Figma"
  },
  {
    color: "compUnity",
    icon: <FaUnity />,
    name: "Unity"
  },
  {
    color: "compGit",
    icon: <FaGithub />,
    name: "Git"
  },
  {
    color: "compPs",
    icon: <SiAdobephotoshop />,
    name: "Photoshop"
  },
  {
    color: "compBlender",
    icon: <SiBlender />,
    name: "Blender"
  },
  {
    color: "compObs",
    icon: <SiObsstudio />,
    name: "OBS"
  },
  {
    color: "compGpt",
    icon: <SiOpenai />,
    name: "ChatGPT"
  },

]

const competencesOs = [
  {
    color: "compSkyBlue",
    icon: <AiFillWindows />,
    name: "Windows"
  },
  {
    color: "compBlack",
    icon: <FaLinux />,
    name: "Linux"
  },

]

const competencesMobile = [
  {
    color: "compLightBlue",
    icon: <FaReact />,
    name: "React Native"
  }

]


const sites = [
  {
    name: "Ludicapli",
    link: "https://www.ludicapli.com/",
    description: "The website where i post my web apps",
    image: site4,
    tech: ["GoogleCMS", 
            "HTML/CSS",
            "Javascript"]
  },
  {
    name: "MyCineApp",
    link: "https://mycineapp.vercel.app/home",
    description: "Un clone de netflix avec gestion du routing pour accéder aux pages et aux différentes catégories de films/séries. Ce site a été créé grâce à l'api de TMDB (The Movie Database) pour récupérer les différents films et leurs carfactéristiques",
    image: site5,
    tech: ["NextJS/React", 
            "Tailwind",
            "TMDB's Api"]
  },
  {
    name: "Sound Stripe",
    link: "https://remi-ober-ecommerce-site.vercel.app/",
    description: "A fully functionnal shopping website",
    image: site1,
    tech: ["Nextjs", 
            "Stripe",
            "Sanity"]
  },
  {
    name: "Odito",
    link: "https://remi-ober-webservice.vercel.app/",
    description: "A fully responsive landing page for a cloud service",
    image: site2,
    tech: ["React", 
            "Tailwind",
            "Javascript"]
  },
  {
    name: "HooBank",
    link: "https://remi-ober-banksite.vercel.app/",
    description: "A fully responsive website for a bank",
    image: site3,
    tech: ["React", 
            "Tailwind",
            "Javascript"]
  },
]

export default function Home() {

  const [activeLink, setActiveLink] = useState("about");
  const [activeLang, setActiveLang] = useState("fr");
  const [langLines, setLangLines] = useState(langFR)

  const changeLang = (() => {
    activeLang === "fr" ? setLangLines(langEN) : setLangLines(langFR);
    activeLang === "fr" ? setActiveLang("en") : setActiveLang("fr");
    console.log(activeLang)
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section'); // Sélectionnez toutes les sections de votre page
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = document.querySelector(".mainsection").scrollTop;

        console.log(scrollY);
        

        if (scrollY >= sectionTop-400 && scrollY < sectionTop + sectionHeight) {
          setActiveLink(section.id);
          console.log("section.id : " + section.id);
        }
      });
    };

    document.querySelector(".mainsection").addEventListener('scroll', handleScroll);
    console.log("Added");
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <Layout>
    <main className="bg-[url('/bg.svg')] bg-cover bg-fixed bg-zinc-950 bg-center w-screen h-screen">
      <div className='flex overflow-hidden h-[100dvh]'>
        <Image src={moi} className="object-contain fixed top-0 left-0  w-full z-0 mt-48 md:mt-8 md:w-auto md:h-[1000px] md:right-2 md:left-auto lg:right-3" width={"100%"} height={"100%"}/>
        <div className="bg-[url('/borderdash.svg')] w-[95%] md:w-[100%] mx-auto my-2 md:m-2.5 md:ml-12 p-6 md:p-12 pt-8 flex flex-col z-10 bg-zinc-950/70 md:bg-zinc-950/10">
          <div className='flex flex-col font-stretch'>
            <div className='flex flex-row items-center'>
                <Link href='/'>
                  <div className='heartbeat font-tb pt-4 font-black text-[10vw] md:text-[4.6vw] uppercase fade-main-color inline-block text-transparent bg-clip-text w-fit max-h-32 cursor-pointer'>rémi</div>
                </Link>
            </div>
            <div className='font-tb mb-4 font-outline-2 leading-[0.80] text-zinc-950 text-[10vw] md:text-[4.6vw] uppercase overflow-hidden pt-1 mt-0b border-0 border-b-2 border-zinc-600 w-fit'>
              front end
              <br />
              developpeur
            </div>
          </div>
          <div className='mainsection text-gray-300 font-tr max-w-full lg:w-[60%] h-full mt-2 scroll-smooth overflow-y-scroll no-scrollbar'>
            <div className='max-w-full md:w-[100%] flex flex-col ' >
              <div className='about section bg-zinc-900/40 mb-24 p-5 w-full font-tr font-black rounded-sm' id="about">
                
                <div className='text-2xl md:text-[32px] mb-4'>
                  
                  {langLines.aboutLines.hello}
                </div>
                <div className='text-xs italic mb-8 font-light'>
                  
                  Développeur Front-end
                </div>
                <div className='text-normal md:text-2xl font-medium leading-8'>
                  <div className='mb-5 leading-relaxed'> 
                    <EmbedText textBegin={langLines.aboutLines.studiesBegin} textEmbed={langLines.aboutLines.studiesEmbed} textEnd={langLines.aboutLines.studiesEnd} textUnderlined={null}/>
                  </div>

                  <div className='mb-5 leading-relaxed'>
                    {langLines.aboutLines.passion}
                  </div>
                  <div className='mb-5 leading-relaxed'>
                    <EmbedText textBegin={langLines.aboutLines.qualityBegin} textEmbed={langLines.aboutLines.qualityEmbed} textEnd={langLines.aboutLines.qualityEnd} textUnderlined={langLines.aboutLines.qualityUnderlined}/>
                  </div>
                </div>
                <div className='flex justify-center md:justify-end p-10'>
                  <a onClick={() => openInNewTab("./cv")} className='group ease-out duration-300 hover:shadow-[0_30px_15px_-15px_rgba(0,0,0,0.8)] hover:-translate-y-2 relative flex justify-center items-center w-fit px-5 py-3 border-0 rounded-lg fade-main-color uppercase tracking-wider overflow-hidden'>
                    <div className='rounded-full bg-white/20 w-fit p-1 mr-4'>
                      <PiPaperPlaneTiltFill className='font-medium text-xl ease-out duration-300 group-hover:rotate-45'/>  
                    </div>
                    <div className='tracking-[4px] font-medium '>{langLines.aboutLines.projectButton}</div>
                  </a>
                </div>

              </div>
              <div className='projets section bg-zinc-900/40 mb-24 p-5 w-full font-tr font-black rounded-sm' id="projects">
                <div className='md:text-2xl'>
                  <EmbedText textBegin={langLines.aboutLines.projectHeaderBegin} textEmbed={langLines.aboutLines.projectHeaderEmbed} textEnd={langLines.aboutLines.projectHeaderEnd} textUnderlined={null}/>
                </div>
                <div className='flex flex-col gap-10 py-10 items-center'>
                  {langLines.sites.map((site, i) => (
                      <div key={i} className={` ${ i % 2 ? "2xl:flex-row" : "2xl:flex-row-reverse" } 2xl:relative flex-col flex gap-4 py-10 items-center bottom-2 border-neutral-400 border-b-2 min-w-full lg:min-w-0 cursor-pointer`} onClick={() => openInNewTab(site.link)}>
                        <h2 className='text-3xl font-medium 2xl:absolute xl:top-0 2xl:w-full 2xl:text-center'>{site.name}</h2>
                        <div className=' flex-3 max-w-full lg:max-w-[50%] 2xl:mt-20'>
                          <Image src={site.image} className="rounded-sm object-cover" width={"100%"} height={"100%"}/>
                        </div>
                        <div className='2xl:absolute xl:top-10 2xl:w-full 2xl:justify-center text-center text-sm flex flex-1 gap-3 flex-row max-w-full text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>
                          {site.tech.map((t, j) => (
                              <p key={j} className={`${techColors[(i*4+j)%techColors.length]} border-2 rounded-2xl px-4`}>{t}</p>
                            ))}
                        </div>
                        <p className='text-xs font-thin md:max-w-[70%] 2xl:max-w-full place-self-center md:text-base lg:text-lg'>{site.description}</p>
                      </div>
                    ))}
                </div>
              </div>
              <div className='competences section bg-zinc-900/40 mb-24 p-5 w-full font-tr font-black rounded-sm' id="comps">
                <div className='mb-6 md:text-2xl'>
                <EmbedText textBegin={langLines.aboutLines.compsHeaderBegin} textEmbed={langLines.aboutLines.compsHeaderEmbed} textEnd={langLines.aboutLines.compsHeaderEnd} textUnderlined={null}/>
                </div>
                <div className="flex flex-col gap-2 mb-8">
                  <div className='text-left self-start'>
                    Web
                  </div>
                  <div className="flex-row flex flex-wrap gap-5">
                    {langLines.competencesWeb.map((c, i) => (
                      <div key={i} className="flex-row flex items-center">
                        <div className={`${c.color}  border-solid border-0 rounded-full p-1 mr-1`}>{c.icon}</div> 
                        <div className='text-sm md:text-lg font-light'>{c.name}</div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <div className='text-left self-start'>
                    Objets
                  </div>
                  <div className="flex-row flex flex-wrap gap-5">
                    {langLines.competencesObjets.map((c, i) => (
                      <div key={i} className="flex-row flex items-center">
                        <div className={`${c.color}  border-solid border-0 rounded-full p-1 mr-1`}>{c.icon}</div> 
                        <div className='text-sm md:text-lg font-light'>{c.name}</div>
                        </div>
                    ))}
                  </div>
                </div>


                <div className="flex flex-col gap-2 mb-8">
                  <div className='text-left self-start'>
                    Mobiles
                  </div>
                  <div className="flex-row flex flex-wrap gap-5">
                    {langLines.competencesMobile.map((c, i) => (
                      <div key={i} className="flex-row flex items-center">
                        <div className={`${c.color}  border-solid border-0 rounded-full p-1 mr-1`}>{c.icon}</div> 
                        <div className='text-sm md:text-lg font-light'>{c.name}</div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <div className='text-left self-start'>
                    OS
                  </div>
                  <div className="flex-row flex flex-wrap gap-5">
                    {langLines.competencesOs.map((c, i) => (
                      <div key={i} className="flex-row flex items-center">
                        <div className={`${c.color}  border-solid border-0 rounded-full p-1 mr-1`}>{c.icon}</div> 
                        <div className='text-sm md:text-lg font-light'>{c.name}</div>
                        </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-8">
                  <div className='text-left self-start'>
                    Autres
                  </div>
                  <div className="flex-row flex flex-wrap gap-5">
                    {langLines.competencesAutre.map((c, i) => (
                      <div key={i} className="flex-row flex items-center">
                        <div className={`${c.color}  border-solid border-0 rounded-full p-1 mr-1`}>{c.icon}</div> 
                        <div className='text-sm md:text-lg font-light'>{c.name}</div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='flex justify-center md:justify-end p-10 '>
                  <a onClick={() => openInNewTab("./cv")} className='group ease-out hover:shadow-[0_30px_15px_-15px_rgba(0,0,0,0.8)] duration-300 hover:-translate-y-2 relative flex justify-center items-center w-fit px-5 py-3 border-0 rounded-lg fade-main-color uppercase tracking-wider overflow-hidden'>
                    <div className='rounded-full bg-white/20 w-fit p-1 mr-4'>
                      <PiPaperPlaneTiltFill className='font-medium text-xl ease-out duration-300 group-hover:rotate-45'/>  
                    </div>
                    <div className='tracking-[4px] font-medium'>{langLines.aboutLines.talkButton}</div>
                  </a>
                </div>
            </div>

          </div>

          <div className='blink-1 absolute bottom-5 left text-3xl w-fit'>
            <IoIosArrowDown />
          </div>

        </div>
        <nav className='fixed top-10 left-3 flex flex-col w-fit h-[95%]'>
          <ul className='flex flex-col justify-between w-auto mb-10 h-full '>
            <li className='mb-5 border-b-2 border-gray-400/50 pb-5'>
              <a href="#about" className='flex items-center w-fit uppercase'>
                <span className={`select-none vertical-writing rotate-180 cursor-pointer hover:border-l-2 border-main-color nav-link ${activeLink == "about" ? "active-nav" : ""}`}>{langLines.aboutLines.navAbout}</span>
              </a>
            </li>
            <li className='mb-5 border-b-2 border-gray-400/50 pb-5'>
              <a href="#projects" className='flex items-center w-fit uppercase'>
                <span className={`select-none vertical-writing rotate-180 cursor-pointer hover:border-l-2 border-main-color nav-link ${activeLink == "projects" ? "active-nav" : ""}`}>{langLines.aboutLines.navProject}</span>
              </a>
            </li>            
            <li className='mb-5 border-b-2 border-gray-400/50 pb-5'>
              <a href="#comps" className='flex items-center w-fit uppercase'>
                <span className={`select-none vertical-writing rotate-180 cursor-pointer hover:border-l-2 border-main-color nav-link ${activeLink == "comps" ? "active-nav" : ""}`}>{langLines.aboutLines.navComps}</span>
              </a>
            </li>            
          </ul>
          <div className='vertical-writing rotate-180 cursor-pointer hover:border-l-2 border-main-color select-none mb-4 uppercase' onClick={() => changeLang()}>
            {langLines.aboutLines.navLang}
          </div>
        </nav>
      </div>

    </main>
    </Layout>
  )
}
