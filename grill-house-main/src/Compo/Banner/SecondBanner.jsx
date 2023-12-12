const SecondBanner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/tH4dRbn/banner2.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="max-w-md space-y-2">
          <h1 className=" text-yellow-400 text-5xl font-bold">
            Get a <br /> 25% discount <br />
            on your next dinner
          </h1>
          <button className="btn text-white btn-outline btn-warning">
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
