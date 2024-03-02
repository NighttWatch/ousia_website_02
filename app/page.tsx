"use client";
import { useEffect } from 'react';
import '../styles/main.scss';
import EntranceSection from './compenents/EntranceSection/EntranceSection';
import Footer from './compenents/Footer/Footer';
import SubscribeSection from './compenents/SubscribeSection/SubscribeSection';
import NavigationBar from './compenents/NavigationBar/NavigationBar';
import ServiceSection from './compenents/ServiceSection/ServiceSection';
import RoadmapSection from './compenents/RoadmapSection/RoadmapSection';
import BlockchainSection from './compenents/BlockchainSection/BlockchainSection';



export default async function Home() {

  return (
    <main className="container">
      <NavigationBar/>
      <EntranceSection/>
      <ServiceSection/>
      <RoadmapSection/>
      <SubscribeSection/>      
      <BlockchainSection/>
      <div className="u-line"></div>
      <Footer/>
    </main>
  );
}
