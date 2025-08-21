import img1 from "@/assets/image/1.jpg";
import banner from "@/assets/image/banner/banner.jpg";
import banner1 from "@/assets/image/banner/banner1.jpg";
import banner2 from "@/assets/image/banner/banner2.jpg";
import caseStudy from "@/assets/image/caseStudy.jpg";
import client1 from "@/assets/image/client/1.jpg";
import client2 from "@/assets/image/client/2.jpg";
import client3 from "@/assets/image/client/3.jpg";
import client4 from "@/assets/image/client/4.jpg";
import client5 from "@/assets/image/client/5.jpg";
import client6 from "@/assets/image/client/6.jpg";
import client7 from "@/assets/image/client/7.jpg";
import client8 from "@/assets/image/client/8.jpg";
import client9 from "@/assets/image/client/9.jpg";
import image from "@/assets/image/companyOverView.jpg";
import image1 from "@/assets/image/companyOverView1.jpg";
import image2 from "@/assets/image/companyOverView2.jpg";
import cargoProduct01 from "@/assets/image/product/cargo_pant/product394.jpg";
import cargoProduct02 from "@/assets/image/product/cargo_pant/product395.jpg";
import cargoProduct03 from "@/assets/image/product/cargo_pant/product397.jpg";
import poloProduct01 from "@/assets/image/product/polo/1.jpg";
import sweatProduct01 from "@/assets/image/product/sweat_shirt/product212.jpg";
import sweatProduct02 from "@/assets/image/product/sweat_shirt/product291.jpg";
import sweatProduct03 from "@/assets/image/product/sweat_shirt/product298.jpg";
import tShartProduct01 from "@/assets/image/product/t_shart/1.jpg";
import tShartProduct02 from "@/assets/image/product/t_shart/2.jpg";
import tShartProduct03 from "@/assets/image/product/t_shart/3.jpg";
import tankTopProduct03 from "@/assets/image/product/tank_top/product050.jpg";
import tankTopProduct04 from "@/assets/image/product/tank_top/product051.jpg";
import department from "@/assets/image/ST&A Document/Department of textile.jpg";
import ERC from "@/assets/image/ST&A Document/ERC.jpg";
import Fire from "@/assets/image/ST&A Document/Fire License.jpg";
import NCCI from "@/assets/image/ST&A Document/NCCI.jpg";
import team1 from "@/assets/image/team/1.jpg";
import team2 from "@/assets/image/team/2.jpg";
import team3 from "@/assets/image/team/3.jpg";
import team4 from "@/assets/image/team/4.jpg";
import { CaseStudy, Certification, Customer, TeamMember } from "@/types";
import { BiGlobe, BiLeaf, BiMapPin, BiPhone } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import {
  FaBalanceScale,
  FaBullseye,
  FaCheckCircle,
  FaComments,
  FaDraftingCompass,
  FaEye,
  FaFacebookF,
  FaFlask,
  FaIndustry,
  FaInstagram,
  FaLeaf,
  FaLightbulb,
  FaLinkedinIn,
  FaShieldAlt,
  FaSmile,
  FaTruck,
  FaTruckLoading,
  FaWhatsapp,
} from "react-icons/fa";
import { FcFactory } from "react-icons/fc";
import { FiMessageCircle } from "react-icons/fi";
import { GiClothes, GiCottonFlower } from "react-icons/gi";
import { LuPackageCheck } from "react-icons/lu";
import { MdDesignServices, MdEmail } from "react-icons/md";
export const productGallery = [
  {
    title: "T-Shirt",
    subCategory: [
      {
        title: "Halcyon Drop-sholder T-Shirt",
        photo: [tShartProduct01],
        description:
          "Experience effortless style and comfort with this oversized navy blue t-shirt.Perfect for both casual and urban looks, this t-shirt is a wardrobe essential for any season",
      },
      {
        title: "Halcyon Drop-sholder T-Shirt",
        photo: [tShartProduct01],
        description:
          "Experience effortless style and comfort with this oversized navy blue t-shirt.Perfect for both casual and urban looks, this t-shirt is a wardrobe essential for any season",
      },
      {
        title: "Royal Roses Drop Shoulder T-shirt",
        photo: [tShartProduct02],
        description: "A stylish and comfortable t-shirt",
      },
      {
        title: "Royal Roses Drop Shoulder T-shirt",
        photo: [tShartProduct03],
        description: "A stylish and comfortable t-shirt",
      },
    ],
    photo: tShartProduct01,
  },
  {
    title: "Polo Shirt",
    subCategory: [
      {
        title: "Halcyon Polo Shirt ",
        photo: [poloProduct01],
        description:
          "Contrast white-tipped collar and sleeve cuffs for a refined look.Minimalistic branding on the chest for subtle elegance.Classic buttoned placket for a versatile style.",
      },
    ],
    photo: poloProduct01,
  },

  {
    title: "Tank Top",
    subCategory: [
      {
        title: "Royal Roses Tank Top Set",
        photo: [tankTopProduct03, tankTopProduct04],
        description:
          "Stay stylish and comfortable in this sleek activewear set, perfect for workouts or casual lounging.",
      },
    ],
    photo: tankTopProduct03,
  },

  {
    title: "Cargo Pant",
    subCategory: [
      {
        title: "Halcyon Narrow Long Pant",

        photo: [cargoProduct01, cargoProduct02],
        description:
          "Stay comfortable and stylish with these versatile navy blue Long Pant, designed for an effortlessly modern look.Perfect for casual outings, workouts, or lounging at home, these Long Pantare a wardrobe essential for every man.",
      },

      {
        title: "Halcyon Narrow Long Pant",
        photo: [cargoProduct03],
        description:
          "Stay comfortable and stylish with these versatile navy blue Long Pant, designed for an effortlessly modern look.Perfect for casual outings, workouts, or lounging at home, these Long Pantare a wardrobe essential for every man.",
      },
    ],
    photo: cargoProduct01,
  },

  {
    title: "Sweat Shirt",
    subCategory: [
      {
        title: "Halcyon Crew Neck Sweatshirt",

        photo: [sweatProduct01],
        description:
          "Introducing classic Sweatshirt our loungewear game with this stylish grey sweatshirt.Crafted from a soft, breathable fabric, this ensemble offers the perfect blend of comfort and casual chic.The minimalist design makes it versatile enough for both relaxing at home or running errands around town.",
      },
      {
        title: "Halcyon Crew Neck Sweatshirt",
        photo: [sweatProduct02],
        description:
          "Introducing classic Sweatshirt our loungewear game with this stylish grey sweatshirt.Crafted from a soft, breathable fabric, this ensemble offers the perfect blend of comfort and casual chic.The minimalist design makes it versatile enough for both relaxing at home or running errands around town.",
      },
      {
        title: "Halcyon Crew Neck Sweatshirt",
        photo: [sweatProduct03],
        description:
          "Introducing classic Sweatshirt our loungewear game with this stylish grey sweatshirt.Crafted from a soft, breathable fabric, this ensemble offers the perfect blend of comfort and casual chic.The minimalist design makes it versatile enough for both relaxing at home or running errands around town.",
      },
    ],
    photo: sweatProduct01,
  },
];
export const galleryImages = [image, image1, image2];

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/merchandising", label: "Merchandising" },
  { path: "/customers", label: "Our Customers" },
  { path: "/career", label: "Career" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

export const faqData = [
  {
    question: "What is merchandising in the textile industry?",
    answer:
      "Merchandising in the textile industry involves selecting, planning, and promoting products to ensure that they meet consumer demand while maximizing sales and profit. It includes activities such as sourcing raw materials, product design, pricing, and managing inventory.",
  },
  {
    question: "How does product development work in merchandising?",
    answer:
      "Product development in merchandising involves designing and creating new products based on market trends and consumer needs. It includes choosing fabrics, colors, styles, and patterns, and ensuring that the final product aligns with the brand's image and target market.",
  },
  {
    question: "What is the role of fabric sourcing in merchandising?",
    answer:
      "Fabric sourcing is a crucial part of merchandising. It involves finding the right fabrics that fit the product design, budget, and quality standards. This step can involve working with suppliers and manufacturers to ensure fabric availability and timely delivery.",
  },
  {
    question: "How are pricing strategies determined in merchandising?",
    answer:
      "Pricing strategies are determined based on several factors, including production costs, competitive pricing, target market, and perceived value. Merchandisers analyze these factors to set a price that maximizes profit while staying competitive and attractive to customers.",
  },
];

export const milestones = [
  {
    year: "2023",
    text: "Founded with a vision to redefine knit garments manufacturing",
  },
  { year: "2024", text: "Expanded to global export markets across EU & Asia" },
  {
    year: "2025",
    text: "Launched AI-powered design and eco-friendly initiatives",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Ripon",
    role: "CEO & Founder",
    image: team1,
    bio: "Aminul brings over 15 years of expertise in knit garment production and strategic leadership.",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Hossain",
    role: "Head of Design",
    image: team2,
    bio: "Leading design innovation, Farzana ensures each product blends aesthetics with market trends.",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Shuvo",
    role: "CEO & Founder",
    image: team3,
    bio: "Aminul brings over 15 years of expertise in knit garment production and strategic leadership.",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Farzana",
    role: "Head of Design",
    image: team4,
    bio: "Leading design innovation, Farzana ensures each product blends aesthetics with market trends.",
    social: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
];

export const culture = [
  {
    image: img1,
    quote: "Working here has helped me grow professionally and personally.",
    name: "Fatima",
    title: "Production Supervisor",
  },
  {
    image: img1,
    quote: "The team culture here is truly supportive and empowering.",
    name: "Rahul",
    title: "Quality Analyst",
  },
  {
    image: img1,
    quote: "I've never felt more valued as a team member.",
    name: "Anika",
    title: "Design Lead",
  },
];
export const jobs = [
  {
    title: "Senior Designer",
    department: "Design Department",
    location: "Factory",
    deadline: "May 15, 2025",
  },
  {
    title: "Junior Designer",
    department: "Design Department",
    location: "Head Office",
    deadline: "May 20, 2025",
  },
  {
    title: "3D Designer",
    department: "Design Department",
    location: "Factory",
    deadline: "May 25, 2025",
  },
];

export const whyWorkUs = [
  { icon: "🌍", title: "Work Environment" },
  { icon: "📈", title: "Career Growth" },
  { icon: "📚", title: "Learning & Development" },
  { icon: "🎁", title: "Employee Benefits" },
  { icon: "🌱", title: "Sustainability Efforts" },
];

export const howWeHire = [
  "Submit Application 📩",
  "HR Review 📋",
  "Interview Rounds 🎤",
  "Job Offer 💼",
  "Onboarding 🏆",
];

export const featuredCustomers: Customer[] = [
  {
    name: "Haroki",
    logo: client1,
    description: "Leading fashion house",
  },
  {
    name: "Youth",
    logo: client2,
    description: "Global textile distributor",
  },
  {
    name: "Keedlee",
    logo: client3,
    description: "Eco-friendly apparel maker",
  },
  {
    name: "Besico",
    logo: client4,
    description: "Global textile distributor",
  },
  {
    name: "Friendly",
    logo: client5,
    description: "Global textile distributor",
  },
  {
    name: "Youth",
    logo: client6,
    description: "Global textile distributor",
  },
  {
    name: "Keedlee",
    logo: client7,
    description: "Eco-friendly apparel maker",
  },
  {
    name: "Besico",
    logo: client8,
    description: "Global textile distributor",
  },
  {
    name: "Friendly",
    logo: client9,
    description: "Global textile distributor",
  },
];

export const certifications: Certification[] = [
  {
    name: "Department of textile",
    image: department,
  },
  {
    name: "ERC",
    image: ERC,
  },
  {
    name: "Fire License",
    image: Fire,
  },
  {
    name: "NCCI",
    image: NCCI,
  },
];

export const homeBanner = [
  {
    src: banner,
    title: "Trusted Garment Exporters to the World",
    description:
      "Delivering excellence in every thread, from design to doorstep.",
  },
  {
    src: banner1,
    title: "Global Garment Excellence Starts Here",
    description:
      " Supplying premium textiles and apparel to leading worldwide.",
  },
  {
    src: banner2,
    title: "Where Quality Meets Global Fashion",
    description:
      "Empowering brands with world-class garments and textile innovation.",
  },
];

export const styles = [
  "T-Shirt (Boys)",
  "T-Shirt (Men's)",
  "T-Shirt (Girls)",
  "T-Shirt (Ladies)",
  "Polo Shirt (Boys)",
  "Polo Shirt (Men's)",
  "Polo Shirt (Girls)",
  "Polo Shirt (Ladies)",
  "LongPants (Boys)",
  "LongPants (Men's)",
  "LongPants (Girls)",
  "LongPants (Ladies)",
  "Leggings (Girls)",
  "Leggings (Ladies)",
  "Shorts (Boys)",
  "Shorts (Men's)",
  "Sexy Shorts",
  "Hoodie (Boys)",
  "Hoodie (Men's)",
  "Hoodie (Girls)",
  "Hoodie (Ladies)",
  "Romper",
  "Keeper",
  "Tank Top (Boys)",
  "Tank Top (Men's)",
  "Tank Top (Girls)",
  "Tank Top (Ladies)",
  "Joggers (Boys)",
  "Joggers (Men's)",
  "Joggers (Girls)",
  "Joggers (Ladies)",
  "Cargo Pant (Men's)",
  "Flarepants (Ladies)",
  "Sweatshirt (Boys)",
  "Sweatshirt (Men's)",
  "Sweatshirt (Girls)",
  "Sweatshirt (Ladies)",
  "Boys Set (Long Pants & Long Sleeve T-Shirt)",
  "Boys Set (Long Pants, Long Sleeve Polo Shirt)",
  "Boys Set (Long Pants & Sweatshirt)",
  "Boys Set (Short Pant & T-Shirt)",
  "Girls Set (Long Pant & Sweat Shirt)",
  "Girls Set (Long Pant & Long Sleeve Polo Shirt)",
  "Girls Set (Long Pant & Long Sleeve T-Shirt)",
  "Girls Set (Short Pant & T-Shirt)",
  "Baby Set",
  "Sports T-Shirt",
  "Sports Polo-Shirt",
  "Sports Trouser",
  "Activewear (Men's)",
  "Activewear (Ladies)",
];
export const subjects = [
  "General Inquiry",
  "Buyer Inquiry",
  "Partnership",
  "Support",
  "Careers",
];

export const fabrics = [
  "Single Jersey",
  "Single jersey plain",
  "Pique",
  "Lacoste",
  "Fleece",
  "1x1 Rib Or Plain Rib",
  "(2x2)Rib",
  "(2x1)Rib",
  "(5x5)Rib",
  "(5x3)Rib",
  "Waffle",
  "Flat Back Rib",
  "Plain Interlock",
  "Mesh",
  "Thermal",
  "Drop Needle",
];
export const yarns = [
  "Card Sub",
  "Combed",
  "Combed Sub",
  "PC",
  "PVC",
  "Grey Melange",
  "Viscose",
  "Spun",
  "Rotor",
  "Spender / Lyera",
  "Polyester",
  "Swing Thread",
  "Rubber",
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Boosting Production for EcoWear",
    description:
      "Helped EcoWear scale production while maintaining sustainability.",
    image: caseStudy,
    stats: "Efficiency ↑ 30%",
  },
  {
    title: "Boosting Production for EcoWear",
    description:
      "Helped EcoWear scale production while maintaining sustainability.",
    image: caseStudy,
    stats: "Efficiency ↑ 30%",
  },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/8801111111111",
    icon: FaWhatsapp,
    label: "WhatsApp",
  },
];

export const contactInfo = [
  {
    id: "address",
    label: "Factory Address",
    value: "13 No, New Market, Dhaka -1200, Bangladesh",
    icon: BiMapPin,
    type: "text",
  },
  {
    id: "phone",
    label: "Phone",
    value: ["+88 0111111111", "+88 0111111112"],
    icon: BiPhone,
    type: "phone",
  },
  {
    id: "email",
    label: "Email",
    value: "rhshuvo121@gmail.com",
    icon: MdEmail,
    type: "email",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+88 01111111111",
    icon: FiMessageCircle,
    type: "text",
  },
  {
    id: "hours",
    label: "Working Hours",
    value: "Sat - Thu: 8:00 AM - 7:00 PM",
    icon: CgLock,
    type: "text",
  },
];

export const missionVision = [
  {
    title: "Our Mission",
    description:
      "To deliver high-quality knit garments by blending craftsmanship with cutting-edge technology, while empowering our workforce and ensuring customer satisfaction at every step.",
    icon: <FaBullseye className="text-primary text-3xl shrink-0" />,
  },
  {
    title: "Our Vision",
    description:
      "To be a global leader in sustainable textile manufacturing — committed to eco-friendly practices, ethical production, and innovation that shapes the future of fashion.",
    icon: <FaEye className="text-primary text-3xl shrink-0" />,
  },
];

export const values = [
  {
    title: "Quality Assurance",
    icon: <FaCheckCircle className="text-primary text-3xl shrink-0" />,
    description:
      "Strict quality control from sourcing to delivery to ensure perfection in every stitch.",
  },
  {
    title: "Sustainability & Eco-Friendly",
    icon: <FaLeaf className="text-green-600 text-3xl shrink-0" />,
    description:
      "We prioritize eco-conscious materials and processes for a greener future.",
  },
  {
    title: "Innovation & Customization",
    icon: <FaLightbulb className="text-yellow-500 text-3xl shrink-0" />,
    description:
      "Tailored solutions and cutting-edge designs to match modern fashion needs.",
  },
  {
    title: "Research & Development",
    icon: <FaFlask className="text-indigo-500 text-3xl shrink-0" />,
    description: "Constantly experimenting to create trendsetting garments.",
  },
  {
    title: "Customer Satisfaction",
    icon: <FaSmile className="text-rose-500 text-3xl shrink-0" />,
    description:
      "We listen, adapt, and serve — ensuring happy clients across the globe.",
  },
  {
    title: "Ethical Manufacturing",
    icon: <FaBalanceScale className="text-gray-600 text-3xl shrink-0" />,
    description:
      "Fair wages, safe work environments, and integrity in every process.",
  },
];
export const services = [
  {
    title: "Knit Garments Manufacturer & Exporter",
    icon: <GiClothes size={48} className="text-primary" />,
    desc: "Premium quality knitwear tailored for global markets.",
  },
  {
    title: "Custom Fashion Design & Development",
    icon: <MdDesignServices size={48} className="text-primary" />,
    desc: "Create unique fashion lines with our expert designers.",
  },
  {
    title: "Wholesale & Export",
    icon: <FaTruckLoading size={48} className="text-primary" />,
    desc: "Reliable bulk supply with international shipping.",
  },
  {
    title: "Yarn Wholesaler",
    icon: <GiCottonFlower size={48} className="text-primary" />,
    desc: "Supplying top-grade yarn for all textile needs.",
  },
];

export const capabilities = [
  {
    icon: <FcFactory className="w-10 h-10" />,
    title: "State-of-the-Art Manufacturing",
    description:
      "Cutting-edge machinery & processes ensuring top-tier quality.",
  },
  {
    icon: <BiLeaf className="w-10 h-10 text-green-500" />,
    title: "Eco-Friendly & Sustainable",
    description: "Committed to ethical practices and green production.",
  },
  {
    icon: <LuPackageCheck className="w-10 h-10 text-blue-500" />,
    title: "Customization & Bulk Orders",
    description: "Tailored solutions for brands and high-volume needs.",
  },
  {
    icon: <BiGlobe className="w-10 h-10 text-indigo-500" />,
    title: "Global Distribution",
    description: "Efficient worldwide shipping & logistic solutions.",
  },
];
export const merchandisingAbout = [
  {
    icon: "🧶",
    title: "Yarn Sourcing",
    description:
      "We source high-quality yarn from trusted global suppliers to ensure fabric excellence from the start.",
  },
  {
    icon: "🧵",
    title: "Knitting Fabric",
    description:
      "Utilizing advanced knitting techniques to produce a wide range of fabric types as per design requirements.",
  },
  {
    icon: "🎨",
    title: "Product Development",
    description:
      "Collaborating with clients to develop innovative, trend-forward products with technical precision.",
  },
  {
    icon: "💰",
    title: "Costing & Pricing",
    description:
      "We offer transparent and competitive pricing strategies to meet budget goals without compromising quality.",
  },
  {
    icon: "✅",
    title: "Quality Control",
    description:
      "Each stage of production is closely monitored to maintain top-notch quality standards and compliance.",
  },
  {
    icon: "🚚",
    title: "On-Time Shipment",
    description:
      "Strict adherence to timelines with efficient logistics ensures timely deliveries, every time.",
  },
];

export const steps = [
  {
    title: "Consultation",
    icon: <FaComments className="text-white text-xl" />,
  },
  {
    title: "Design & Sampling",
    icon: <FaDraftingCompass className="text-white text-xl" />,
  },
  {
    title: "Sourcing & Production",
    icon: <FaIndustry className="text-white text-xl" />,
  },
  {
    title: "Quality Assurance",
    icon: <FaShieldAlt className="text-white text-xl" />,
  },
  {
    title: "Delivery",
    icon: <FaTruck className="text-white text-xl" />,
  },
];
