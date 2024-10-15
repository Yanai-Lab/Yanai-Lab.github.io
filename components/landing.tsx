"use client";

import { motion } from "framer-motion";
import Member from "@/components/member";
import { members } from "@/data/menbers";
import Link from "next/link";

const Landing = () => {
  const students = members.filter((_, index) => index !== 0);
  const studentsByYear = students.reduce((acc: Record<number, typeof students>, student) => {
    const year = student.graduationYear;
    if (year) {
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(student);
    }
    return acc;
  }, {});

  return (
    <div className="space-y-20">
      <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 h-fit w-full px-4 py-8 md:py-12">
        <div className="w-fit mx-auto space-y-2 mb-8">
          <div className="text-slate-800 font-bold text-4xl md:text-5xl">
            統計で紐解く<br/>
            経済と政治の真実
          </div>
          <div className="text-slate-800 text-lg md:text-xl">
            最新の統計手法を駆使し、社会科学の新たな地平を切り拓きます
          </div>
        </div>
        <div className="w-fit mx-auto">
          <Link href="/research">
            <motion.div
              className="bg-[#1B7AFE] hover:bg-blue-600 text-white text-lg font-bold px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              研究テーマを見る
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="space-y-8 max-w-screen-lg mx-auto px-2 lg:px-0">
        <div className="font-bold text-2xl text-center">研究領域</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "マクロ経済学", description: "国家経済の動向を統計的に分析し、政策効果を検証します" },
            { title: "政治行動研究", description: "選挙データや世論調査を用いて、政治的意思決定プロセスを解明します" },
            { title: "国際経済学", description: "グローバル化が各国経済に与える影響を計量的に評価します" },
            { title: "労働経済学", description: "雇用政策の効果を統計的に検証し、より良い労働環境の実現を目指します" },
            { title: "公共政策評価", description: "様々な公共政策の効果を、因果推論の手法を用いて厳密に評価します" },
            { title: "計量経済学", description: "新たな統計手法の開発と、それらの経済分析への応用を行います" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05}}
              transition={{ type: "sping", stiffness: 300 }}
            >
              <div className="text-xl font-semibold text-slate-800 mb-2">{item.title}</div>
              <div className="text-slate-600">{item.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-11/12 lg:max-w-screen-lg mx-auto space-y-8">
        <div className="font-bold text-2xl text-center">所属研究員</div>
        <div className="space-y-4">
          <div className="text-lg font-bold">指導教員</div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-start-2 rounded-lg shadow-lg">
              {members
                .filter((_, index) => index === 0)
                .map((member, index) => (
                  <Member
                    key={index}
                    name={member.name}
                    nameRomaji={member.nameRomaji}
                    position={member.position}
                    image={member.image}
                    description={member.description}
                    github={member.github}
                  />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-lg font-bold">研究生</div>
          <div className="space-y-8">
            {Object.keys(studentsByYear)
              .sort()
              .map((year) => (
                <div key={year}>
                  <div className="font-bold">{year}年度卒業予定</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {studentsByYear[Number(year)]?.map((student, index) => (
                      <div key={index} className="rounded-lg shadow-lg">
                        <Member
                          name={student.name}
                          nameRomaji={student.nameRomaji}
                          position={student.position}
                          image={student.image}
                          description={student.description}
                          github={student.github}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="mb-8">
          <p className="font-bold text-2xl text-center">最新の研究成果</p>
        </div>
        <div className="w-fit mx-auto">
          <Link href="/research" className="font-bold hover:text-[#1B7AFE]">
            すべての論文を見る &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;