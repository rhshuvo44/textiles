const ContactForm = () => {
  return (
    <form className="card-body">
      <div className="flex flex-col md:flex-row  gap-3">
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          placeholder="Company"
          className="input input-bordered w-full"
        />
      </div>
      <div className="flex flex-col md:flex-row  gap-3">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="input input-bordered w-full"
        />
      </div>
      <textarea
        rows={4}
        className="textarea textarea-bordered"
        placeholder="How can we help?"
      ></textarea>
      <div className="form-control mt-6">
        <button className="btn btn-info text-white">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
