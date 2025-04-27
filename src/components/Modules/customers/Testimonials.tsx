// import { testimonials } from "@/db/data";
// import Image from "next/image";

// const Testimonials = () => {
//   return (
//     <div className="bg-gray-50 md:p-10 p-5">
//       <h2
//         className="text-3xl font-semibold mb-8 text-center"
//         data-aos="fade-up"
//       >
//         Customer Testimonials
//       </h2>
//       <div className="grid md:grid-cols-2 gap-8 " data-aos="fade-up">
//         {testimonials.map((testi, index) => (
//           <div key={index}>
//             <div className="p-6 flex flex-col items-center text-center">
//               <Image
//                 width={300}
//                 height={300}
//                 src={testi.photo}
//                 alt={testi.name}
//                 className="w-16 h-16 rounded-full mb-4"
//               />
//               <p className="italic text-gray-700 mb-4">{testi.text}</p>
//               <h4 className="font-bold">{testi.name}</h4>
//               <span className="text-sm text-gray-500">
//                 {testi.title}, {testi.company}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
