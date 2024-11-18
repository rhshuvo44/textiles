import image from "@/assets/image/weDoIt.jpg";
import Image from "next/image";

const WeDo = () => {
  return (
    <div className="px-5 md:px-10 pb-5">
      <div className="card lg:card-side bg-base-100 rounded-none shadow-xl">
        <figure className="w-full md:w-1/2">
          <Image src={image} alt="Album" height={500} width={500} />
        </figure>
        <div className="card-body w-full md:w-1/2  md:px-20">
          <h2 className="text-5xl font-bold text-[#00A9E9]">How we do it</h2>
          <p className="mt-10">
            Textile engages and catalyzes the textile industry across the supply
            chain through partnerships and collaborations, building knowledge
            and capacity to inform and educate. We further leverage our
            influence to create action, change and collective impact.
            <br />
            <br />
            Textile inspires and equips people to accelerate sustainable
            practices in the textile value chain. We focus on minimizing the
            harmful impacts of the global textile industry and maximizing its
            positive effects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
