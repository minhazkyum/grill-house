const LiveMusic = () => {
  return (
    <div className="hero h-[650px] bg-gray-600">
      <div className="hero-content flex-col ">
        <div className="flex w-1/2 justify-around items-center ">
          <div className="w-1/2 p-5">
            <h1 className="text-3xl text-black p-4 rounded bg-yellow-500 font-bold">
              Our Method
            </h1>
            <p className="py-6 border-4 p-4 border-yellow-500 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="w-1/2">
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi. Provident cupiditate
              voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id
              nisi.
            </p>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center gap-4">
          <img
            src="https://i.ibb.co/9qcQQj2/beef.jpg"
            className=" max-w-sm rounded-lg "
          />
          <img
            src="https://i.ibb.co/8bd9Kw2/banner2.jpg"
            className=" max-w-sm  rounded-lg "
          />
          <img
            src="https://i.ibb.co/5WG3J33/pork.jpg"
            className=" max-w-sm rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default LiveMusic;
