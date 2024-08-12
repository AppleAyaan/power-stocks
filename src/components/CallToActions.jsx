import { CheckCircle2 } from "lucide-react";
import { callToActionOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        VIP List
      </h2>
      <div className="flex flex-wrap">
        {callToActionOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
              {option.title === "Join the DEV TEAM" ? (
                  <>
                    Join the{" "}
                    <span className="bg-gradient-to-r from-blue-500 to-blue-400 text-transparent bg-clip-text">
                      DEV TEAM
                    </span>
                  </>
                ) : (
                  option.title
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 className="text-green-500" />
                    <span className="ml-2">
                      {feature === "Power Stocks VIP Badge" ? (
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
                          {feature}
                        </span>
                      ) : (
                        feature
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-green-900 border border-green-700 rounded-lg transition duration-200"
              >
                Join Now!
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
