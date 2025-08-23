"use client";
import PolymorphicButton from "@/components/UI/PolymorphicButton";
import SectionHeader from "@/components/UI/SectionHeader";
import { jobs } from "@/db/data";
import { FaArrowRight } from "react-icons/fa";

const JobOpenings = () => {
  return (
    <section
      className="px-4 md:px-10 py-10 bg-base-100 text-base-content"
      id="job-openings"
    >
      <SectionHeader
        title="Current Job Openings"
        subtitle="Join our team and make an impact"
      />

      <div className="grid gap-6">
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
              <PolymorphicButton
                href="#"
                text="Apply Now"
                ariaLabel={`Apply for ${job.title}`}
                variant="solid"
                color="primary"
                icon={FaArrowRight}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobOpenings;
