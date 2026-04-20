import { useEffect } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner.jsx'
import TrustedSection from './components/TrustedSection.jsx'
import JourneySection from './components/JourneySection.jsx'
import StudentWins from './components/StudentWins.jsx'
import AchieversSection from './components/AchieversSection.jsx'
import WorkshopLanding from './components/WorkshopLanding.jsx'
import WorkshopSchedule from './components/WorkshopSchedule.jsx'
import RiskFreeGuarantee from './components/RiskFreeGuarantee.jsx'
import EasySteps from './components/EasySteps.jsx'
import FAQAccordion from './components/FAQAccordion.jsx'
import Footer from './components/Footer.jsx'
import { trackViewContent } from './utils/fbEvents.js'

function App() {
  useEffect(() => {
    // FB ViewContent — fired once when the landing page is first viewed
    trackViewContent();
  }, []);

  return (
    <>
   <PromoBanner />
   <WorkshopLanding />
   <TrustedSection />
   <JourneySection />
   <StudentWins />
   <AchieversSection />
   <WorkshopSchedule />
   <RiskFreeGuarantee />
   <EasySteps />
   <FAQAccordion />
   <Footer />
    </>
  )
}

export default App
