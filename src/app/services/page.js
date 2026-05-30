'use client';

import React from 'react';
import { LineChart, Cpu, ArrowUpRight, CheckCircle2, Zap, Film, Globe, Binary, Blocks, Dna, Database } from 'lucide-react';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import './services.css';
import { ScrollBehavior } from 'next/dist/client/components/router-reducer/router-reducer-types';

export default function ServicesPage() {

  const osServicos = [
    {
      id: "srv-1",
      numero: "01 // CLIENT SIDE DEVELOPMENT",
      titulo: "Front-End Web and Mobile Development",
      icone: <Cpu size={28} />,
      descricao: "Development of clean, robust full-stack architectures customized for management systems, high-frequency reactive streams, and responsive mobile deployments.",
      features: ["Next.js & React Architectures", "Flutter Production Engines", "Automated Workflows", "Secure Offline Data Sync"]
    },
    {
      id: "srv-2",
      numero: "02 // SERVER-SIDE PROGRAMMING",
      titulo: "Backend Programming and Database Management",
      icone: <Database size={28} />,
      descricao: "Algorithmic breakdown of political and social communication. Specialization in tracking online deployment of hate speech agendas and structural syntax regency.",
      features: ["Agenda-Setting Analytics", "Attribute Framing Research", "Natural Language Processing", "Prepositional Regency Audits"]
    },
    {
      id: "srv-3",
      numero: "03 // DATA_ANALYTICS",
      titulo: "Academic Research Consultant & Data Analysis",
      icone: <LineChart size={28} />,
      descricao: "Advanced administrative data analysis using structural equation modeling (SmartPLS) and econometric path auditing to map organizational behavior constraints.",
      features: ["SmartPLS Path Auditing", "Hypothesis Matrix Formulation", "Independent Sample T-Tests", "Socio-Behavioral Data Mapping"]
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

  const languages = ['English Data Stream', 'Português Data Stream', 'Français Data Stream'];

  const stacks = [
    'Flutter v3.0', 'Next.js 14', 'React Engine', 'Node.js Core', 'MongoDB Atlas', 
    'JavaScript ES6', 'Dart Lang', 'Firebase DB', 'SEO Analytics', 'Express Framework', 
    'REST Protocols', 'MERN Stack'
  ];

  return (
    <main className="body3">
      <div className='lab-grid-mesh'></div>
      <div className='neon-glow glow-one'></div>
      <div className='neon-glow glow-two'></div>
      <div className='corner-coordinate top-left'>[SYS_LOC // 0.001]</div>
      <div className='corner-coordinate top-right'>[SPEC_REVISION_2026]</div>

      <Navbar />

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
              <img src="/art.png" alt="Yisa Profile" className="devyisa-img" />
              <div className='devyisa-frame yusuf'></div>
              <div className='devyisa-frame yisa'></div>
              <div className='devyisa-frame olamitunji'></div>
              <div className='devyisa-frame grace'></div>
            </div>
            <div className="devyisa-label">SUBJECT_DEVYISA // PHOTOGRAMMETRY</div>
          </div>

          <div className="aim-right">
            <div className="aim-header"> <Zap size={16} className="cyan-text" /> <span>DEVYISA MISSION // FROM METRIC PURSUIT OVERTIME</span> </div>
            <h1 className="aim-text"> " My purpose is to strategically integrate advanced <span>software engineering</span> directly into the administrative core of institutions across Africa. Operating effectively as a bilingual expert fluent in both <span>English and Portuguese</span>, I design regional platforms that streamline governance, eliminate transaction friction, and empower organizational management specifically within <span>West Africa</span>. " </h1>
            <div className="aim-bottom">// Record Authorization: devYisa of e-Grace Technological Centre [E.T.C]</div>
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
  );
}