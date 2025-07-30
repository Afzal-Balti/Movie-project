import ImageFooter from "../../assets/Images/imageHf.jpg";
import LogoPic from "../../assets/Images/LogoPic.png";

function Footer() {
  return (
    <div>
      <div className="w-full relative mt-30 ">
        <img src={ImageFooter} className="w-full h-150 "></img>

        <div className="w-full justify-items-center  md:py-20 text-center  absolute inset-0 ">
          <div className="flex md:flex-row   md:gap-3 gap-3 py-4">
            <img
              src={LogoPic}
              className="md:w-10 w-7 md:h-10 h-8 cursor-pointer rounded-full"
            ></img>
            <p className="md:text-3xl text-white ">tMovies</p>
          </div>
          <div className="md:w-1/3  w-full md:h-80 h-full md:mt-16  text-2xl ">
            <div className="w-full py-5 text-white flex md:flex-row flex-col text-center justify-between">
              <h2>Home</h2>
              <h2>Live</h2>
              <h2>You Must Watch</h2>
            </div>
            <div className="w-full md:py-5 text-white flex md:flex-row flex-col text-center justify-between">
              <h2>Contact Us</h2>
              <h2>FAQ</h2>
              <h2>Recent Release</h2>
            </div>
            <div className="w-full md:py-5 text-white flex md:flex-row flex-col text-center justify-between">
              <h2>Term of services</h2>
              <h2>premium</h2>
              <h2>Top IMDB</h2>
            </div>
            <div className="w-full md:gap-44 text-white flex md:flex-row flex-col  text-center ">
              <h2>About us</h2>
              <h2>Privacy policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
