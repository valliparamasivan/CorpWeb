'use client'
import React, { useRef } from 'react';


import dynamic from 'next/dynamic';

const TrainingHero = dynamic(() => import('@/components/sections/TrainingHero'));
const TrainingContact = dynamic(() => import('@/components/sections/TrainingContact'));
const TrainingChoose = dynamic(() => import('@/components/sections/TrainingChoose'));
const TrainingCard = dynamic(() => import('@/components/sections/Training'));

const Training = () => {
  
  const contactSectionRef = useRef(null);

  // Function to scroll to the contact section
  const scrollToContact = () => {
    contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <TrainingHero onContactClick={scrollToContact}/>
      <TrainingCard  onContactClick={scrollToContact}/>
      <TrainingChoose />
      {/* <TrainingContact /> */}
      <div ref={contactSectionRef}>
        <TrainingContact />
      </div>
    </>
  );
};

export default Training;

