import img1 from "@/assets/image/1.jpg";
import banner from "@/assets/image/banner/banner.jpg";
import banner1 from "@/assets/image/banner/banner1.jpg";
import banner2 from "@/assets/image/banner/banner2.jpg";
import besico from "@/assets/image/client/besico.jpeg";
import conteofFlorence from "@/assets/image/client/ConteofFlorence.jpeg";
import cove from "@/assets/image/client/Cove.jpeg";
import design911 from "@/assets/image/client/design911.jpeg";
import friendly from "@/assets/image/client/friendly.png";
import haroki from "@/assets/image/client/haroki.webp";
import idealClima from "@/assets/image/client/IdealClima.jpeg";
import keedlee from "@/assets/image/client/Keedlee.png";
import lidi from "@/assets/image/client/lidi.jpeg";
import youth from "@/assets/image/client/youth.jpeg";
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
import tankTopProduct04 from "@/assets/image/product/tank_top/product051.jpg";
import tankTopProduct03 from "@/assets/image/product/tank_top/product050.jpg";
import team1 from '@/assets/image/team/1.jpg';
import team2 from '@/assets/image/team/2.jpg';
import team3 from '@/assets/image/team/3.jpg';
import team4 from '@/assets/image/team/4.jpg';
import department from "@/assets/image/ST&A Document/Department of textile.jpg";
import ERC from "@/assets/image/ST&A Document/ERC.jpg";
import Fire from "@/assets/image/ST&A Document/Fire License.jpg";
import NCCI from "@/assets/image/ST&A Document/NCCI.jpg";
import { Certification, Customer, TeamMember } from "@/types";

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
        photo: [
          tShartProduct03,
        ],
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
        photo: [
          tankTopProduct03,
          tankTopProduct04,
        ],
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
  },
  {
    name: "Hossain",
    role: "Head of Design",
    image: team2,
    bio: "Leading design innovation, Farzana ensures each product blends aesthetics with market trends.",
  },
  {
    name: "Shuvo",
    role: "CEO & Founder",
    image: team3,
    bio: "Aminul brings over 15 years of expertise in knit garment production and strategic leadership.",
  },
  {
    name: "Farzana",
    role: "Head of Design",
    image: team4,
    bio: "Leading design innovation, Farzana ensures each product blends aesthetics with market trends.",
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
    logo: haroki,
    description: "Leading fashion house",
  },
  {
    name: "Youth",
    logo: youth,
    description: "Global textile distributor",
  },
  {
    name: "Keedlee",
    logo: keedlee,
    description: "Eco-friendly apparel maker",
  },
  {
    name: "Besico",
    logo: besico,
    description: "Global textile distributor",
  },
  {
    name: "Friendly",
    logo: friendly,
    description: "Global textile distributor",
  },
  {
    name: "Cove",
    logo: cove,
    description: "Global textile distributor",
  },
  {
    name: "LIDL",
    logo: lidi,
    description: "Global textile distributor",
  },
  // {
  //     name: "Top Ten",
  //     logo: topTen,
  //     description: "Global textile distributor",
  // },
  {
    name: "Ideal Clima",
    logo: idealClima,
    description: "Global textile distributor",
  },
  {
    name: "Design 911",
    logo: design911,
    description: "Global textile distributor",
  },
  {
    name: "Conte of Florence",
    logo: conteofFlorence,
    description: "Eco-friendly apparel maker",
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

