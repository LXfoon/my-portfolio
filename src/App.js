import logo from './logo.svg';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import './styles/App.css';
import './styles/Typography.css';
import 'primeflex/primeflex.css';
import middleHeart from './images/middle-heart.svg';
import myPic from './images/NEW_candid_pic.jpeg';
import moonImg from './images/moon.svg';
import flowerImg from './images/flower.svg';
import kirby from './images/kirby.svg';
import { FileTextIcon, EnvelopeIcon, ChatDotsIcon } from '@phosphor-icons/react';
import IconBtn from './components/iconBtn';
import Btn from './components/btn';
import { Button } from 'primereact/button';

function App() {
  return (
    <div>
      <header className='landing-bg h-screen' id='home'>
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

      <div className='sticky top-0 flex z-5 w-full h-5rem nav-menu'>
        <div className='w-full flex align-items-center justify-content-center'>
          <a href='#home' className='txt-menu'>Home</a>
        </div> 
        <div className='w-full flex align-items-center justify-content-center'>
          <a href='#abtMe' className='txt-menu'>About Me</a>
        </div> 
        <div className='w-full flex align-items-center justify-content-center'>
          <a href='#skills' className='txt-menu'>Skills</a>
        </div> 
        <div className='w-full flex align-items-center justify-content-center'>
          <a href='#projects' className='txt-menu'>Projects</a>
        </div> 
      </div>

      {/* abt me pg */}
      <div className='h-screen pt-8 pb-8 px-4' id='abtMe'>
        <div className='h-full'>
          <h1>About Me</h1>

          <div className='flex h-full gap-2' id='wrapper'>
            <div className='flex flex-column w-3 h-full gap-2' id='left'>
              <div className='w-full h-full' style={{ backgroundImage: `url(${myPic})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px' }}></div>
              <div className='pink-card h-auto gap-1'>
                <h2 className='h2-pink'>Heading 1</h2>
                <p className='p-pink'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>

            <div className='flex flex-column w-full h-full gap-2' id='right'>
              <div className='gold-card h-full'>
                <h2 className='h2-gold'>Heading 2</h2>
                <p className='p-gold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
              <div className='flex gap-2 h-full'>
                <div className='pink-card w-auto h-full'>
                  <h2 className='h2-pink'>Heading 3</h2>
                  <p className='p-pink'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className='pink-card w-auto h-full'>
                  <h2 className='h2-pink'>Heading 4</h2>
                  <p className='p-pink'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
              </div>
              <div className='gold-card h-full'>
                <h2 className='h2-gold'>Heading 5</h2>
                <p className='p-gold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skills pg */}
      <div className='h-screen pt-8 pb-8 px-4' id='skills'>
        <div className='h-full'>
          <h1>Skills</h1>

          <div className='flex flex-column w-full h-full gap-2'>
            <div className='skill-1 flex h-full'>
              <div className='w-full h-full flex flex-column justify-content-center'>
                <h1>Frontend</h1>
                <div className='flex gap-2'>
                  <span className='tag txt-tag'>Tag 1</span>
                  <span className='tag txt-tag'>Tag 1</span>
                  <span className='tag txt-tag'>Tag 1</span>
                </div>
              </div>
              <span className='h-full flex justify-content-end'>
                <img src={moonImg} width='70%'></img>
              </span>
            </div>

            <div className='skill-2 flex h-full'>
              <div className='w-full h-full flex flex-column justify-content-center'>
                <h1>Backend</h1>
                <div className='flex gap-2'>
                  <span className='tag txt-tag'>Tag 1</span>
                  <span className='tag txt-tag'>Tag 1</span>
                  <span className='tag txt-tag'>Tag 1</span>
                </div>
              </div>
              <span className='h-full flex justify-content-end'>
                <img src={flowerImg} width='70%'></img>
              </span>
            </div>

            <div className='skill-3 flex h-full'>
              <div className='w-full h-full flex flex-column justify-content-center'>
                <h1>Design</h1>
                <div className='flex gap-2'>
                  <span className='tag txt-tag'>Tag 1</span>
                  <span className='tag txt-tag'>Tag 1</span>
                  <span className='tag txt-tag'>Tag 1</span>
                </div>
              </div>
              <span className='h-full flex justify-content-end'>
                <img src={kirby} width='70%'></img>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* projects pg */}
      <div className='h-screen pt-8' id='projects'>
        testes
      </div>
    </div>
  );
}

export default App;
