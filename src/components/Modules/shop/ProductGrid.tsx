// import Image from "next/image";

// const ProductGrid = ({setGrid }) => {
//   return (
//     <div className="w-full md:w-3/4">
//       {/* Sort & Grid */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center gap-4">
//           <p className="font-semibold">Sort By:</p>
//           <select className="select select-bordered">
//             <option value="best-selling">Best selling</option>
//             <option value="manual">Featured</option>
//             <option value="title-ascending">Alphabetically, A-Z</option>
//             <option value="title-descending">Alphabetically, Z-A</option>
//             <option value="price-ascending">Price, low to high</option>
//             <option value="price-descending">Price, high to low</option>
//             <option value="created-ascending">Date, old to new</option>
//             <option value="created-descending">Date, new to old</option>
//           </select>
//         </div>
//         <div className="flex items-center gap-4">
//           <p className="font-semibold">21 products</p>
//           <div className="flex gap-2">
//             {["gr4.svg", "gr3.svg", "gr2.svg", "gr.svg"].map((gridImg, index) => (
//               <Image
//                 key={index}
//                 src={`/images/${gridImg}`}
//                 width={30}
//                 height={30}
//                 alt="Grid View"
//                 className="cursor-pointer"
//                 onClick={() => setGrid(3 * (index + 1))}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Products List */}
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-md p-4 rounded-lg"
//           >
//             <Image
//               src={product.images[0]}
//               alt={product.title}
//               width={200}
//               height={200}
//               className="rounded-lg object-cover"
//             />
//             <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
//             <p className="text-sm text-gray-600">{product.description}</p>
//             <p className="font-bold text-lg mt-2">${product.price}</p>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   );
// };

// export default ProductGrid;
