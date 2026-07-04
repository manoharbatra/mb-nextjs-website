import {
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaXTwitter,
  FaInstagram,
  FaFacebook,
  FaMedium,
  FaGithub,
  FaWhatsapp,
  FaTelegram,
  FaBook
} from "react-icons/fa6"

export type CommunityItem = {
  href: string
  value: string
  label: string
  color: string
  icon?: React.ComponentType<any>
  img?: string
}


// heroData.ts
export const heroData = [
  {
    row1: "Master Corporate Skills",
    row2: "Learn Corporate Growth, Salary Negotiation and more",
    row3: "Insider Corporate Knowledge",
  },
  {
    row1: "Listen Real Experiences",
    row2: "Stay updated with corporate news and salary insights",
    row3: "Real life experiences",
  },
  {
    row1: "Crack Interviews",
    row2: "Learn AI, React, System Design and more",
    row3: "Technical content",
  },
  {
    row1: "Listen to Podcasts",
    row2: "Stay updated with Tech and Career",
    row3: "Interviews with Industry Experts",
  }
];


export const communityData: CommunityItem[] = [
  // {
  //   href: "https://www.topmate.io/manohar",
  //   img: "/images/topmate.jpg",
  //   value: "Talk to Me",
  //   label: "3k+ 1:1 Calls",
  //   color: "text-red-500",
  // },
  {
    href: "https://www.youtube.com/@ManoharBatra",
    icon: FaYoutube,
    value: "98k+ Subscribers",
    label: "Job & Corporate Knowledge",
    color: "text-red-500",
  },
  {
    href: "https://www.youtube.com/@CodeAndTechWithMB",
    icon: FaYoutube,
    value: "2k+",
    label: "Code & Tech",
    color: "text-red-500",
  },
  {
    href: "https://www.linkedin.com/in/manoharbatra/",
    icon: FaLinkedin,
    value: "38k+",
    label: "Followers",
    color: "text-blue-600",
  },
  // {
  //   href: "https://discord.gg/AGWng6gTxQ",
  //   icon: FaDiscord,
  //   value: "70K+",
  //   label: "Community",
  //   color: "text-indigo-500",
  // },
  {
    href: "https://www.instagram.com/career.manoharbatrayt/",
    icon: FaInstagram,
    value: "4.5K+",
    label: "Followers",
    color: "text-pink-500",
  },

  {
    href: "https://medium.com/@contactmanoharbatra",
    icon: FaMedium,
    value: "60+",
    label: "Followers",
    color: "text-gray-800",
  },
  {
    href: "https://github.com/manoharbatra",
    icon: FaGithub,
    value: "70+",
    label: "Followers",
    color: "text-gray-900",
  },
  // {
  //   href: "https://chat.whatsapp.com/LfsYDSr4rBL3TA8Y11Vc4V",
  //   icon: FaWhatsapp,
  //   value: "400+",
  //   label: "Members",
  //   color: "text-green-500",
  // },
  // {
  //   href: "https://t.me/manoharbatrag",
  //   icon: FaTelegram,
  //   value: "Job Updates",
  //   label: "2.7k+ Followers",
  //   color: "text-blue-400",
  // },
]

export const mainButtonsData: CommunityItem[] = [
  {
    href: "https://www.topmate.io/manohar",
    img: "/images/topmate.jpg",
    value: "Talk to Me",
    label: "3k+ 1:1 Calls",
    color: "text-red-500",
  },
  {
    href: "/courses",
    icon: FaBook,
    value: "Explore Courses",
    label: "Live Cohorts & Courses",
    color: "text-purple-600",
  },
  {
    href: "https://t.me/manoharbatrag",
    icon: FaTelegram,
    value: "Job Updates",
    label: "2.7k+ Followers",
    color: "text-blue-400",
  },
]
