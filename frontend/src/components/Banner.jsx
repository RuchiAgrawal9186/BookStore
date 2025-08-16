import React, { Fragment } from "react";

const Banner = () => {
  return (
    <Fragment>
      <div className="max-w-screen container mx-auto md:px-20 sm:px-5 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2  mt-12md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn somthing {""}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              consectetur natus nulla commodi odit accusamus voluptatem quaerat
              molestias voluptas? Possimus.
            </p>
          </div>{" "}
        </div>
        <div className="w-full md:w-1/2">right</div>
      </div>
    </Fragment>
  );
};

export default Banner;
