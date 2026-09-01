import logo from './logo.svg';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './styles/App.css';
import './styles/Typography.css';
import 'primeflex/primeflex.css';
import IconBtn from './components/iconBtn';
import Btn from './components/btn';
import { Button } from 'primereact/button';
import NavBtn from './components/navBtn';

function App() {
  return (
    <div className="landing-bg">
      {/* <header className="landing-bg h-full">
        <img src={logo} className="App-logo" alt="logo" />
        <Button className="icon-btn">Hello</Button>
        <div className='project-card'>
          <div className='h-4rem'>Test</div>
          <div className='tag txt-tag'>Tag</div>
          <div className='project-content'>Test</div>
        </div>
      </header> */}

      <div className='App-header'>
        <IconBtn></IconBtn>
        <Btn></Btn>
        <NavBtn></NavBtn>
      </div>

    </div>
  );
}

export default App;
