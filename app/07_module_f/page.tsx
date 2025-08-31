'use client';

import { useOnlineStatus } from '@/hooks/useOnlineStatus';
import Header from '@/components/Header';
import CallToAction from '@/components/CallToAction';
import MapAttractions from '@/components/MapAttractions';
import VideoSection from '@/components/VideoSection';
import EssentialInformation from '@/components/EssentialInformation';
import LatestEvents from '@/components/LatestEvents';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import OfflinePage from '@/components/OfflinePage';
import OtherInformation from '@/components/OtherInformation';

export default function Home() {
  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return <OfflinePage />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CallToAction />
        <MapAttractions />
        <VideoSection />
        <div className="flex flex-col  md:flex-row max-w-7xl mx-auto">

        <EssentialInformation />
        <LatestEvents />
        </div>
        <OtherInformation />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
