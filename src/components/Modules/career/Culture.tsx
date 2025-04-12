import Image from "next/image";
import img1 from '@/assets/image/1.jpg';
const Culture = () => {
  return (
    <section className="px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our People & Culture
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <Image
                width={300}
                height={300}
                src={img1}
                alt="Employee"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <blockquote className="italic text-sm">
                “Working here has helped me grow professionally and personally.”
              </blockquote>
              <p className="font-semibold mt-2">
                — Fatima, Production Supervisor
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Culture;
