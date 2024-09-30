import './App.css';
import AmazingFeatures from './components/AmazingFeatures';
import Header from './components/Header';
import Hero from './components/Hero';
import MotionTracking from './components/MotionTracking';
import YourWorkout from './components/YourWorkout';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <YourWorkout />
      <AmazingFeatures />
      <MotionTracking />
    </>
  );
}

export default App;
