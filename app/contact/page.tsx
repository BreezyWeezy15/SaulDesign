export default function ShowContact() {
  return (
    <div
      className="flex flex-row justify-between mt-40 px-50  mb-15"
      style={{ backgroundImage: "url('./sample_bg2.png')" }}
    >
      <div className="flex flex-col gap-5">
        <h4 className="text-6xl font-bold text-white">
          Got a project in <br />
          <span className="text-6xl font-bold text-[#00ADB5]">mind?</span>
        </h4>
        <img
          src="./img.png"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex flex-row justify-between gap-10">
          <div className="flex flex-col gap-2">
            <h4>Your Name</h4>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#393E46] rounded-2xl px-5 py-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h4>Your Email</h4>
            <input
              type="text"
              placeholder="Email Address"
              className="bg-[#393E46] rounded-2xl px-5 py-2 "
            />
          </div>
        </div>

        <div className="flex flex-col mt-10">
          <h4>Your Message</h4>
          <input
            type="text"
            placeholder="Full Name"
            className="bg-[#393E46] rounded-2xl px-5 py-2 min-w-lg h-[200]"
          />
        </div>

        <button className="bg-green-900 text-white font-semibold px-10 py-2 rounded-2xl mt-5 w-fit">Send Message</button>
      </div>
    </div>
  );
}
