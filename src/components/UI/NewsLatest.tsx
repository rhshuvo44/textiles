const NewsLatest = () => {
  return (
    <div className=" py-5 md:py-10">
      <div className=" flex flex-col xl:flex-row  p-5 md:p-8 xl:py-14 text-gray-500 bg-gray-200 ">
        <div className="w-full mb-6 xl:mb-0" data-aos="fade-up">
          <div className="mb-4 text-gray-900 text-3xl font-extrabold">
            Join 2,000+ subscribers
          </div>

          <div className="text-lg">
            Stay in the loop with everything you need to know.
          </div>
        </div>

        <div className="w-full" data-aos="fade-up">
          <div className="flex flex-col justify-end sm:flex-row gap-3 w-full">
            <input
              type="text"
              placeholder="Enter your email"
              className="sm:w-2/4 h-12 p-3 text-gray-900 border border-solid border-gray-300 rounded-lg shadow"
            />

            <button
              type="submit"
              className="sm:w-1/4 h-12 btn text-white btn-info rounded-lg shadow transition-all duration-300 ease-in-out hover:btn-info hover:text-white"
            >
              Subscribe
            </button>
          </div>

          <div className="mt-3 text-sm sm:text-center">
            We care about your data in our{" "}
            <u className="cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-700">
              privacy policy
            </u>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatest;
