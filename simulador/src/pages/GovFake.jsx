import TrainingBanner from '../components/TrainingBanner'
import PhishingReveal from '../components/PhishingReveal'
import { useSimLogin } from '../components/useSimLogin'
import './phishing.css'

const RED_FLAGS = [
  'O endereço era "gov-fake.online" — o portal real termina em gov.br.',
  'Prometia um "benefício liberado" para criar urgência e ansiedade.',
  'Pedia a senha do gov.br junto com dados do cartão — o governo nunca faz isso.',
  'O texto tinha erros e o selo oficial estava levemente diferente.',
]

function GovFake({ onExit }) {
  const { caught, handleFakeSubmit, reset } = useSimLogin()

  if (caught) {
    return (
      <PhishingReveal
        brand="o portal gov.br"
        redFlags={RED_FLAGS}
        onRetry={reset}
        onExit={onExit}
      />
    )
  }

  return (
    <div className="sim-page gov">
      <TrainingBanner onExit={onExit} />
      <div className="sim-fakeurl">http://<b>gov-fake.online</b>/beneficio</div>

      <div className="gov-header">
        <span className="gov-wordmark" aria-label="govFake">
          <span className="g">g</span><span className="o">o</span><span className="v">v</span><span className="br">Fake</span>
        </span>
        <a className="gov-link" href="#" onClick={(e) => e.preventDefault()}>Precisa de ajuda?</a>
      </div>

      <div className="sim-page__body">
        <div className="gov-card">
          <h1>Identifique-se no govFake</h1>
          <p style={{ color: '#555', fontSize: 14 }}>Digite seu CPF para criar ou acessar sua conta.</p>

          <div className="gov-alert">
            ✔ Seu benefício foi liberado! Confirme seus dados em até 24h para não perder o prazo.
          </div>

          <form onSubmit={handleFakeSubmit}>
            <label className="gov-label" htmlFor="cpf">CPF</label>
            <input id="cpf" className="sim-field" type="text" placeholder="Digite seu CPF" autoComplete="off" />
            <label className="gov-label" htmlFor="senha">Senha</label>
            <input id="senha" className="sim-field" type="password" placeholder="Digite sua senha" autoComplete="off" />
            <button className="sim-submit" type="submit">Entrar</button>
          </form>

          <p style={{ marginTop: 18 }}>
            <a className="gov-link" href="#" onClick={(e) => e.preventDefault()}>Esqueci minha senha</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GovFake
