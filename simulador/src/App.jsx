import { useState } from 'react'
import LivreMercado from './pages/LivreMercado'
import GovFake from './pages/GovFake'
import Feetbook from './pages/Feetbook'
import Minsigrammer from './pages/Minsigrammer'
import FontSizeControl from './components/FontSizeControl'
import './pages/phishing.css'

// nome = o que aparece na página falsa (de propósito escrito "errado").
// imita = a marca real que o golpe copia.
const SIMS = [
  { id: 'livremercado', nome: 'Livre-mercado', imita: 'Mercado Livre', desc: 'Loja virtual falsa com ofertas imperdíveis', comp: LivreMercado },
  { id: 'govfake', nome: 'govFake', imita: 'gov.br', desc: 'Portal do governo falso prometendo benefício', comp: GovFake },
  { id: 'feetbook', nome: 'feetbook', imita: 'Facebook', desc: 'Rede social falsa pedindo login de novo', comp: Feetbook },
  { id: 'minsigrammer', nome: 'minsigrammer', imita: 'Instagram', desc: 'Rede de fotos falsa oferecendo seguidores', comp: Minsigrammer },
]

function App() {
  const [atual, setAtual] = useState(null)
  const [zoom, setZoom] = useState(1)

  let content
  if (atual) {
    const Sim = SIMS.find((s) => s.id === atual).comp
    content = <Sim onExit={() => setAtual(null)} />
  } else {
    content = (
      <div className="sim-home">
        <div className="sim-home__inner">
          <h1>🛡️ Oficina de Segurança Digital — PUC Minas</h1>
          <p className="lead">
            Simulador de phishing para a oficina de prevenção de golpes. Escolha
            uma página falsa abaixo para ver como os golpistas imitam sites
            conhecidos. Ao "entrar", você descobre os sinais que entregam a fraude.
          </p>

          <div className="sim-home__grid">
            {SIMS.map((s) => (
              <button key={s.id} className="sim-home__item" onClick={() => setAtual(s.id)}>
                <h3>{s.nome}</h3>
                <span className="sim-home__item-imita">Imita o {s.imita}</span>
                <span>{s.desc}</span>
              </button>
            ))}
          </div>

          <div className="sim-home__disclaimer">
            ⚠️ Ferramenta exclusivamente educacional. As páginas são fictícias,
            <strong> não coletam nem enviam nenhum dado</strong> e nada do que for
            digitado é salvo. Use apenas em treinamento com participantes cientes.
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <FontSizeControl zoom={zoom} onChange={setZoom} />
      <div style={{ zoom }}>{content}</div>
    </>
  )
}

export default App
