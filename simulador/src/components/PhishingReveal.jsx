import { useState } from 'react'

// Tela educativa exibida APÓS o "envio" do formulário.
// Importante: não recebe nem exibe a senha digitada. Apenas ensina os sinais.
function PhishingReveal({ brand, redFlags, onRetry, onExit }) {
  const [altoContraste, setAltoContraste] = useState(false)

  return (
    <div className={altoContraste ? 'reveal reveal--hc' : 'reveal'}>
      <div className="reveal__card">
        <button
          type="button"
          className="reveal__hc-toggle"
          onClick={() => setAltoContraste((v) => !v)}
          aria-pressed={altoContraste}
        >
          {altoContraste ? '◑ Contraste normal' : '◐ Alto contraste'}
        </button>
        <div className="reveal__icon" aria-hidden="true">🎣</div>
        <h1 className="reveal__title">Isto era um teste de phishing!</h1>
        <p className="reveal__lead">
          Você acabou de "entrar" em uma página falsa que imitava{' '}
          <strong>{brand}</strong>. Em um ataque real, suas credenciais teriam
          sido roubadas neste momento.
        </p>

        <p className="reveal__note">
          Tranquilo: nada do que você digitou foi salvo, enviado ou registrado.
        </p>

        <h2 className="reveal__subtitle">Sinais que entregavam a fraude:</h2>
        <ul className="reveal__flags">
          {redFlags.map((flag) => (
            <li key={flag}>{flag}</li>
          ))}
        </ul>

        <div className="reveal__tips">
          <h2 className="reveal__subtitle">Como se proteger:</h2>
          <ul>
            <li>Confira sempre o endereço completo na barra do navegador.</li>
            <li>Desconfie de urgência ("sua conta será bloqueada").</li>
            <li>Não clique em links de e-mails/SMS — digite o site você mesmo.</li>
            <li>Ative a verificação em duas etapas nas suas contas.</li>
          </ul>
        </div>

        <div className="reveal__actions">
          <button type="button" className="reveal__btn" onClick={onRetry}>
            Ver a página novamente
          </button>
          <button
            type="button"
            className="reveal__btn reveal__btn--ghost"
            onClick={onExit}
          >
            Voltar ao início
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhishingReveal
