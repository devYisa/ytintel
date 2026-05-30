'use client';

import Navbar from '@/components/navbar';
import './projects.css';

import { ArrowUpRight, CalendarDays, Clock3, Globe2, BookOpen, FileText } from 'lucide-react';
import Link from 'next/link';
import Egyptian from '@/components/egyptian';

export default function ProjectsPage() {

  const meusProjetos = [
    { id: "p-1",
      nome: "Sistema de Gestão Escola",
      ano: "2026",
      organizacao: "Escola Irmã Leopoldina",
      fotoPrincipal: "/art (1).png",
      descricaoCurta:
        "Infraestrutura académica inteligente com fluxos administrativos automatizados.",
      paginas: "24 Páginas",
      duracao: "4 Meses",
      lingua: "EN • FR • PT",
    },
    { id: "p-2",
      nome: "School Website & SEO",
      ano: "2025",
      organizacao: "Golden Heritage Group",
      fotoPrincipal: "/art (5).png",
      descricaoCurta:
        "Website institucional premium otimizado para Google Lighthouse.",
      paginas: "18 Páginas",
      duracao: "3 Meses",
      lingua: "EN",
    },
    { id: "p-3",
      nome: "Tunemac",
      ano: "2026",
      organizacao: "Tunemac Systems",
      fotoPrincipal: "/art (3).png",
      descricaoCurta:
        "Sistema desktop com armazenamento seguro e renderização assíncrona.",
      paginas: "12 Páginas",
      duracao: "5 Meses",
      lingua: "EN",
    },
  ];

  const minhasPublicacoes = [
    { id: "pub-1",
      tipo: "Journal",
      ano: "2025",
      titulo: "Quiet Quitting in the Nigerian Healthcare Sector: Investigating Underlying Motives and Consequences on Corporate Productivity",
      editora: "JPMT 12 (3-4) pp. 30-41",
    },
    { id: "pub-2",
      tipo: "Livro",
      ano: "2026",
      titulo: "Production-Grade Flutter Architectures",
      editora: "JPMT 12 (3-4) pp. 30-41",
    },
    { id: "pub-3",
      tipo: "Journal",
      ano: "2026",
      titulo: "Comparative Syntax & Prepositional Regency",
      editora: "IJSAA Computational Linguistics Journal",
    },
    { id: "pub-4",
      tipo: "Livro",
      ano: "2026",
      titulo: "Structural Logic in Software Data Schemas",
      editora: "Dev Science Publishing",
    },
  ];

  return (
    <main className="body2">
      <Egyptian/>
      <Navbar />
      <section className='wall-sections2'>

        <div className="header">
          <p className="mini-title"> HOME × PROJECT </p>
          <h1> Digital Systems <br /> Crafted With <span>Structure</span> </h1>
        </div>

        <div className="conteudo">


          <div className="left-line">
         
            
            {meusProjetos.map((e) => (
              <div key={e.id} className='linhas'>
                <div className="line-header">
                  <div className="dot"></div>
                  <span className="line-title">SYSTEM_MATRIX</span>
                  <div className="line-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <p className="line-org">{e.organizacao}</p>
                <p className="line-year">{e.ano}</p>
                <p className="line-bars"> 
                  {[...Array(28)].map((_, idx) => (
                    <span key={idx}>|</span>
                  ))} 
                </p>
              </div> 
            ))}
          </div>

          <div className="contents">
            {meusProjetos.map((e, i) => (
              <div key={e.id} className={`project-row ${ i % 2 !== 0 ? 'reverse' : '' }`} >

                <div className="project-info">
                  <div className="year-line"> <div className="line"></div> <p>{e.ano}</p> </div>
                  <h1>{e.nome}</h1>
                  <h3>{e.organizacao}</h3>
                  <p className="description"> {e.descricaoCurta} </p>
                  <div className="tags">
                    <div className='hid'> <CalendarDays size={17} /> {e.paginas} </div>
                    <div className='hid'> <Clock3 size={17} /> {e.duracao} </div>
                    <div> <Globe2 size={17} /> {e.lingua} </div>
                    <button className="view-btn short"> View Project <ArrowUpRight size={18} /> </button>
                  </div>

                  <button className="view-btn wide"> View Project <ArrowUpRight size={18} /> </button>
                </div>

                <div className="project-image">
                  <div className="image-overlay"></div>
                  <img src={e.fotoPrincipal} alt={e.nome} />
                  <div className="floating-card">
                    <p>COPYRIGHTED</p>
                    <h2>{e.nome}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        <section className="prateleira">
          <div className="prateleira-head"> 
            <BookOpen size={20} /> 
            <div> <p className="mini">KNOWLEDGE ARCHIVE</p> <h1>Books & Publications</h1> </div>
          </div>
          <div className="prateleira-grid">
            {minhasPublicacoes.map((e) => (<div key={e.id} className="prat-card" >
                <div className="prat-top">
                  <span>{e.tipo}</span>
                  <p>{e.ano}</p>
                </div>
                <div className="publication-icon">
                  <FileText size={38} />
                </div>

                <h2 className='titulo'>{e.titulo}</h2>
                <h4>{e.editora}</h4>
              </div>
            ))}
          </div>
        </section>

        <div className="back-home">
          <Link href="/" className="back-btn">← Back to Home</Link>
        </div>
      </section>
    </main>
  );
}