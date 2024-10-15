"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2,
  PieChart,
  TrendingUp,
  Database
} from "lucide-react";
import Image from "next/image";

export default function EyeCatch() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20},
    visible: { opacity: 1, y: 0},
  };

  return (
    <AnimatePresence>
      {isVisible && (
      <motion.div
        className="fixed flex flex-col items-center justify-center space-y-8 w-screen h-screen z-50
          bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 overflow-hidden"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        transition={{ duration: 0.5}}
        >
        <div className="text-center mb-8">
          <div className="flex justify-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {/* mobile */}
              <Image
                src="/imgs/yanai-lab.png"
                alt="yanai lab logo"
                width={67.34}
                height={78}
                className="md:hidden"
              />
              {/* PC, tablet */}
              <Image
                src="/imgs/yanai-lab.png"
                alt="yanai lab logo"
                width={129.5}
                height={150.0}
                className="hidden md:block"
              />
            </motion.div>
            <div className="relative overflow-hidden w-fit h-fit my-auto flex items-center">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 1.2 }}
                className="text-3xl md:text-5xl font-bold text-slate-800"
              >
                計量政治経済研究室
              </motion.h1>
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1,
                  times: [0, 0.5, 1],
                  delay: 0.8,
                  ease: ["easeOut", "easeIn"]
                }}
                className="absolute top-0 bottom-0 left-0 right-0 bg-white"
              />
            </div>
          </div>
          <motion.p
            className="text-lg md:text-2xl text-gray-700 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            あなたの疑問に<span className="text-[#1B7AFE]">統計的</span>な答えを
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: 2.2,
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { Icon: BarChart2, label: "データ分析" },
            { Icon: PieChart, label: "統計モデリング" },
            { Icon: TrendingUp, label: "経済予測" },
            { Icon: Database, label: "ビッグデータ" },
          ].map(({ Icon, label }, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={iconVariants}
            >
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                {/* mobile */}
                <Icon size={20} className="text-[#1B7AFE] md:hidden" />
                {/* PC, tablet */}
                <Icon size={40} className="text-[#1B7AFE] hidden md:block" />
              </div>
              <p className="text-gray-700 font-medium">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  )
};