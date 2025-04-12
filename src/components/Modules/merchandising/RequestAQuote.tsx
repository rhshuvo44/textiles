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

type QuoteFormData = {
  name: string;
  company?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  GSM: string;
  quantity: number;
  style?: string;
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
    <section className="py-16 px-4 bg-info text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full text-black"
        />
        {errors.name && (
          <p className="text-red-200 text-left">{errors.name.message}</p>
        )}

        <input
          {...register("company")}
          type="text"
          placeholder="Company"
          className="input input-bordered w-full text-black"
        />
        {errors.company && (
          <p className="text-red-200 text-left">{errors.company.message}</p>
        )}

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
          <p className="text-red-200 text-left">{errors.email.message}</p>
        )}

        <input
          {...register("phone", { required: "Phone is required" })}
          type="tel"
          placeholder="Phone"
          className="input input-bordered w-full text-black"
        />
        {errors.phone && (
          <p className="text-red-200 text-left">{errors.phone.message}</p>
        )}

        <input
          {...register("whatsapp")}
          type="tel"
          placeholder="WhatsApp (Optional)"
          className="input input-bordered w-full text-black"
        />

        {/* Style Dropdown */}
        <select
          {...register("style")}
          className="select select-bordered w-full text-black"
        >
          <option value="">Select Product Category</option>
          {styles.map((style, i) => (
            <option key={i} value={style}>
              {style}
            </option>
          ))}
        </select>
        <input
          {...register("quantity", { required: "Quantity is required" })}
          type="number"
          placeholder="Quantity"
          className="input input-bordered w-full text-black"
        />
        {errors.quantity && (
          <p className="text-red-200 text-left">{errors.quantity.message}</p>
        )}
        {/* Fabric Dropdown */}
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
        {/* Yarn Dropdown */}
        <select
          {...register("yarn")}
          className="select select-bordered w-full text-black"
        >
          <option value="">Select Yarn Type</option>
          {fabrics.map((yarn, i) => (
            <option key={i} value={yarn}>
              {yarn}
            </option>
          ))}
        </select>
        <input
          {...register("ratio", { required: "Ratio is required" })}
          type="number"
          placeholder="Ratio"
          className="input input-bordered w-full text-black"
        />
        {errors.ratio && (
          <p className="text-red-200 text-left">{errors.ratio.message}</p>
        )}
        <button
          type="submit"
          className="btn btn-neutral w-full"
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
        href="https://wa.me/yourwhatsapplink"
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
