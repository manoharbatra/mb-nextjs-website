"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { communityData } from "./heroData"

export default function CommunityCards() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 rounded-full pb-16"
        >
            {communityData.map((item, idx) => {
                const Icon = item.icon

                return (
                    <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex items-center gap-3 bg-white/90 px-4 py-2 rounded-full shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl min-w-[130px]"
                        >

                            {/* ICON OR IMAGE */}
                            <div className={`text-2xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
                                {Icon ? (
                                    <Icon />
                                ) : item?.img ? (
                                    <Image
                                        src={item?.img}
                                        alt={item.value ?? item.label ?? "icon"}
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 rounded-full object-cover"
                                    />
                                ) : null}
                            </div>

                            {/* TEXT */}
                            <div className="text-left">
                                <p className="text-lg font-bold text-slate-900">
                                    {item.value}
                                </p>
                                <p className="text-xs text-slate-600">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    </a>
                )
            })}
        </motion.div>
    )
}
