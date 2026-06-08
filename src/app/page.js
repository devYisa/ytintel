'use client';

import { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookCopy, LucideCircuitBoard, LucideAlignVerticalJustifyCenter, X , LineChart, Cpu, ArrowUpRight, CheckCircle2, Zap, Film, Globe, Binary, Blocks, Dna, Database} from 'lucide-react';
import Link from 'next/link';

import Navbar from '@/components/navbar';
import './page.css';
import Egyptian from '@/components/egyptian';

export default function Home() {
  
  const [cvOpen, setCVOpen] = useState(false);
  const osServicos = [
    {
      id: "srv-1",
      numero: "01 // CLIENT SIDE DEVELOPMENT",
      titulo: "Front-End Web and Mobile Development",
      icone: <Cpu size={28} />,
      descricao: "Create Web, Mobile (IOS & Android) and Desktop Apps with clean coding architectures.",
      features: ["Beautiful UI and Designs", "Strong Search Engine Optimisation (SEO)", "Run apps on Multi-Língua [ EN - PT - FR ]", "Academia and Business Cetred Apps"]
    },
    {
      id: "srv-2",
      numero: "02 // SERVER-SIDE PROGRAMMING",
      titulo: "Backend Programming and Database Management",
      icone: <Database size={28} />,
      descricao: "Build Strong and Efficient Backend Systems with the Microservices Operating at the Most Optimal Cost.",
      features: ["High Strenghts in No-SQL Database", "Establish Server with Effective Interaction", "Efficient Rate Limiting Capability", "Transparent Server-Side Management with Clients"]
    },
    {
      id: "srv-3",
      numero: "03 // DATA_ANALYTICS",
      titulo: "Academia & Data Analytics",
      icone: <LineChart size={28} />,
      descricao: "Advanced administrative data analysis using structural equation modeling (SmartPLS) and econometric path auditing to map organizational behavior constraints.",
      features: ["SEM-PLS Multi-Dimensional Analysis", "SPSS for Natural and Social Sciences", "E-Views and STATA for Economia Analysis", "HRIS Assessments Using Excel"]
    },
  ];
  const inProgressProjects = [
    {
      id: "PROT-IDX-0A",
      title: "pMES: Portuguese Made Easy",
      status: "PHASE: ALPHA TESTING",
      description: "A specialized contextual learning engine tailored for West African professionals looking to quickly bridge the English-Portuguese language barrier in business.",
      image: "/art (4).png"
    },
    {
      id: "PROT-IDX-0B",
      title: "SwiftRoute Remit",
      status: "PHASE: ARCHITECTURE",
      description: "A secure cross-border money transfer protocol micro-optimized for low-latency payment processing across the ECOWAS sub-region.",
      image: "/art (2).png"
    },
    {
      id: "PROT-IDX-0C",
      title: "EduCore West Africa",
      status: "PHASE: UI PROTOTYPING",
      description: "A unified school administration framework deployed to automate academic records and audit trail transparency in regional schools.",
      image: "/art (6).png"
    },
    {
      id: "PROT-IDX-0D",
      title: "LexisAI Syntax Parser",
      status: "PHASE: DATA MODELING",
      description: "An advanced computational linguistics tool built to analyze comparative syntax and structural prepositional regency for language processing.",
      image: "/art (3).png"
    }
  ];

  const languages = ['EN', 'PT', 'FR'];

  return (
    <main className='full-body'>

      <div className="body">
        <Egyptian />
        <Navbar/>

        <section>

          <div className='button desktop-cv-btn'>
            <p className='btn-p'>Full CV</p>
            <div onClick={()=> setCVOpen(!cvOpen)} className={`toggler ${cvOpen ? 'yes' : ''}`}>
              <p className={!cvOpen ? 'hid' : 'yes'}>Sim</p>
              <div className='round'></div>
              <p className={cvOpen ? 'hid': 'no'}>Não</p>
            </div>
          </div>
        </section>

        <section className="wall-sections">

          <section className='theyisa-image'>
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
            
            <div className='text-cover'>
              <p>Welcome to my Workspace</p>
              <div className='button texties'>
                <p className='btn-p'>Full CV</p>
                <div onClick={()=> setCVOpen(!cvOpen)} className={`toggler ${cvOpen ? 'yes' : ''}`}>
                  <p className={!cvOpen ? 'hid' : 'yes'}>Sim</p>
                  <div className='round'></div>
                  <p className={cvOpen ? 'hid': 'no'}>Não</p>
                </div>
              </div>
            </div>
          </section>
          
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
        
        { cvOpen && (
            <div className='full-modal'>
              <div className='cv-modal'>
                <button className='x-btn' onClick={() => setCVOpen(false)} > <X size={20} /> </button>
                <iframe src='/cv.pdf' className='cv-frame' />
              </div>

            </div> )}

        
      </div>
<main className="body3">
      <div className='lab-grid-mesh'></div>
      <div className='neon-glow glow-one'></div>
      <div className='neon-glow glow-two'></div>
      <div className='corner-coordinate top-left'>[SYS_LOC // 0.001]</div>
      <div className='corner-coordinate top-right'>[SPEC_REVISION_2026]</div>

      <section className="contents">

        <div className="card-container">
          {osServicos.map((e) => ( 
            <div key={e.id} className="each-card">
              <div className="card-top"> 
                <span className="card-role">{e.numero}</span> 
                <div className="card-arrow"> <ArrowUpRight size={16} /> </div>
              </div>

              <div className="card-info">
                <div className="card-icon"> {e.icone} </div>
                <h2 className="card-title">{e.titulo}</h2>
                <p className="card-desc">{e.descricao}</p>
              </div>

              <div className="card-stacks">
                <p className="stacks-title">CORE_STACK_VERIFICATION</p>
                {e.features.map((e, i) => ( <div key={i} className="stacks-item"> <CheckCircle2 size={14} className="item-icon" /> <span>{e}</span> </div> ))}
              </div>
            </div>))}
        </div>

        <section className="head-title">
          <p className="head-label">CAPABILITIES × OPERATIONAL_FIELDS</p>
          <h1 className="head-head"> Specialized Engineering & <br /> Quantitative <span>Research Engine</span> </h1>
        </section>

        <section className="aim">
          <div className='aim-note'>[FILE_REF // PERSONAL_MOTIVATION]</div>
          <div className="aim-left">
            <div className='aim-frame'>
              <img src="/pics.png" alt="Yisa Profile" className="theyisa-img" />
              <div className='theyisa-frame yusuf'></div>
              <div className='theyisa-frame yisa'></div>
              <div className='theyisa-frame olamitunji'></div>
              <div className='theyisa-frame grace'></div>
            </div>
            <div className="theyisa-label">SUBJECT_THE-YISA // PHOTOGRAMMETRY</div>
          </div>

          <div className="aim-right">
            <div className="aim-header"> <Zap size={16} className="cyan-text" /> <span>YISA'S MISSION // FROM MGT TO TECH INTEGRATION OVERTIME</span> </div>
            <h1 className="aim-text"> " My purpose is to strategically integrate advanced <span>software engineering</span> directly into the administrative core of institutions across Western Africa. Operating effectively as a bilingual expert fluent in both <span>English and Portuguese</span>, I design regional platforms that streamline governance, eliminate transaction friction, and empower organizational management specifically within <span>West Africa</span>. " </h1>
            <div className="aim-bottom">// Record Authorization: TheYisa of Education $ Technological Wise [eTWise]</div>
          </div>
        </section>
      </section>
      
      
        <section className="lab">
          <div className="lab-header">
            <div className='labhead-title'> <Film size={20} className='cyan-text' /> <h2>The Pipeline Sandbox</h2> </div>
            <p>Unfinished operations, mechanical blueprints, and laboratory active code repositories.</p>
          </div>
          <div className="lab-film">
            <div className="lab-strip">
              {inProgressProjects.map((e) => ( 
                <div key={e.id} className="strip">
                
                  <div className="strip-tag">{e.id}</div>
                  <div className="strip-design top"></div>
                  <div className="strip-content">
                    <span className="strip-status">{e.status}</span>
                    <h3>{e.title}</h3>
                    <p className="strip-desc">{e.description}</p>
                  </div>
                  <div className="strip-design bottom"></div>
                </div>
              ))}
            </div>
          </div>

        <div className='arrow right' role='button' onClick={(w)=>{
          const container = w.currentTarget.previousSibling;
          container.scrollBy({left: container.clientWidth, behavior: 'smooth'})
        }}></div>

        <div className='arrow left' role='button' onClick={(w)=>{
          const container = w.currentTarget.closest('.lab').querySelector('.lab-film');
          container.scrollBy({left: -container.clientWidth, behavior: 'smooth'})
        }}></div>
      </section>

      <section className="contents">
<div className="services-footer-navigation">
          <p>Need a customized structural approach for your ecosystem?</p>
          <Link href="/contact" className="services-cta-btn">
            Initiate Contact Protocol <ArrowUpRight size={18} />
          </Link>
        </div> 

      </section>

<div className="back-home">
          <Link href="/" className="back-btn">← Back to Home</Link>
        </div>
    </main>

    </main>
  );
}