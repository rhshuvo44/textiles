import img1 from "@/assets/image/1.jpg";
import banner from '@/assets/image/banner/banner.jpg';
import banner1 from '@/assets/image/banner/banner1.jpg';
import banner2 from '@/assets/image/banner/banner2.jpg';
import besico from '@/assets/image/client/besico.jpeg';
import conteofFlorence from '@/assets/image/client/ConteofFlorence.jpeg';
import cove from '@/assets/image/client/Cove.jpeg';
import design911 from '@/assets/image/client/design911.jpeg';
import friendly from '@/assets/image/client/friendly.png';
import haroki from '@/assets/image/client/haroki.webp';
import idealClima from '@/assets/image/client/IdealClima.jpeg';
import keedlee from '@/assets/image/client/Keedlee.png';
import lidi from '@/assets/image/client/lidi.jpeg';
import youth from '@/assets/image/client/youth.jpeg';
import image from "@/assets/image/companyOverView.jpg";
import image1 from "@/assets/image/companyOverView1.jpg";
import image2 from "@/assets/image/companyOverView2.jpg";
import department from '@/assets/image/ST&A Document/Department of textile.jpg';
import ERC from '@/assets/image/ST&A Document/ERC.jpg';
import Fire from '@/assets/image/ST&A Document/Fire License.jpg';
import NCCI from '@/assets/image/ST&A Document/NCCI.jpg';
import product01 from '@/assets/image/textile/product01.webp';
import product02 from '@/assets/image/textile/product02.webp';
import product03 from '@/assets/image/textile/product03.webp';
import product04 from '@/assets/image/textile/product04.webp';
import product05 from '@/assets/image/textile/product05.webp';
import product07 from '@/assets/image/textile/product07.webp';
import product08 from '@/assets/image/textile/product08.webp';
import product10 from '@/assets/image/textile/product10.webp';
import product11 from '@/assets/image/textile/product11.webp';
import product12 from '@/assets/image/textile/product12.jpg';
import product13 from '@/assets/image/textile/product13.webp';
import product09 from '@/assets/image/textile/product9.webp';
import { Certification, Customer, TeamMember } from '@/types';

export const productGallery = [
    {
        title: "T-Shirt",
        subCategory: [
            { title: "T-Shirt (Boys)", photo: product03 },
            { title: "T-Shirt (Mens)", photo: product08 },
            { title: "T-Shirt (Girls)", photo: product08 },
            { title: "T-Shirt (Ladies)", photo: product08 },
        ],
        photo: product04,
    },
    {
        title: "Polo Shirt",
        subCategory: [
            { title: "Polo Shirt (Boys)", photo: product08 },
            { title: "Polo Shirt (Mens)", photo: product08 },
            { title: "Polo Shirt (Girls)", photo: product08 },
            { title: "Polo Shirt (Ladies)", photo: product08 },
        ],
        photo: product05,
    },
    {
        title: "Long Pant",
        subCategory: [
            { title: "Long Pant (Boys)", photo: product08 },
            { title: "Long Pant (Mens)", photo: product08 },
            { title: "Long Pant (Girls)", photo: product08 },
            { title: "Long Pant (Ladies)", photo: product08 },
        ],
        photo: product10,
    },

    // {
    //     title: "Leggings",
    //     subCategory: [
    //         { title: "Leggings (Girls)", photo: product06 },
    //         { title: "Leggings (Ladies)", photo: product08 },
    //     ],
    //     photo: product15,
    // },

    // {
    //     title: "Shorts",
    //     subCategory: [
    //         {
    //             title: "Shorts (Boys)",
    //             photo: product08
    //         },
    //         { title: "Shorts (Mens)", photo: product08 },
    //         { title: "Sexy Shorts", photo: product08 },
    //     ],
    //     photo: product07,
    // },

    {
        title: "Hoodie",
        subCategory: [
            {
                title: "Hoodie (Boys)",
                photo: product01
            },
            { title: "Hoodie (Mens)", photo: product08 },
            { title: "Hoodie (Girls)", photo: product08 },
            { title: "Hoodie (Ladies)", photo: product08 },
        ],
        photo: product01,
    },


    // { title: "Romper", photo: product08 },

    // { title: "Keeper", photo: product08 },

    {
        title: "Tank Top",
        subCategory: [
            {
                title: "Tank Top (Boys)",
                photo: product08
            },
            { title: "Tank Top (Mens)", photo: product08 },
            { title: "Tank Top (Girls)", photo: product08 },
            { title: "Tank Top (Ladies)", photo: product08 },
        ],
        photo: product11
    },


    // {
    //     title: "Joggers",
    //     subCategory: [
    //         {
    //             title: "Joggers (Boys)",

    //             photo: product07,
    //         },
    //         { title: "Joggers (Mens)", photo: product07 },
    //         { title: "Joggers (Girls)", photo: product07 },
    //         { title: "Joggers (Ladies)", photo: product07 },
    //     ],
    //     photo: product14
    // },

    {
        title: "Cargo Pant",
        subCategory: [
            {
                title: "Cargo Pant (Mens)",

                photo: product07,
            },
            {
                title: "Flared pant (Ladies)",
                photo: product07,
            },
        ],
        photo: product02
    },

    {
        title: "Sweat Shirt",
        subCategory: [
            {
                title: "Sweat Shirt (Boys)",

                photo: product07,
            },
            { title: "Sweat Shirt (Mens)", photo: product07 },
            {
                title: "Sweat Shirt (Girls)",
                photo: product07,
            },
            {
                title: "Sweat Shirt (Ladies)",
                photo: product07,
            },
        ],
        photo: product09
    },

    {
        title: "Boys Set",
        subCategory: [
            {
                title: "Long Pant & Long Sleeve T-Shirt",

                photo: product07,
            },
            {
                title: "Long Pant & Long Sleeve Polo Shirt",
                photo: product07,
            },
            {
                title: "Long Pant & Sweat Shirt",
                photo: product07,
            },
            {
                title: "Short Pant & T-Shirt",
                photo: product07,
            },
        ],
        photo: product13
    },
    {
        title: "Girls Set",
        subCategory: [
            {
                title: "Long Pant & Sweat Shirt",

                photo: product07,
            },
            {
                title: "Long Pant & Long Sleeve Polo Shirt",
                photo: product07,
            },
            {
                title: "Long Pant & Long Sleeve T-Shirt",
                photo: product07,
            },
            {
                title: "Short Pant & T-Shirt",
                photo: product07,
            },
        ],
        photo: product12
    },

    // { title: "Baby Set", photo: product07 },

    // {
    //     title: "Sports",
    //     subCategory: [
    //         {
    //             title: "Sports T-Shirt",
    //             photo: product07,
    //         },
    //         { title: "Sports Polo-Shirt", photo: product07 },
    //         { title: "Sports Trouser", photo: product07 },
    //     ],
    //     photo: product07
    // },

    // {
    //     title: "Activewear",
    //     subCategory: [
    //         {
    //             title: "Activewear (Mens)",

    //             photo: product07,
    //         },
    //         {
    //             title: "Activewear (Ladies)",
    //             photo: product07,
    //         },
    //     ],
    //     photo: product16
    // },
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

export const productCategories = [
    {
        title: "T-Shirt",
        subCategory: [
            { title: "T-Shirt (Boys)", photo: product03 },
            { title: "T-Shirt (Mens)", photo: product08 },
            { title: "T-Shirt (Girls)", photo: product08 },
            { title: "T-Shirt (Ladies)", photo: product08 },
        ],
        photo: product04,
    },
    {
        title: "Polo Shirt",
        subCategory: [
            { title: "Polo Shirt (Boys)", photo: product08 },
            { title: "Polo Shirt (Mens)", photo: product08 },
            { title: "Polo Shirt (Girls)", photo: product08 },
            { title: "Polo Shirt (Ladies)", photo: product08 },
        ],
        photo: product05,
    },
    {
        title: "Long Pant",
        subCategory: [
            { title: "Long Pant (Boys)", photo: product08 },
            { title: "Long Pant (Mens)", photo: product08 },
            { title: "Long Pant (Girls)", photo: product08 },
            { title: "Long Pant (Ladies)", photo: product08 },
        ],
        photo: product10,
    },

    // {
    //     title: "Leggings",
    //     subCategory: [
    //         { title: "Leggings (Girls)", photo: product06 },
    //         { title: "Leggings (Ladies)", photo: product08 },
    //     ],
    //     photo: product15,
    // },

    // {
    //     title: "Shorts",
    //     subCategory: [
    //         {
    //             title: "Shorts (Boys)",
    //             photo: product08
    //         },
    //         { title: "Shorts (Mens)", photo: product08 },
    //         { title: "Sexy Shorts", photo: product08 },
    //     ],
    //     photo: product07,
    // },

    {
        title: "Hoodie",
        subCategory: [
            {
                title: "Hoodie (Boys)",
                photo: product01
            },
            { title: "Hoodie (Mens)", photo: product08 },
            { title: "Hoodie (Girls)", photo: product08 },
            { title: "Hoodie (Ladies)", photo: product08 },
        ],
        photo: product01,
    },


    // { title: "Romper", photo: product08 },

    // { title: "Keeper", photo: product08 },

    {
        title: "Tank Top",
        subCategory: [
            {
                title: "Tank Top (Boys)",
                photo: product08
            },
            { title: "Tank Top (Mens)", photo: product08 },
            { title: "Tank Top (Girls)", photo: product08 },
            { title: "Tank Top (Ladies)", photo: product08 },
        ],
        photo: product11
    },


    // {
    //     title: "Joggers",
    //     subCategory: [
    //         {
    //             title: "Joggers (Boys)",

    //             photo: product07,
    //         },
    //         { title: "Joggers (Mens)", photo: product07 },
    //         { title: "Joggers (Girls)", photo: product07 },
    //         { title: "Joggers (Ladies)", photo: product07 },
    //     ],
    //     photo: product14
    // },

    {
        title: "Cargo Pant",
        subCategory: [
            {
                title: "Cargo Pant (Mens)",

                photo: product07,
            },
            {
                title: "Flared pant (Ladies)",
                photo: product07,
            },
        ],
        photo: product02
    },

    {
        title: "Sweat Shirt",
        subCategory: [
            {
                title: "Sweat Shirt (Boys)",

                photo: product07,
            },
            { title: "Sweat Shirt (Mens)", photo: product07 },
            {
                title: "Sweat Shirt (Girls)",
                photo: product07,
            },
            {
                title: "Sweat Shirt (Ladies)",
                photo: product07,
            },
        ],
        photo: product09
    },

    {
        title: "Boys Set",
        subCategory: [
            {
                title: "Long Pant & Long Sleeve T-Shirt",

                photo: product07,
            },
            {
                title: "Long Pant & Long Sleeve Polo Shirt",
                photo: product07,
            },
            {
                title: "Long Pant & Sweat Shirt",
                photo: product07,
            },
            {
                title: "Short Pant & T-Shirt",
                photo: product07,
            },
        ],
        photo: product13
    },
    {
        title: "Girls Set",
        subCategory: [
            {
                title: "Long Pant & Sweat Shirt",

                photo: product07,
            },
            {
                title: "Long Pant & Long Sleeve Polo Shirt",
                photo: product07,
            },
            {
                title: "Long Pant & Long Sleeve T-Shirt",
                photo: product07,
            },
            {
                title: "Short Pant & T-Shirt",
                photo: product07,
            },
        ],
        photo: product12
    },

    // { title: "Baby Set", photo: product07 },

    // {
    //     title: "Sports",
    //     subCategory: [
    //         {
    //             title: "Sports T-Shirt",
    //             photo: product07,
    //         },
    //         { title: "Sports Polo-Shirt", photo: product07 },
    //         { title: "Sports Trouser", photo: product07 },
    //     ],
    //     photo: product07
    // },

    // {
    //     title: "Activewear",
    //     subCategory: [
    //         {
    //             title: "Activewear (Mens)",

    //             photo: product07,
    //         },
    //         {
    //             title: "Activewear (Ladies)",
    //             photo: product07,
    //         },
    //     ],
    //     photo: product16
    // },
];

export const faqData = [
    {
        question: "What is merchandising in the textile industry?",
        answer: "Merchandising in the textile industry involves selecting, planning, and promoting products to ensure that they meet consumer demand while maximizing sales and profit. It includes activities such as sourcing raw materials, product design, pricing, and managing inventory."
    },
    {
        question: "How does product development work in merchandising?",
        answer: "Product development in merchandising involves designing and creating new products based on market trends and consumer needs. It includes choosing fabrics, colors, styles, and patterns, and ensuring that the final product aligns with the brand's image and target market."
    },
    {
        question: "What is the role of fabric sourcing in merchandising?",
        answer: "Fabric sourcing is a crucial part of merchandising. It involves finding the right fabrics that fit the product design, budget, and quality standards. This step can involve working with suppliers and manufacturers to ensure fabric availability and timely delivery."
    },
    {
        question: "How are pricing strategies determined in merchandising?",
        answer: "Pricing strategies are determined based on several factors, including production costs, competitive pricing, target market, and perceived value. Merchandisers analyze these factors to set a price that maximizes profit while staying competitive and attractive to customers."
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
        name: "Person 1 ",
        role: "CEO & Founder",
        image: product05,
        bio: "Aminul brings over 15 years of expertise in knit garment production and strategic leadership.",
    },
    {
        name: "Person 2",
        role: "Head of Design",
        image: product08,
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
]

export const howWeHire = [
    "Submit Application 📩",
    "HR Review 📋",
    "Interview Rounds 🎤",
    "Job Offer 💼",
    "Onboarding 🏆",
]

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
// export const testimonials: Testimonial[] = [
//     {
//         name: "Jane Smith",
//         title: "Procurement Head",
//         company: "FashionWorks",
//         photo: review2,
//         text: "Working with your team was a game-changer. The fabric quality and delivery speed were unmatched.",
//     },
//     {
//         name: "John Doe",
//         title: "CEO",
//         company: "EcoWear",
//         photo: review2,
//         text: "We’ve seen a 30% efficiency increase since we started our partnership.",
//     },
// ];

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
]

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