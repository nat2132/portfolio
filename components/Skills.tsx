"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data";

const Skills = () => {
  return (
    <section className="py-20" id="skills">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <p className="text-center text-white-200 mt-5 mx-auto max-w-2xl px-6">
        The production stack I use to take ideas from design to deployed,
        working software — across frontend, backend and databases.
      </p>

      <div className="mt-12 grid gap-6 px-4 sm:px-10 md:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: gi * 0.08 }}
            className="rounded-2xl border border-white/[0.08] bg-black-200/40 p-6 backdrop-blur"
          >
            <h3 className="mb-4 font-semibold text-purple text-sm uppercase tracking-widest">
              {g.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-white/10 bg-black px-3 py-1.5 text-sm text-white-200 transition-colors hover:border-purple/40 hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
