import { useState } from 'react'

// Hook compartilhado pelas páginas de login simuladas.
// Ponto central de segurança: o submit NUNCA lê, guarda ou envia a senha.
// Ele apenas descarta o evento e aciona a tela educativa.
export function useSimLogin() {
  const [caught, setCaught] = useState(false)

  function handleFakeSubmit(event) {
    event.preventDefault()
    // Intencionalmente não lemos event.target.elements nem o state dos campos.
    // Nada é persistido, nada é transmitido. Só mostramos a revelação.
    setCaught(true)
  }

  function reset() {
    setCaught(false)
  }

  return { caught, handleFakeSubmit, reset }
}
