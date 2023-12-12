import Banner from "../../Compo/Banner/Banner";
import SecondBanner from "../../Compo/Banner/SecondBanner";
import ThirdBanner from "../../Compo/Banner/ThirdBanner";
import LiveMusic from "../../Compo/LiveMusic";
import Menu from "../../Compo/Menu/Menu";
import Method from "../../Compo/Method/Method";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Menu></Menu>
      <SecondBanner></SecondBanner>
      <ThirdBanner></ThirdBanner>
      <Method></Method>
      <LiveMusic></LiveMusic>
    </div>
  );
};

export default Home;
