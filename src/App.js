import "primereact/resources/themes/lara-light-cyan/theme.css";
import './styles/App.css';
import './styles/Typography.css';
import 'primeflex/primeflex.css';
import middleHeart from './images/middle-heart.svg';
import myPic from './images/NEW_candid_pic.jpeg';
import moonImg from './images/moon.svg';
import flowerImg from './images/flower.svg';
import kirby from './images/kirby.svg';
import { FileTextIcon, EnvelopeIcon, ChatDotsIcon, GithubLogoIcon } from '@phosphor-icons/react';
import IconBtn from './components/iconBtn';
import Folder from './components/folder';
import Btn from './components/btn';

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
          <a href='#tech' className='txt-menu'>Tech</a>
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
              <div className='pink-card h-full gap-1'>
                <h2 className='h2-pink'>Lau Foon Xuan</h2>
                <p className='p-pink'> Currently a Software Engineer student at APU with experience in full-stack development and user-centered design.</p>
              </div>
            </div>

            <div className='flex flex-column w-full h-full gap-2' id='right'>
              <div className='gold-card gap-2'>
                <h2 className='h2-gold'>Education Background</h2>
                <div className="w-full flex flex-row">
                  <div className="w-full flex">
                      <p className="p-gold">
                        <b>Course Details:</b>
                        <ul>
                          <li>Diploma in ICT | Asia Pasific University | 2026</li>
                          <li>Degree in Software Engineer | Asia Pasific University | Expected 2028</li>
                        </ul>
                      </p>
                  </div>
                  
                  <div className="w-full flex">
                      <p className="p-gold">
                        <b>Diploma Result:</b>
                        <ul>
                          <li>CGPA of 3.88</li>
                          <a href='https://interim-transcript.s3.ap-southeast-1.amazonaws.com/TP082007_3e41124db4a57bd1e890b147bda759b55f52674e.pdf' target='_blank' className="transcript"><li>Interim Transcript</li></a>
                        </ul>
                      </p>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 h-auto'>
                <div className='pink-card w-auto gap-2'>
                  <h2 className='h2-pink'>Technical Skills</h2>
                  <p className="p-pink">
                    <ul>
                      <li>Object-Oriented Programming (Java)</li>
                      <li>Python Programming</li>
                      <li>Database Systems</li>
                      <li>UI/UX Design</li>
                      <li>System Design & Analysis</li>
                    </ul>
                  </p>
                </div>
                <div className='pink-card w-auto gap-2'>
                  <h2 className='h2-pink'>Soft Skills</h2>
                  <p className="p-pink">
                    <ul>
                      <li>Team Collaboration</li>
                      <li>Adaptable to Changes</li>
                      <li>Deadline-Oriented Ethic</li>
                      <li>Willing to Learn</li>
                      <li>Capable of Time Management</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className='gold-card gap-1'>
                <h2 className='h2-gold'>Work Experience</h2>
                <p className='p-gold'>
                  <b>Software Developer Intern | Meng Kah Auto Parts Sdn Bhd | May 2026 - August 2026</b>
                  <ul>
                    <li>Designed and prototyped UI/UX solutions for internal portals in Figma, standardizing design language and resolving usability issues across inconsistent legacy systems</li>
                    <li>Contributed to front-end development of the IT Asset Portal using React, translating Figma designs into responsive, functional components</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tech pg */}
      <div className='h-screen pt-8 pb-8 px-4' id='tech'>
        <div className='h-full'>
          <h1>Technical Proficiencies</h1>

          <div className='flex flex-column w-full h-full gap-2'>
            <div className='skill-1 flex h-full'>
              <div className='w-full h-full flex flex-column justify-content-center'>
                <h1>Frontend</h1>
                <div className='flex gap-2'>
                  <span className='tag txt-tag'>HTML</span>
                  <span className='tag txt-tag'>CSS</span>
                  <span className='tag txt-tag'>JavaScript</span>
                  <span className='tag txt-tag'>React</span>
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
                  <span className='tag txt-tag'>Python</span>
                  <span className='tag txt-tag'>Java</span>
                  <span className='tag txt-tag'>PHP</span>
                  <span className='tag txt-tag'>MySQL</span>
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
                  <span className='tag txt-tag'>Figma</span>
                  <span className='tag txt-tag'>Canva</span>
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
      <div className='h-screen pt-8 pb-8 px-4' id='projects'>
        <div className='h-full'>
          <div className='w-full flex py-2 gap-4'>
            <span className="w-full flex align-items-center"><h1>Projects</h1></span>
            <a href="https://github.com/LXfoon" target='_blank' title="See more on Github!">
              <Btn icon={ <GithubLogoIcon size={20} weight="fill" /> } text="LXFoon"></Btn>
            </a>
          </div>

          <div className="folder-list">
            <a href="https://github.com/LXfoon/Reward-System.git" target="_blank">
              <Folder
                heading= "Point Productivity System"
                tagList = {
                  <>
                    <div className="tag txt-tag">PHP</div>
                    <div className="tag txt-tag">HTML</div>
                    <div className="tag txt-tag">CSS</div>
                    <div className="tag txt-tag">mySQL</div>
                  </>
                }
                summary= "A personal point-based productivity tracker designed to gamify daily habits and tasks."
                feature= "Main Dashboard | Custom Point Preset | Log History"
              ></Folder>
            </a>

            <a href="https://github.com/ShumZiQing/RWDD2405.git" target="_blank">
            <Folder
              heading= "Sustainable Living Website"
              tagList = {
                <>
                  <div className="tag txt-tag">PHP</div>
                  <div className="tag txt-tag">MySQL</div>
                  <div className="tag txt-tag">HTML</div>
                  <div className="tag txt-tag">CSS</div>
                  <div className="tag txt-tag">JavaScript</div>
                </>
              }
              summary= "A group project involving a full-stack web platform to connect and educate communities on eco-friendly living."
              feature= "Admin CRUD | Mobile Design | User Authentication"
            ></Folder>
            </a>
            
            <a href="https://drive.google.com/file/d/1mnsiwm2rrIvH-9KMWz8aNq0pFTQETtw8/view?usp=sharing" target="_blank">
            <Folder
              heading= "Car Sales System"
              tagList = {
                <>
                  <div className="tag txt-tag">Java</div>
                </>
              }
              summary= "A group project centered around a desktop application that provides vehicle inventory management functions to users."
              feature= "Data Validation | Interactive GUI | Report Generation"
            ></Folder>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
