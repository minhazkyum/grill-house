const Banner = () => {
  return (
    <div className="carousel w-full lg:h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/9hJnMx7/banner1.jpg"
          className=" rounded-xl w-full"
        />
        <div className="absolute  rounded-xl  text-white flex space-x-3 items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-12 w-full lg:w-1/2 space-y-5">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-yellow-500">
              OPENING PARTY
            </h1>
            <p className="lg:text-2xl">06/20/2023 - 7 P.M</p>
            <p className="lg:text-2xl">Food-Music-Friend-Fun</p>

            <button className="btn text-white btn-outline btn-warning">
              Make Reservation
            </button>
          </div>
        </div>
        <div className="absolute  rounded-xl  flex space-x-3 justify-between transform -translate-y-1/2 bottom-3 right-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/tH4dRbn/banner2.webp"
          className=" rounded-xl w-full"
        />
        <div className="absolute  rounded-xl  text-white flex space-x-3 items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-12 w-full lg:w-1/2 space-y-5">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-yellow-500">
              OPENING PARTY
            </h1>
            <p className="lg:text-2xl">06/20/2023 - 7 P.M</p>
            <p className="lg:text-2xl">Food-Music-Friend-Fun</p>

            <button className="btn text-white btn-outline btn-warning">
              Make Reservation
            </button>
          </div>
        </div>
        <div className="absolute  rounded-xl  flex space-x-3 justify-between transform -translate-y-1/2 bottom-3 right-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/BTm0rtb/banner3.jpg"
          className=" rounded-xl w-full"
        />
        <div className="absolute  rounded-xl  text-white flex space-x-3 items-center left-0 top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="ml-12 w-full lg:w-1/2 space-y-5">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-yellow-500">
              OPENING PARTY
            </h1>
            <p className="lg:text-2xl">06/20/2023 - 7 P.M</p>
            <p className="lg:text-2xl">Food-Music-Friend-Fun</p>

            <button className="btn text-white btn-outline btn-warning">
              Make Reservation
            </button>
          </div>
        </div>
        <div className="absolute flex space-x-3 justify-between transform -translate-y-1/2 bottom-3 right-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
