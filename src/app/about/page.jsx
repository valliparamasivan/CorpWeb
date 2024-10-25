import dynamic from 'next/dynamic';
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));

const About = () => {
  return <AboutSection/>
};
export default About;
