import { Fragment } from "react";
import dynamic from "next/dynamic";
const HeroSection = dynamic(() => import('@/components/sections/HeroSection'));
const SolutionSection = dynamic(() => import('@/components/sections/SolutionSection'));
const ServiceSection = dynamic(() => import('@/components/sections/ServiceSection'));

const Home = () => {
  return (
    <Fragment>
      <HeroSection/>
      <SolutionSection/>
      <ServiceSection/>
    </Fragment>
  );
};
export default Home;