// Controle flutuante para aumentar/diminuir o tamanho de tudo na tela.
// Útil na projeção da oficina e para os participantes idosos.
const STEPS = [1, 1.15, 1.3, 1.5]

function FontSizeControl({ zoom, onChange }) {
  const idx = Math.max(0, STEPS.indexOf(zoom))

  return (
    <div className="fontctl" role="group" aria-label="Tamanho da letra">
      <span className="fontctl__label">Tamanho da letra</span>
      <button
        type="button"
        onClick={() => onChange(STEPS[Math.max(0, idx - 1)])}
        disabled={idx <= 0}
        aria-label="Diminuir letra"
      >
        A−
      </button>
      <button
        type="button"
        onClick={() => onChange(STEPS[Math.min(STEPS.length - 1, idx + 1)])}
        disabled={idx >= STEPS.length - 1}
        aria-label="Aumentar letra"
      >
        A+
      </button>
    </div>
  )
}

export default FontSizeControl
