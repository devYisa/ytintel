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
      organizacao: "Golden Heritage College",
      fotoPrincipal: "/art (5).png",
      descricaoCurta:
        "A simple primary and language school website based in Gambia and Bissau.",
      paginas: "4 Páginas",
      duracao: "1 Meses",
      lingua: "EN",
    },
    { id: "p-3",
      nome: "Tunemac",
      ano: "2026",
      organizacao: "Tunemac Music",
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
      link: '/',
    },
    { id: "pub-2",
      tipo: "Journal",
      ano: "2024",
      titulo: "Strategic procurement in the 21st century business and its impact on corporate performance of firms in the Nigerian manufacturing sector",
      doi: 'https://doi.org/10.62763/ef/4.2024.55',
      editora: "Economic Forum 14(4) pp. 55-64",
      link: 'https://e-forum.com.ua/en/journals/tom-14-4-2024/strategichni-zakupivli-v-biznesi-xxi-stolittya-ta-yikh-vpliv-na-korporativnu-efektivnist-pidpriyemstv-virobnichogo-sektoru-nigeriyi',
    },
    { id: "pub-3",
      tipo: "Journal",
      ano: "2025",
      titulo: "Impact of Talent Management on Brain Crisis in the Nigerian Universities: Prospects and Challenges",
      doi: 'ISSN:2814-2578',
      editora: "Fuoye Journal 3(2) 334-349",
      link: 'https://fjmie.fuoye.edu.ng/index.php/public_html/article/view/202/179',
    },
    { id: "pub-4",
      tipo: "Conference",
      ano: "2025",
      titulo: "Challenges of Talent Retention in the Healthcare Sector: Unveiling its Realities and Implications on the Sustainability of Healthcare Institutions in Africa",
      doi: 'MEFkon 2025',
      editora: "University Business Academy, Novi Sad",
    },
  ];

  return (
    <main className="body2">
      <Egyptian/>
      <Navbar />

      <section className='wall-sections2'>
        <div className="header">
          <p className="mini-title"> ARCHITECTURES × PROJECT </p>
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
                <p className="line-bars">  {[...Array(28)].map((_, idx) => ( <span key={idx}>|</span> ))} </p>
              </div> 
            ))}
          </div>

          <div className="right-line">
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
              </div> ))}
          </div>
        </div>

        <section className="prateleira">
          <div className="prateleira-head"> <BookOpen size={20} />  <div> <p className="mini">KNOWLEDGE ARCHIVE</p> <h1>Books & Publications</h1> </div> </div>
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