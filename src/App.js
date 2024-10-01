import './App.css';
import AmazingFeatures from './components/AmazingFeatures';
import Header from './components/Header';
import Hero from './components/Hero';
import MotionTracking from './components/MotionTracking';
import OurPlatform from './components/OurPlatform';
import ReportingAnalytics from './components/ReportingAnalytics';
import YourWorkout from './components/YourWorkout';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <YourWorkout />
      <AmazingFeatures />
      <MotionTracking />
      <ReportingAnalytics />
      <OurPlatform />
    </>
  );
}

export default App;
