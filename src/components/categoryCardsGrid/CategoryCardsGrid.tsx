"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Testimonial {
    name: string
    src: string
    width?: number
    height?: number
}

interface Item {
    id: number
    type: "image" | "component"
    title: string
    followers: string
    description: string
    color: string
    link: string
    img?: string
    icon?: React.ReactNode
    testimonials?: Testimonial[]
}

interface Category {
    label: string
    items: Item[]
}

interface CategoryCardsGridProps {
    data: Category[]
    onOpenTestimonials: (testimonials: Testimonial[]) => void
}

export default function CategoryCardsGrid({
    data,
    onOpenTestimonials,
}: CategoryCardsGridProps) {
    return (
        <div className="max-w-8xl mx-auto pb-8 space-y-12">
            {data.map((cat) => (
                <div key={cat.label}>
                    {/* Category Heading */}
                    <h2 className="text-2xl font-bold mb-6">{cat.label}</h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {cat.items.map((p, index) => (
                            <motion.div
                                key={`${cat.label}-${p.id}-${index}`}
                                whileHover={{ scale: 1.04 }}
                                className="rounded-2xl shadow-md bg-white overflow-hidden flex flex-col max-h-96"
                            >
                                {/* 🔹 Image on Top (auto height, no crop) */}
                                {p.type === "image" && p.img && (
                                    <div className="w-full">
                                        <Image
                                            src={p.img}
                                            alt={p.title}
                                            width={800}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                            priority={index < 2}
                                        />
                                    </div>
                                )}

                                {/* 🔹 Content Section */}
                                <div className="p-5 flex flex-col min-h-0">
                                    <h3 className="text-lg font-semibold mb-2">
                                        {p.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 font-semibold mb-1">
                                        {p.followers}
                                        {p.testimonials?.length ? (
                                            <button
                                                onClick={() =>
                                                    onOpenTestimonials(
                                                        p.testimonials!
                                                    )
                                                }
                                                className="text-blue-600 underline ml-1"
                                            >
                                                Testimonials
                                            </button>
                                        ) : null}
                                    </p>

                                    <p className="text-sm text-gray-700 line-clamp-2 mb-3">
                                        {p.description}
                                    </p>

                                    {/* 🔹 CTA Button */}
                                    {p.link.startsWith("http") ? (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-900 text-white px-4 py-2 rounded-xl text-center hover:bg-gray-700 transition"
                                        >
                                            Enroll Now
                                        </a>
                                    ) : (
                                        <Link
                                            href={p.link}
                                            className="bg-gray-900 text-white px-4 py-2 rounded-xl text-center hover:bg-gray-700 transition"
                                        >
                                            Enroll Now
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
