import { steps } from "@/db/data";

const MerchandisingProcess = () => {
  return (
    <section
      className="p-5 md:p-10"
      aria-label="Merchandising process steps"
      data-aos="fade-up"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
        Our Process
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex items-center space-x-2">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-full text-lg font-bold mb-2">
                {step.icon}
              </div>
              <p className="font-medium">{step.title}</p>
            </div>
            {idx !== steps.length - 1 && (
              <div className="hidden md:flex w-20 h-1 bg-primary mx-2 relative">
                <div className="absolute right-0 -top-1 w-3 h-3 border-t-2 border-r-2 border-primary rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MerchandisingProcess;
