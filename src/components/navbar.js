import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './navbar.css'
import { useEffect, useState } from 'react';

const navTabs = [
    {title: 'Home', link: '/'},
    {title: 'Projects', link: '/projects'},
    {title: 'Contact', link: '/contact'},
  ];

  export default function Navbar(){
    const pathName = usePathname();
      const [scroll, changeScroll] = useState(false);
    
      useEffect(()=>{
        function handleScroll(){
          const newScroll = window.scrollY;
          if (newScroll > 100){ changeScroll(true)} 
          else{ changeScroll(false)
          }
        }
        window.addEventListener('scroll', handleScroll);
        return()=>{ window.removeEventListener('scroll', handleScroll)}
      }, [])
    
      function handleButton(){
        window.removeEventListener('scroll', changeScroll(false));
      }
      

    return(
        <nav onClick={handleButton} className={`dnavbar ${pathName.slice(1)} ${scroll ? 'scrollActive' : ''}`}>
          <div className='dleft'>
            <div className='logo-holder'><img src='/logo.png' alt='etwise-logo' className='logo'/></div>
            <div > <h1 className="my-title"> eTWise <span className="title-separator"> - Academia & Dev. <span className='hid-name'>Portfolio </span></span> </h1> </div> 
          </div>
          <ul className="dright">
            {navTabs.map((e, i)=>  <Link href={e.link} key={i} className={`dnav-item ${pathName === e.link ? `active-tab ${e.title}` : ''}`}>{e.title}</Link>)}
          </ul>
      </nav>
    )
  }