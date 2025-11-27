"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedPhone({ src = "/Feed_page2.png" }) {
  return (
    <motion.div
      initial={{ rotate: -8, y: 20, opacity: 0 }}
      animate={{ rotate: -2, y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}
      className="
        relative
        w-full
        max-w-[260px]  /* 🔥 задає реальну максимальну ширину телефону */
        rounded-[36px]
      "
    >
      <Image
        src={src}
        alt="ONPLY feed"
        width={260}
        height={520}
        className="object-cover rounded-[36px] w-full h-auto"
        priority
      />
    </motion.div>
  );
}
