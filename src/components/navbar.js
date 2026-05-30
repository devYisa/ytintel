import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './navbar.css'

const navTabs = [
    {title: 'Home', link: '/'},
    {title: 'Projects', link: '/projects'},
    {title: 'Services', link: '/services'},
    {title: 'Contact', link: '/contact'},
  ];

  export default function Navbar(){
  const pathName = usePathname();

    return(
        <nav className={`navbar ${pathName.slice(1)}`}>
        <h1 className="my-title"> DevYisa <span className="title-separator"> - Researcher & Developer Portfolio</span> </h1>
        <ul className="navigation-links">
          {navTabs.map((e, i)=>  <Link href={e.link} key={i} className={`nav-item ${pathName === e.link ? `active-tab ${e.title}` : ''}`}>{e.title}</Link>)}
        </ul>
      </nav>
    )
  }