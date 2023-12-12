const ThirdBanner = () => {
  return (
    <div className="hero h-[600px] bg-gray-600">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/gVP3d3X/pizza.jpg"
            className=" rounded-lg "
          />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl text-black p-4 rounded bg-yellow-500 font-bold">
            Special of the Month
          </h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <img src="https://i.ibb.co/5WG3J33/pork.jpg" className="w-1/2" />
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdBanner;
