import logo from './logo.svg';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './styles/App.css';
import './styles/Typography.css';
import 'primeflex/primeflex.css';
import middleHeart from './images/middle-heart.svg';
import { FileTextIcon, EnvelopeIcon, ChatDotsIcon } from '@phosphor-icons/react';
import IconBtn from './components/iconBtn';
import Btn from './components/btn';
import { Button } from 'primereact/button';
import NavBtn from './components/navBtn';

function App() {
  return (
    <div>
      <header className='landing-bg h-screen'>
        <div className ='grid w-full h-full'>
          <div className='col txt-display'>CREATE</div>
          <div className='col'></div>
          <div className='col flex align-items-end'>
            <a href="https://drive.google.com/file/d/1N1qhDShEBVqQxlqIHm40uqIJ5Pq6E_-u/view?usp=sharing" target="_blank" title='Check out my CV'>
              <IconBtn>
                <FileTextIcon size={40} weight="fill" />
              </IconBtn>
            </a>
          </div>
        </div>

         <div className ='grid w-full h-full'>
          <div className='col flex justify-content-center align-items-center'>
            <a href="mailto:laufoonxuan@gmail.com" target="_blank" title='Email me!'>
              <IconBtn>
                <EnvelopeIcon size={40} weight="fill" />
              </IconBtn>
            </a>
          </div>
          <div className='col'>
            <img src={middleHeart} alt="Heart Image" className='w-full h-full'></img>
          </div>
          <div className='col'></div>
        </div>

         <div className ='grid w-full h-full'>
          <div className='col'></div>
          <div className='col flex justify-content-end'>
            <a href="https://wa.me/60176685138" target="_blank" title='Open to Chat :)'>
              <IconBtn>
                <ChatDotsIcon size={40} weight="fill" />
              </IconBtn>
            </a>
          </div>
          <div className='col m-0 p-0 txt-display flex justify-content-end align-items-end'>
            <div className='w-auto h-full align-content-end display-gold'>DESIGN</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
