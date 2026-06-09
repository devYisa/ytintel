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
        <nav onClick={handleButton} className={`navbar ${pathName.slice(1)} ${scroll ? 'scrollActive' : ''}`}>
          <div className='navleft'>
            <div className='nav-logo-box'><img src='/logo.png' alt='etwise-logo' className='nav-logo'/></div>
            <div className='nav-title'> <h1 className="nav-title-main"> eTWise <span className="title-separator"> - Academia & Dev. <span className='hid-name'>Portfolio </span></span> </h1> <p> - Portfolio</p></div> 
          </div>
          <ul className="navright">
            {navTabs.map((e, i)=>  <Link href={e.link} key={i} className={`nav-item ${pathName === e.link ? `active-tab ${e.title}` : ''}`}>{e.title}</Link>)}
          </ul>
      </nav>
    )
  }