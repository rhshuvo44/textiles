"use client";

import { useForm } from "react-hook-form";

const styles = [
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

const fabrics = [
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
const yarns = [
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

type QuoteFormData = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  GSM: string;
  quantity: number;
  category?: string;
  fabric?: string;
  yarn?: string;
  ratio?: number;
  upload?: FileList;
};

const RequestAQuote = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<QuoteFormData>();

  const onSubmit = async (data: QuoteFormData) => {
    console.log("Form Data Submitted:", data);
    reset();
  };

  return (
    <section className="md:p-10 p-5  text-center" id="quote">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
        Request a Quote
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full text-black"
            />
            {errors.name && (
              <p className="text-red-500 text-left">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("company")}
              type="text"
              placeholder="Company"
              className="input input-bordered w-full text-black"
            />
            {errors.company && (
              <p className="text-red-500 text-left">{errors.company.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              className="input input-bordered w-full text-black"
            />
            {errors.email && (
              <p className="text-red-500 text-left">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              placeholder="Phone"
              className="input input-bordered w-full text-black"
            />
            {errors.phone && (
              <p className="text-red-500 text-left">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("whatsapp")}
              type="tel"
              placeholder="WhatsApp (Optional)"
              className="input input-bordered w-full text-black"
            />
            {errors.whatsapp && (
              <p className="text-red-500 text-left">
                {errors.whatsapp.message}
              </p>
            )}
          </div>

          {/* Style Dropdown */}
          <div>
            <select
              {...register("category")}
              className="select select-bordered w-full text-black"
            >
              <option value="">Select Product Category</option>
              {styles.map((style, i) => (
                <option key={i} value={style}>
                  {style}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              {...register("quantity", { required: "Quantity is required" })}
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full text-black"
            />
            {errors.quantity && (
              <p className="text-red-500 text-left">
                {errors.quantity.message}
              </p>
            )}
          </div>
          {/* Fabric Dropdown */}
          <div>
            <select
              {...register("fabric")}
              className="select select-bordered w-full text-black"
            >
              <option value="">Select Fabric Type</option>
              {fabrics.map((fabric, i) => (
                <option key={i} value={fabric}>
                  {fabric}
                </option>
              ))}
            </select>
          </div>
          {/* Yarn Dropdown */}
          <div>
            <select
              {...register("yarn")}
              className="select select-bordered w-full text-black"
            >
              <option value="">Select Yarn Type</option>
              {yarns.map((yarn, i) => (
                <option key={i} value={yarn}>
                  {yarn}
                </option>
              ))}
            </select>
          </div>
          <div>
            <input
              {...register("ratio", { required: "Ratio is required" })}
              type="number"
              placeholder="Ratio"
              className="input input-bordered w-full text-black"
            />
            {errors.ratio && (
              <p className="text-red-500 text-left">{errors.ratio.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("GSM", { required: "GSM is required" })}
              type="number"
              placeholder="GSM"
              className="input input-bordered w-full text-black"
            />
            {errors.GSM && (
              <p className="text-red-500 text-left">{errors.GSM.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-info text-white w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-200 mt-2">
            Your request was sent successfully!
          </p>
        )}
      </form>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801788577329"
        className="fixed bottom-6 right-6 btn btn-success rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </section>
  );
};

export default RequestAQuote;
