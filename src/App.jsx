import { useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner.jsx'
import Band9ScorerSection from './components/Band9ScorerSection.jsx'
import TrustedSection from './components/TrustedSection.jsx'
import JourneySection from './components/JourneySection.jsx'
import StudentWins from './components/StudentWins.jsx'
import AchieversSection from './components/AchieversSection.jsx'
import WorkshopLanding from './components/WorkshopLanding.jsx'
import WorkshopSchedule from './components/WorkshopSchedule.jsx'
import RiskFreeGuarantee from './components/RiskFreeGuarantee.jsx'
import EasySteps from './components/EasySteps.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQAccordion from './components/FAQAccordion.jsx'
import Footer from './components/Footer.jsx'
// import Mainfooter from "./components/Mainfooter.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <PromoBanner />
   <WorkshopLanding />
   <TrustedSection />
   <JourneySection />
   <StudentWins />
   <AchieversSection />
   <WorkshopSchedule />
   {/* <Band9ScorerSection /> */}
   <RiskFreeGuarantee />
   <EasySteps />
   {/* <Testimonials /> */}
   <FAQAccordion />
   <Footer />
   {/* <Mainfooter/> */}
    </>
  )
}

export default App
