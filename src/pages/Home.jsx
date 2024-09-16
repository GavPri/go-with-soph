import React from "react";

const Home = () => {
  return (
    <div className="h-fit max-w-screen bg-body">
      {/* hero-image */}
      <img
        src="/images/nevadaFalls.JPG"
        alt="Sophie at the top of nevada falls"
        className="max-w-screen min-h-screen object-cover mb-10"
      />
      {/* Latest from the blog */}
      <div className="w-screen h-screen bg-body font-qs text-text">
        <h2 className="text-2xl text-center pb-4 capitalize border-b-2 border-accentPrimary mx-auto w-fit">
          Latest from the blog
        </h2>
      </div>
      {/* Most popular from the blog */}
    </div>
  );
};

export default Home;
