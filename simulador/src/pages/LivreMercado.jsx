import TrainingBanner from '../components/TrainingBanner'
import PhishingReveal from '../components/PhishingReveal'
import { useSimLogin } from '../components/useSimLogin'
import './phishing.css'

const RED_FLAGS = [
  'O endereço era "livre-mercado.net" — o site real é mercadolivre.com.br.',
  'O nome da loja estava invertido ("Livre-mercado"), imitando a marca.',
  'A página pedia login antes de mostrar qualquer produto.',
  'Não havia o cadeado de segurança (https) legítimo da loja.',
]

function LivreMercado({ onExit }) {
  const { caught, handleFakeSubmit, reset } = useSimLogin()

  if (caught) {
    return (
      <PhishingReveal
        brand="o Mercado Livre"
        redFlags={RED_FLAGS}
        onRetry={reset}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="sim-page lm">
      <TrainingBanner onExit={onExit} />
      <div className="sim-fakeurl">http://<b>livre-mercado.net</b>/entrar</div>

      <div className="lm-top">
        <span className="lm-logo">
          <span className="lm-logo__hands" aria-hidden="true">🤝</span>
          Livre-mercado
        </span>
      </div>

      <div className="sim-page__body">
        <div className="lm-card">
          <h1>Digite seu e-mail, telefone ou usuário</h1>
          <form onSubmit={handleFakeSubmit}>
            <input className="sim-field" type="text" placeholder="E-mail, telefone ou usuário" autoComplete="off" />
            <input className="sim-field" type="password" placeholder="Senha" autoComplete="off" />
            <button className="sim-submit" type="submit">Continuar</button>
            <button className="lm-secondary" type="button" onClick={(e) => e.preventDefault()}>
              Criar conta
            </button>
          </form>
          <p style={{ marginTop: 18 }}>
            <a className="lm-link" href="#" onClick={(e) => e.preventDefault()}>Esqueci minha senha</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LivreMercado
