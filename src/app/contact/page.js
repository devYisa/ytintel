'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUpRight, 
  MessageSquare, 
  GitBranch, 
  ScanFace, 
  LinkIcon,
  Binary,
  GraduationCap,
  Layers,
  Sparkles,
  BookmarkCheck,
  Languages,
  X,
  Calendar,
  Ticket
} from 'lucide-react';
import Navbar from '@/components/navbar';
import './contact.css';
import Link from 'next/link';

export default function Contact() {
  // Estado para controlar se o Modal da Biografia está aberto
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profileMeta = {
    developerName: "devYisa",
    enterprise: "isGrace (Intelligence for short)",
    domain: "isgrace.com",
    telephony: "+245 955959589",
    email: "iamyisas@gmail.com",
    location: "Zona 7, Bamdim, Bissau, Guinea-Bissau"
  };

  const coreFields = [
    { title: "Human Resources (HR) Academia", desc: "Quantitative research, admin automation." },
    { title: "Front-End (Web & Mobile) Development", desc: "Architecting West Africa digital pipelines." },
    { title: "Back-end Engineering", desc: "Syntax models & prepositional regency." }
  ];

  const socialChannels = [
    { name: "WhatsApp", link: `https://wa.me/245955959589`, handle: profileMeta.telephony, icon: <MessageSquare size={14} /> },
    { name: "GitHub", link: "https://github.com/devYisa", handle: "devYisa Core", icon: <GitBranch size={14} /> },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/yusuf-o-yisa-0460ab3b9", handle: "Yisa Profile", icon: <LinkIcon size={14} /> },
    { name: "FaceBook", link: "https://www.facebook.com/devYisa.O/", handle: "Yisa Connected", icon: <ScanFace size={14} /> },
    { name: "ORCID", link: "https://orcid.org/0000-0001-9636-5255", handle: "Verified Archive ID", icon: <BookmarkCheck size={14} /> },
    { name: "ResearchGate", link: "#", handle: "Research Footprint", icon: <GraduationCap size={14} /> },
    { name: "TikTok", link: "https://tiktok.com/@devyisa.o", handle: "TikTok", icon: <Ticket size={14} /> }

  ];

  const comprehensiveTimeline = [
    { year: "2025", month: "Out", title: "Escola Leopoldina Language Tech", location: "Bissau", detail: "Maintaining advanced Portuguese acquisition and structural syntax research at Escola Evangélica Irmã Leopoldina." },
    { year: "2025", month: "Jan", title: "Tech App Flutter Development & ADORSS", location: "Nigeria / Bissau", detail: "Returned to Nigeria to finalize advanced specialization in Flutter Tech Applications. Commenced technical operations with ADORSS." },
    { year: "2024", month: "Dez", title: "European Scientific Journals Publication", location: "Europe", detail: "Published primary syntax research papers in European scientific journals (Ukraine, Serbia, etc.)." },
    { year: "2024", month: "Ago", title: "Linguistic Shift & First JS Code", location: "Bissau / Gambia", detail: "Relocated to Bissau for immersive Portuguese learning. Captured JavaScript engineering for the first time while acting as instructor at NDOWS Comprehensive." },
    { year: "2023", month: "Jan", title: "National Youth Service Protocol", location: "Ondo State, Nigeria", detail: "Executed mandatory national corporate service framework, integrating administrative workflows." },
    { year: "2022", month: "Jul", title: "Academic Graduation (Honor Degree)", location: "Ilorin, Nigeria", detail: "Concluded Bachelor Degree in Human Resources Management with an outstanding GPA of 4.04 (Equivalent to 16/20)." },
    { year: "2021", month: "Mar", title: "Global Cross-Border Transitions", location: "UK / USA / Finland", detail: "Advanced professional/academic networks via high-level operational engagement frameworks." },
    { year: "2020", month: "Set", title: "Academic Research & Analytics Consulting", location: "University System", detail: "Pioneered academic data modeling and syntax/statistical analysis pipelines, assisting research students." },
    { year: "2019", month: "Jun", title: "Public Institution Human Resources Core", location: "Shomolu Local Gov, NG", detail: "Infiltrated the public administration matrix as a Human Resources Intern, automating filing systems." },
    { year: "2018", month: "Fev", title: "Corporate Customer Operations", location: "MultiChoice Africa (DSTV/GOTV)", detail: "Deployed as Customer Service Specialist, resolving latency architecture and customer account protocols." },
    { year: "2017", month: "Jan", title: "Academic Matrix Initialization", location: "University of Ilorin, Nigeria", detail: "Began formal university bachelor path, bridging sociological systems with organizational analytics." },
    { year: "2016", month: "Out", title: "Linguistic Systems Instruction (English)", location: "Funbim School, NG", detail: "Served as English Instructor, designing syntax paradigms and lexical correction routines." },
    { year: "2015", month: "Ago", title: "Arabic Linguistics Instruction", location: "Modrasat Ansar-Islamiyat, NG", detail: "Appointed as Arabic Language Teacher, translating complex semantic systems and grammar frameworks." },
    { year: "2013", month: "Mai", title: "Hardware Architecture Telephony Tech", location: "Faruk GSM, Lagos", detail: "Initialized engineering path by acquiring mobile telecommunications diagnostics and micro-hardware repairs." }
  ];

  return (
    <main className="body4">
      <Navbar />

      <div className="content4">

        <section className="cont-left">
          <div className="cont-guard">
            <div className="left-header"> <Layers size={12} className="cyan-text" /> <span>{profileMeta.enterprise.toUpperCase()}</span> </div>
            <h1 className="left-title">{profileMeta.developerName}.</h1>
            <p className="left-text"> Architecting intelligent enterprise frameworks, comparative linguistic pathways, and high-performance software solutions for schools, churches, and companies. </p>
            <button className="left-button" onClick={() => setIsModalOpen(true)}> <Calendar size={16}/> <p>[OPEN BIOGRAPHY TIMELINE LOGS]</p> </button>
          </div>
        </section>

        <section className="cont-right">
          <div className='top'>
            <div className="id-matrix left">
              <h3 className="id-label">// IDENTITY MATRIX</h3>
              <div className="id-rows">
                <div className="c-row"><Globe size={15} className="cyan-text" /> <span>DOMAIN:</span> <p>{profileMeta.domain}</p></div>
                <div className="c-row"><MapPin size={15} className="cyan-text" /> <span>GEO:</span> <p> {profileMeta.location} </p></div>
                <div className="c-row"><Phone size={15} className="cyan-text" /> <span>TEL:</span> <p> {profileMeta.telephony} </p></div>
                <div className="c-row"><Mail size={15} className="cyan-text" /> <span>EMAIL:</span> <p> {profileMeta.email} </p></div>
              </div>
            </div>
            
            <div className="id-matrix right">
              <h3 className="id-label">// CORE ENGINES</h3>
              <div className="stacks">
                <div className="stack-details">
                  <p className="s-title">TECH:</p>
                  <div className="inners">
                    <span className="m-pill">Flutter</span><span className="m-pill">JS</span>
                    <span className="m-pill">MERN</span><span className="m-pill">GSM Hardware</span>
                  </div>
                </div>
                <div className="stack-details">
                  <span className="s-title">LANGS:</span>
                  <div className="inners">
                    <span className="m-pill highlight">EN</span><span className="m-pill highlight">PT</span>
                    <span className="m-pill">Yoruba</span><span className="m-pill">Classical Arabic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="id-matrix">
            <h3 className="id-label">// SCIENTIFIC FIELDS OF INFERENCE</h3>
            <div className="top midtop"> 
              {coreFields.map((e, i) => ( 
                <div key={i} className="mini-field-box"> 
                  <h4>[0{i+1}] {e.title}</h4> 
                  <p>{e.desc}</p> 
                </div> 
              ))} 
            </div>
          </div>
          
          <div className="id-notice">
            <Sparkles size={14} className="cyan-text" />
            <span>Frameworks successfully operationalized within schools, ecclesiastical setups (churches), and corporations.</span>
          </div>

          <div className="id-matrix">
            <h3 className="id-label">// ROUTING DISCOVERY NETWORKS</h3>
            <div className="top bottom">
              {socialChannels.map((e, i) => ( 
                <Link key={i} href={e.link} target="_blank" rel="noopener noreferrer" className="med-item"> 
                  {e.icon} <span>{e.name}</span> <ArrowUpRight size={12} className="arrow" /> 
                </Link> 
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* =========================================================
          MODAL CONTAINER: SCALED ACCOMODATION MATRIX
      ========================================================= */}
      {isModalOpen && (
        <div className="fixed-biography-overlay">
          <div className="biography-modal-container">
            
            <header className="modal-header">
              <div className="modal-title">
                <Calendar size={18} className="cyan-text" />
                <h2>HISTORICAL TIMELINE TRAJECTORY LOGS</h2>
              </div>
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </button>
            </header>

            <div className="modal-scrollable-content">
              <div className="standalone-timeline-list">
                {comprehensiveTimeline.map((item, idx) => (
                  <div key={idx} className="standalone-timeline-card">
                    
                    <div className="timeline-date-side">
                      <span className="m-lbl">{item.month.toUpperCase()}</span>
                      <span className="y-lbl">{item.year}</span>
                    </div>

                    <div className="timeline-info-side">
                      <div className="info-header">
                        <h3>{item.title}</h3>
                        <span className="loc-lbl">// {item.location.toUpperCase()}</span>
                      </div>
                      <p>{item.detail}</p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </main>
  );
}