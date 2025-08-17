"use client";
import { jobs } from "@/db/data";

const JobOpenings = () => {
  return (
    <section
      className="px-4 md:px-12 py-10 bg-base-100 text-base-content"
      id="job-openings"
    >
      <h2
        className="text-4xl sm:text-5xl font-bold text-center mb-12"
        data-aos="fade-up"
      >
        Current Opportunities
      </h2>

      <div className="grid gap-6 max-w-5xl mx-auto">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="card shadow-md rounded-lg"
            data-aos="fade-up"
            data-aos-delay={`${idx * 100}`}
          >
            <div className="card-body flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="card-title text-lg md:text-xl">{job.title}</h3>
                <p className="text-gray-600">
                  {job.department} • {job.location}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Deadline: <time dateTime={job.deadline}>{job.deadline}</time>
                </p>
              </div>
              <button
                className="btn btn-info text-white whitespace-nowrap"
                aria-label={`Apply for ${job.title}`}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;
