import TrainingBanner from '../components/TrainingBanner'
import PhishingReveal from '../components/PhishingReveal'
import { useSimLogin } from '../components/useSimLogin'
import './phishing.css'

const RED_FLAGS = [
  'O endereço era "feetbook-login.com" — não é facebook.com.',
  'O nome "feetbook" trocava letras para parecer a rede verdadeira.',
  'Chegou por um link de mensagem dizendo "veja quem visitou seu perfil".',
  'A página pedia login de novo mesmo você já estando conectado.',
]

function Feetbook({ onExit }) {
  const { caught, handleFakeSubmit, reset } = useSimLogin()

  if (caught) {
    return (
      <PhishingReveal
        brand="o Facebook"
        redFlags={RED_FLAGS}
        onRetry={reset}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="sim-page fb">
      <TrainingBanner onExit={onExit} />
      <div className="sim-fakeurl">http://<b>feetbook-login.com</b>/</div>

      <div className="sim-page__body">
        <div className="fb-wrap">
          <div className="fb-brand">
            <div className="fb-logo">feetbook</div>
            <p className="fb-tagline">
              O feetbook ajuda você a se conectar e compartilhar com as pessoas da sua vida.
            </p>
          </div>

          <div className="fb-card">
            <form onSubmit={handleFakeSubmit}>
              <input className="sim-field" type="text" placeholder="E-mail ou telefone" autoComplete="off" />
              <input className="sim-field" type="password" placeholder="Senha" autoComplete="off" />
              <button className="sim-submit" type="submit">Entrar</button>
            </form>
            <a className="fb-forgot" href="#" onClick={(e) => e.preventDefault()}>Esqueceu a senha?</a>
            <hr className="fb-divider" />
            <button className="fb-create" type="button" onClick={(e) => e.preventDefault()}>
              Criar nova conta
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feetbook
