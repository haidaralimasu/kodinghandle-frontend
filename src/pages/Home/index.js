import React from "react";
import { Helmet } from "react-helmet";
import { Hero, FeatureCard } from "../../components";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Koding Handle | Home</title>
      </Helmet>

      <Hero />
      <FeatureCard />
    </div>
  );
};

export default Home;
