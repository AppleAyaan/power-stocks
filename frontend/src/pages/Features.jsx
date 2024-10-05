import React from 'react';

const Features = () => {
    return(
    <div className="flex flex-col justify-items-center items-center h-screen bg-neutral-900 text-white -mt-8">
        <h1 className="text-5xl font-semibold mb-4">Full Features List</h1>
        <p className="text-lg">
            Link to the Notion Board:{" "}
        <a
        href="https://notion.so/ComingSoon"
        className="text-blue-500 underline hover:text-blue-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click Here to go to Notion
      </a>
    </p>
    </div>
    );
};

export default Features;