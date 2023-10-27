
import './App.css';
import CurseAbout from './components/CurseAbout';
import CurseHeader from './components/CurseHeader';
import Likes from './components/Likes';
import About from './components/about';
import StephenKing from './components/header';


function App() {
  return (
    <>
        <StephenKing/>
        <About/>

        <CurseHeader/>
        <CurseAbout/>

        <Likes/>
    </>
  );
}

export default App;
