import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { JobsList } from '../components/sections/JobsList';

export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <JobsList />
    </>
  );
};
