import { Fragment } from "react";
import dynamic from "next/dynamic";
const EngineeringService = dynamic(() => import('@/components/sections/EngineeringService'));
const EngineeringChooseUs = dynamic(() => import('@/components/sections/EngineeringChooseUs'));
const IndustrieService = dynamic(() => import('@/components/sections/industrieService'));
const DetailingSection =  dynamic(() => import('@/components/sections/DetailingSection'));
const EngineeringHero=  dynamic(() => import('@/components/sections/EngineeringHero'));

const Engineering = () => {
  return (
    <Fragment>
    
    <EngineeringHero/>
    <EngineeringChooseUs/>
    <EngineeringService/>
    <DetailingSection/>
     <IndustrieService/> 
    
    </Fragment>
  );
}

export default Engineering;

