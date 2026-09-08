import { CaretRightIcon } from '@phosphor-icons/react';
import './folder.css';

function Folder({ heading, tagList, summary, feature }: ProjFolder) {
    return (
       <div className="folder relative z-1">
            <svg className='absolute folder-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 599 330" fill="none">
                <path className='folder-bg' d="M16 0.5H213.603C216.339 0.5 219.027 1.22443 221.393 2.59961L291.227 43.1963C293.745 44.6603 296.606 45.4316 299.519 45.4316H583C591.56 45.4316 598.5 52.3714 598.5 60.9316V314C598.5 322.56 591.56 329.5 583 329.5H16C7.43959 329.5 0.500004 322.56 0.5 314V16C0.500002 7.57345 7.22424 0.717247 15.5996 0.504883L16 0.5Z"/>
            </svg>
            <div className='folder-outer z-3'>
                <div className='folder-content'>
                    <div className='header-sec'>
                        <div className='header'>
                            <h2>{heading && heading}</h2>
                            <span className='tag-list'>
                                {tagList}
                            </span>
                        </div>
                        <span className='icon'><CaretRightIcon size={24} /></span>
                    </div>
                    <div className='body'>
                        {summary && summary}
                    </div>
                    <div className='p-pink' id='feature'>
                        {feature && feature}
                    </div>
                </div>
            </div>
            
       </div>
    )
}

export default Folder;