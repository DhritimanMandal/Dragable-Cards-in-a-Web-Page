import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen ">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-500 text-xl font-[600]">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] text-zinc-900 font-[600] leading-none tracking-[-0.04em;]">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;