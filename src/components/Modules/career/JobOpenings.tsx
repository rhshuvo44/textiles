"use client";
import { jobs } from "@/db/data";

// interface JobListProps {
//   jobs: Job[];
// }
const JobOpenings = () => {
  // const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  return (
    <section className="px-4 md:px-12" id="job-openings">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8">
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
              <button
                className="btn btn-info text-white"
                // onClick={() => setSelectedJob(job)}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <Modal isOpen={!!selectedJob} onClose={() => setSelectedJob(null)}>
        {selectedJob && (
          <div className="bg-base-100 border rounded-lg overflow-hidden p-4">
            <h2 className="text-xl font-semibold mb-4">
              Apply for {selectedJob.title}
            </h2>
            <p className="mb-2">
              <strong>Department:</strong> {selectedJob.department}
            </p>
            <p className="mb-2">
              <strong>Location:</strong> {selectedJob.location}
            </p>
            <p className="mb-4">
              <strong>Deadline:</strong> {selectedJob.deadline}
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Your Message or Cover Letter"
              />
              <button className="btn btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        )}
      </Modal> */}
    </section>
  );
};

export default JobOpenings;
