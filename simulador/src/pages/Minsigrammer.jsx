import TrainingBanner from '../components/TrainingBanner'
import PhishingReveal from '../components/PhishingReveal'
import { useSimLogin } from '../components/useSimLogin'
import './phishing.css'

const RED_FLAGS = [
  'O endereço era "minsigrammer.net" — não é instagram.com.',
  'O nome da marca estava escrito errado de propósito.',
  'Oferecia "mais seguidores grátis" para atrair o clique.',
  'Pedia senha fora do aplicativo oficial, numa página do navegador.',
]

function Minsigrammer({ onExit }) {
  const { caught, handleFakeSubmit, reset } = useSimLogin()

  if (caught) {
    return (
      <PhishingReveal
        brand="o Instagram"
        redFlags={RED_FLAGS}
        onRetry={reset}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="sim-page ig">
      <TrainingBanner onExit={onExit} />
      <div className="sim-fakeurl">http://<b>minsigrammer.net</b>/accounts/login</div>

      <div className="sim-page__body">
        <div className="ig-card">
          <div className="ig-logo">minsigrammer</div>
          <form onSubmit={handleFakeSubmit}>
            <input className="sim-field" type="text" placeholder="Telefone, nome de usuário ou e-mail" autoComplete="off" />
            <input className="sim-field" type="password" placeholder="Senha" autoComplete="off" />
            <button className="sim-submit" type="submit">Entrar</button>
          </form>

          <div className="ig-or">OU</div>

          <a className="ig-fb" href="#" onClick={(e) => e.preventDefault()}>
            Entrar com o feetbook
          </a>
          <a className="ig-forgot" href="#" onClick={(e) => e.preventDefault()}>
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Minsigrammer
