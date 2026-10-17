// Banner fixo exibido em TODAS as páginas de login simuladas.
// Deixa explícito que o ambiente é de treinamento e nunca o site real.
function TrainingBanner({ onExit }) {
  return (
    <div className="sim-banner" role="alert">
      <span className="sim-banner__dot" aria-hidden="true">⚠️</span>
      <span className="sim-banner__text">
        SIMULAÇÃO DE PHISHING — ambiente de treinamento. Nenhum dado é enviado ou salvo.
      </span>
      {onExit && (
        <button type="button" className="sim-banner__exit" onClick={onExit}>
          Voltar ao início
        </button>
      )}
    </div>
  )
}

export default TrainingBanner
