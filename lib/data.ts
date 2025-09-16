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

export const workData = [
  {
    id: "1",
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description: "Quality building restoration.",
    href: "#",
  },
  {
    id: "2",
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description: "Strong and safe construction.",
    href: "#",
  },
  {
    id: "3",
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Modern renovation services.",
    href: "#",
  },
  {
    id: "4",
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Expert project consulting.",
    href: "#",
  },
];

export const testimonialData = [
  {
    id: "1",
    img: "/assets/img/testimonials/avatar1.jpg",
    name: "Emily Johnson",
    text: "Urban Build turned our home into a modern space with care and detail. We are beyond happy with the results.",
  },
  {
    id: "2",
    img: "/assets/img/testimonials/avatar2.jpg",
    name: "Michael Smith",
    text: "The team was professional and precise, delivering our office project on time and on budget without issues.",
  },
  {
    id: "3",
    img: "/assets/img/testimonials/avatar3.jpg",
    name: "Sarah Williams",
    text: "From planning to final details, everything was smooth. Our family now enjoys a new living space we truly love.",
  },
  {
    id: "4",
    img: "/assets/img/testimonials/avatar4.jpg",
    name: "David Miller",
    text: "A reliable company that kept us updated each step. Their process was organized, and the quality was superb.",
  },
  {
    id: "5",
    img: "/assets/img/testimonials/avatar5.jpg",
    name: "Olivia Brown",
    text: "The renovation added real value to our property. Their skill and craftsmanship impressed us in every detail.",
  },
  {
    id: "6",
    img: "/assets/img/testimonials/avatar6.jpg",
    name: "Richard Davis",
    text: "Working with Urban Build was stress-free. They combined creativity and skill to deliver excellent results.",
  },
];
