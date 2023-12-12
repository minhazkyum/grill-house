const Menu = () => {
  return (
    <div className="bg-gray-600">
      <h1 className="text-5xl text-center text-white mb-3">Menu</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        <div className="card bg-gray-600 shadow-xl">
          <figure>
            <img src=" https://i.ibb.co/gVP3d3X/pizza.jpg" alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title  bg-yellow-500 p-3 rounded">CHICKEN</h2>
            <div className="border-4 border-yellow-400 p-3">
              <p className="text-2xl text-white">Chicken with Salad 600/- </p>
              <p className="text-2xl text-white">The Gold Chicken 1100/- </p>
              <p className="text-2xl text-white">Chicken white sauce 800/- </p>
            </div>
          </div>
          <div className="card-body ">
            <h2 className="card-title  bg-yellow-500 p-3 rounded">SLIDES</h2>
            <div className="border-4 border-yellow-400 p-3">
              <p className="text-2xl text-white">Chicken with Salad 600/- </p>
              <p className="text-2xl text-white">The Gold Chicken 1100/- </p>
              <p className="text-2xl text-white">Chicken white sauce 800/- </p>
            </div>
          </div>
        </div>
        <div className="card bg-gray-600 shadow-xl">
          <figure>
            <img src=" https://i.ibb.co/9qcQQj2/beef.jpg " alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title  bg-yellow-500 p-3 rounded">BEEF</h2>
            <div className="border-4 border-yellow-400 p-3">
              <p className="text-2xl text-white">BEEF with Salad 600/- </p>
              <p className="text-2xl text-white">The Gold BEEF 1100/- </p>
              <p className="text-2xl text-white">BEEF white sauce 800/- </p>
            </div>
          </div>
          <div className="card-body ">
            <h2 className="card-title  bg-yellow-500 p-3 rounded">SLIDES</h2>
            <div className="border-4 border-yellow-400 p-3">
              <p className="text-2xl text-white">Chicken with Salad 600/- </p>
              <p className="text-2xl text-white">The Gold Chicken 1100/- </p>
              <p className="text-2xl text-white">Chicken white sauce 800/- </p>
            </div>
          </div>
        </div>
        <div className="card bg-gray-600 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/5WG3J33/pork.jpg" alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title  bg-yellow-500 p-3 rounded">PORK</h2>
            <div className="border-4 border-yellow-400 p-3">
              <p className="text-2xl text-white">Chicken with Salad 600/- </p>
              <p className="text-2xl text-white">The Gold Chicken 1100/- </p>
              <p className="text-2xl text-white">Chicken white sauce 800/- </p>
            </div>
          </div>
          <div className="card-body ">
            <h2 className="card-title  bg-yellow-500 p-3 rounded">SLIDES</h2>
            <div className="border-4 border-yellow-400 p-3">
              <p className="text-2xl text-white">Chicken with Salad 600/- </p>
              <p className="text-2xl text-white">The Gold Chicken 1100/- </p>
              <p className="text-2xl text-white">Chicken white sauce 800/- </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
