'use client';

import { useState } from 'react';
import { GraduationCap, BookCopy, LucideCircuitBoard, LucideAlignVerticalJustifyCenter, X } from 'lucide-react';
import Navbar from '@/components/navbar';
import './page.css';
import Egyptian from '@/components/egyptian';

export default function Home() {
  const [cvOpen, setCVOpen] = useState(false);
  

  return (
    <main className="body">
      <Egyptian />
      <Navbar />

      <section>
        <div className='button'>
          <p className='btn-p'>Full CV</p>
          <div onClick={()=> setCVOpen(!cvOpen)} className={`toggler ${cvOpen ? 'yes' : ''}`}>
            <p className={!cvOpen ? 'hid' : 'yes'}>Sim</p>
            <div className='round'></div>
            <p className={cvOpen ? 'hid': 'no'}>Não</p>
          </div>
        </div>
      </section>

      { cvOpen && (
          <div className='full-modal'>
            <div className='cv-modal'>
              <button className='x-btn' onClick={() => setCVOpen(false)} > <X size={20} /> </button>
              <iframe src='/cv.pdf' className='cv-frame' />
            </div>

          </div>
        )}

      <section className="wall-sections">
        
        <section className='esquerda'>
          <div className="star"></div>
          
          <div className="yisa-info">
            <h1 className="yisa-info-head">Researcher</h1>
            <p className="yisa-info-text">A dedicated research expert in Management, analysing organisational dynamics in emerging HR technology.</p>
            
            <div className="skill">
              <p className="skill-head">ACADEMIC SKILLS</p>
              <div className='skill-line'></div>
              <ul className="skill-bullet">
                <li> <LucideAlignVerticalJustifyCenter className='icon' size={17}/> Data Analysis (Advanced Excel, PLS-SEM) </li>
                <li> <BookCopy className='icon' size={17}/> Article Write Ups </li>
                <li> <LucideCircuitBoard className='icon' size={17}/> Journal Publication </li>
                <li> <GraduationCap className='icon' size={17}/> Thesis Guidance and Assistance </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='devYisa-image'>
          <div className='yisa-portrait'>
            <div className='yisa-portrait-fundo'>
              <div className='yisa-img-split left-img'>
                <img src='art.png' alt="Left view"/>
              </div>
              <div className='yisa-img-split right-img'>
                <img src='art.png' alt="Right view"/>
              </div>
            </div>
          </div>
        </section>
        
        <section className='direita'>
          <div className="engine-3d">
            <div className="iso-layer rectangle-base"></div>
            <div className="iso-layer rectangle-mid"></div>
            <div className="iso-layer cone-wireframe"></div>
            <div className="iso-layer golden-spiral-ring"></div>
            <div className='central-glow'></div>
          </div>
          
          <div className="yisa-info to-right">
            <h1 className="yisa-info-head">Web and Mobile Developer</h1>
            <p className="yisa-info-text">With proven proficiencies in management and organizational softwares with strong SEO</p>
            <div className="skill the-right">
              <p className="skill-head">TECH STACK</p>
              <div className='skill-line'></div>
              <ul className="skill-bullet">
                <li><img src='flutter.png'/> Flutter (Cross Platform Mobile Apps)</li>
                <li><img src='react.png'/> React (JavaScript)</li>
                <li><img src='nextjs.png'/> Next JS </li>
                <li><img src='node.png'/> Node JS </li>
                <li><img src='mongodb.png'/> MongoDB </li>
                <li><img src='seo.png'/> SEO Optimization</li>
              </ul>
            </div>
          </div>
        </section>

      </section>
      
      
    </main>
  );
}