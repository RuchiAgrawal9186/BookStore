import React, { Fragment } from "react";
import BannerImage from "../../public/BannerImage.jpg";

const Banner = () => {
  return (
    <Fragment>
      <div className="max-w-screen container mx-auto md:px-20 lg:px-20 sm:px-20 flex flex-col md:flex-row gap-10 sm:mt-2">
        <div className="w-full md:w-1/2 md:order-1 order-2 mt-12 md:mt-32">
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
        <div className="w-full md:w-1/2 order-1 ">
          <img src={BannerImage} alt="banner" className="w-full h-96" />
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
