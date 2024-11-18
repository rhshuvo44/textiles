const GetInTouch = () => {
  return (
    <form className="card-body">
      <h2 className="text-2xl font-bold text-center">Get in Touch</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="input input-bordered w-full"
      />
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

      <div className="form-control mt-6">
        <button className="btn btn-info text-white">Submit</button>
      </div>
    </form>
  );
};

export default GetInTouch;
