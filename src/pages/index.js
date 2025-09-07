import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/Riley.png";
import { motion } from "framer-motion";
import {
  MediumIcon,
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./../components/Icons";
import SkillsListing from "@/components/SkillsListing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sachin Kadian - Software Developer</title>
        <meta
          name="description"
          content="Associate Software Developer at 75way Technology Pvt. Ltd, Mohali, India."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}>
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex w-full items-start justify-between md:flex-col pt-10 pb-32">
            <div className="w-1/2 lg:hidden md:flex flex self-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100"
                  height={340}
                  width={340}
                  sizes="33vw"
                />
              }
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hey, I’m Sachin"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-1/2 w-full items-center items-start lg:w-full  lg:!justify-center  sm:!justify-center  md:!text-center md:inline-block md:w-full">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
                  I create engaging web & mobile experiences.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-sm">
                I'm a full stack web developer, passionate about creating
                dynamic and user-friendly web experiences. With a keen eye for
                design and a robust understanding of front-end and back-end
                technologies.
              </p>
              <div className="mt-2 flex items-center self-start gap-3 grid-cols-2 lg:self-center">
                <Link
                  href="/about/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}>
                  Get To Know Me
                </Link>
                <Link
                  href="/projects/"
                  target={"_self"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}>
                  projects
                </Link>
              </div>
            </div>
          </div>
          <AnimatedText
            text="Looking to hire developer ? ✨"
            className="mb-4 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <div className="flex flex-col w-fit mx-auto items-center  lg:!justify-center  sm:!justify-center ">
            
            <p className="w-3/4 text-center my-4 font-medium">
                With over 1.5 year of experience in the industry, I
                have honed my skills in both front-end and back-end
                technologies, allowing me to deliver responsive and
                high-performance websites and applications.
              </p>
              <h2 className="text-center animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-5xl sm:!text-3xl">
              Let's connect!
            </h2>
            <div className="flex items-center gap-1 my-12">
              <motion.a
                target={"_blank"}
                className="w-7 mr-3"
                href="https://github.com/SachinKdn"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my GitHub profile">
                <GithubIcon />
              </motion.a>

              <motion.a
                target={"_blank"}
                className="w-7 mx-3 bg-light rounded-full"
                href="https://linkedin.com/in/sachin-kadian"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my LinkedIn profile">
                <LinkedInIcon />
              </motion.a>
              <motion.a
                target={"_blank"}
                className="w-7 h-7 mx-3 bg-light rounded-full flex items-center"
                href="mailto:sachinkadian2019@gmail.com"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Checkout my gmail">
                <EmailIcon />
              </motion.a>
            </div>
          </div>

          <SkillsListing />
        </Layout>
        {/* <div className="fixed right-8 bottom-8 inline-block md:hidden">
          <iframe
            className="iframe"
            title="Noongar Seasonal Calendar"
            width="280"
            height="120"
            src="https://seasonal-au.netlify.app/"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div> */}
        <HireMe />
      </article>
    </>
  );
}
