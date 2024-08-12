import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const MainSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      <span className="bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text mr-4">
          {" "}
          Stock 
        </span>
        Investment Simulator
        <br />
        <span className="bg-gradient-to-r from-green-300 to-green-700 text-transparent bg-clip-text">
          {" "}
          but with a twist.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      <span className="text-white mx-1">Have you ever wished for stock trading to be more thrilling and dynamic?</span>
       Introducing 
       <span className="bg-gradient-to-r from-green-300 to-green-700 text-transparent bg-clip-text mr-4">
          {" "}
          Power Stocks
          <br /> 
        </span>
        <span className="text-white mx-1">where investing meets excitement!</span> 
        With a bit of 
        <span className="bg-gradient-to-r from-yellow-300 to-yellow-700 text-transparent bg-clip-text mr-4">
          {" "}
          luck
          <br /> 
        </span>
       and your 
       <span className="bg-gradient-to-r from-red-300 to-red-700 text-transparent bg-clip-text mx-1">
        gambling
      </span>
      instincts, YOU can be the next 
      <span className="text-white mx-1">Warren Buffett!</span>
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-12 mx-3 rounded-md"
        >
          Join for free
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MainSection;
