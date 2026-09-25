import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ZipChecker } from './components/ZipChecker';
import { Services } from './components/Services';
import { TheDifference } from './components/TheDifference';
import { WhatWeDo } from './components/WhatWeDo';
import { TypesOfGuidance } from './components/TypesOfGuidance';
import { AssistanceSteps } from './components/AssistanceSteps';
import { WhatWeDoNotDo } from './components/WhatWeDoNotDo';
import { WhyIndependent } from './components/WhyIndependent';
import { FaqSection } from './components/FaqSection';
import { PrivacySummary } from './components/PrivacySummary';
import { Footer } from './components/Footer';
import { ZipModal } from './components/ZipModal';

export function App() {
  const [modalState, setModalState] = useState({ isOpen: false, zip: '' });

  const handleValidZip = (zip) => {
    setModalState({ isOpen: true, zip });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, zip: '' });
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <Header />

      <main id="main">
        <Hero />

        {/* ZIP CHECKER 1 */}
        <ZipChecker onValidZip={handleValidZip} />

        {/* SERVICES */}
        <Services />

        {/* THE DIFFERENCE */}
        <TheDifference />

        {/* ZIP CHECKER 2 */}
        <div style={{ margin: '30px 0' }}>
          <ZipChecker
            onValidZip={handleValidZip}
            title="Check coverage in your neighborhood"
            subtitle="Fast assistance available across all 50 states"
          />
        </div>

        {/* WHAT WE DO */}
        <WhatWeDo />

        {/* TYPES OF GUIDANCE */}
        <TypesOfGuidance />

        {/* HOW ASSISTANCE WORKS */}
        <AssistanceSteps />

        {/* WHAT WE DO NOT DO */}
        <WhatWeDoNotDo />

        {/* WHY INDEPENDENT SUPPORT MATTERS */}
        <WhyIndependent />

        {/* FAQ */}
        <FaqSection />

        {/* PRIVACY POLICY SUMMARY */}
        <PrivacySummary />
      </main>

      <Footer />

      {/* ZIP AVAILABILITY MODAL */}
      <ZipModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        zipCode={modalState.zip}
      />
    </>
  );
}

export default App;
