"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedPhone({ src = "/feed_page.svg" }: { src?: string }) {
  return (
    <motion.div
      initial={{ rotate: -8, y: 20, opacity: 0 }}
      animate={{ rotate: -2, y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.2 }}
      className="
        relative
        w-full            /* 🔥 тепер займає ширину контейнера */
        aspect-[260/520]  /* 🔥 зберігає форму телефону */
        rounded-[36px]
      "
    >
      <Image
        src={src}
        alt="ONPLY feed"
        fill
        className="object-cover rounded-[36px]"
        priority
        sizes="100vw"
      />
    </motion.div>
  );
}
