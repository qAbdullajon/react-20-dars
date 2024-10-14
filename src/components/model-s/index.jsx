import React from "react";

const index = () => {
  return (
    <div className="flex gap-8">
      <div>
        <h2 className="text-xl text-center">396 mi</h2>
        <p className="text-[10px] text-center">Range (EPA est.)</p>
      </div>
      <div>
        <h2 className="text-xl text-center">1.99s</h2>
        <p className="text-[10px] text-center">0-60 mph*</p>
      </div>
      <div>
        <h2 className="text-xl text-center">200mph</h2>
        <p className="text-[10px] text-center">Top Speed†</p>
      </div>
      <div>
        <h2 className="text-xl text-center">1,020hp</h2>
        <p className="text-[10px] text-center">Peak Power</p>
      </div>
    </div>
  );
};

export default index;
