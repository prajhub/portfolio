"use client"

import Image from "next/image";
import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <motion.div initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}>
                    <Image className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl" width='192' priority={true} height='192' quality='95' alt="my-portrait" src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"' />
                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>👋</motion.span>
                </motion.div>
            </div>

            <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Prajwal.</span> I'm a{" "}
        <span className="font-bold">front-end developer</span> keen{" "}
        <span className="font-bold">in web</span> technologies. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">Next.js</span>.
      </motion.h1>
        </section>
    )
}