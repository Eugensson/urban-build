import {
  PiPaintRollerFill,
  PiUserGearFill,
  PiWallFill,
  PiWrenchFill,
} from "react-icons/pi";
import {
  RiFacebookFill,
  RiYoutubeFill,
  RiTwitterXFill,
  RiInstagramFill,
} from "react-icons/ri";

export const navLinks = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

export const socialLinks = [
  {
    name: "Facebook",
    path: "https://www.facebook.com",
    icon: RiFacebookFill,
  },
  {
    name: "Youtube",
    path: "https://www.youtube.com",
    icon: RiYoutubeFill,
  },
  {
    name: "twitter X",
    path: "https://x.com",
    icon: RiTwitterXFill,
  },
  {
    name: "Instagram",
    path: "https://www.instagram.com",
    icon: RiInstagramFill,
  },
];

export const statList = [
  { endCountNum: 99, endCountText: "%", text: "Client Satisfaction" },
  { endCountNum: 800, endCountText: "+", text: "Successful Projects" },
  { endCountNum: 32, endCountText: "k", text: "Happy Clients" },
  { endCountNum: 26, endCountText: "+", text: "Years of Experience" },
];

export const serviceData = [
  {
    name: "construction",
    icon: PiWallFill,
    title: "Construction Services",
    description:
      "We build with precision and innovation, ensuring every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise turns ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Preparation",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finishing",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: PiPaintRollerFill,
    title: "Renovation Services",
    description:
      "Revitalizing spaces with modern design and high-quality craftsmanship. From home upgrades to office remodels, we bring fresh life to every project.",
    serviceList: [
      "Kitchen Remodeling",
      "Basement Finishing",
      "Flooring",
      "Energy-Efficient Upgrades",
      "Custom Carpentry",
      "Painting & Decorating",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restoration",
    icon: PiWrenchFill,
    title: "Restoration Services",
    description:
      "Restoring damaged or aging structures with meticulous care. We specialize in historical landmarks, fire-damaged buildings, and water-damaged properties.",
    serviceList: [
      "Historic Restoration",
      "Water Damage Repair",
      "Fire Damage Repair",
      "Structural Repairs",
      "Mold Remediation",
      "Roof Restoration",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: PiUserGearFill,
    title: "Consulting Services",
    description:
      "Expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainability, our consulting services ensure project success.",
    serviceList: [
      "Project Planning",
      "Cost Estimation",
      "Site Management",
      "Permitting",
      "Sustainability Consulting",
      "Safety Compliance",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },
];
