import { jobs } from "@/db/data";

const JobOpenings = () => {
  return (
    <section className="px-4 md:px-12" id="job-openings">
      <h2 className="text-3xl font-bold text-center mb-8">
        Current Opportunities
      </h2>
      {/* <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by job title..."
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Department"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
        />
      </div> */}
      <div className="grid gap-6">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md"
            data-aos="fade-up"
            data-aos-delay={`${idx * 100}`}
          >
            <div className="card-body flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="card-title">{job.title}</h3>
                <p>
                  {job.department} • {job.location}
                </p>
                <p className="text-sm text-gray-500">
                  Deadline: {job.deadline}
                </p>
              </div>
              <button className="btn btn-info text-white">Apply Now</button>
            </div>
          </div>
        ))}

        {/* {[1, 2, 3].map((job) => (
          <div
            key={job}
            className="card bg-base-100 shadow-md"
            data-aos="fade-up"
          >
            <div className="card-body flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="card-title">Textile Designer</h3>
                <p>Design Department • Factory</p>
                <p className="text-sm text-gray-500">Deadline: May 15, 2025</p>
              </div>
              <button className="btn btn-info text-white">Apply Now</button>
            </div>
          </div>
        ))} */}
      </div>
    </section>
  );
};

export default JobOpenings;
