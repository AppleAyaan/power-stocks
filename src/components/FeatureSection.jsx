import { features } from "../constants";

const FeatureSection = () => {
  return (
    <section id="features" className="py-10">
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Invest in{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            Stocks.
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-10">
      <a
        href="#"
        className="bg-gradient-to-r from-blue-100 to-blue-300 text-black py-3 px-12 mx-3 rounded-md"
      >
        Click to see all features!
      </a>

      </div>
    </div>
    </section>
  );
};

export default FeatureSection;