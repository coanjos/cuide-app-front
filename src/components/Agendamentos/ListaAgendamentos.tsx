import { useEffect, useState } from "react"
import user from "../../models/user"
import AgendamentosCliente from "./AgendamentosCliente"
import AgendamentosPrestador from "./AgendamentosPrestador"

const verificaLogin = (usuario: user | null) => {
  if (usuario === null) {
    return <div>Por favor, realize login.</div>
  } else if (usuario.categoria === 'CLIENTE') {
    return <AgendamentosCliente />
  } else {
    return <AgendamentosPrestador />
  }  
}

export default function ListaAgendamentos() {

  const [usuario, setUser] = useState<user | null>(null)

  useEffect(() => {
    const usuarioLocalStorage = localStorage.getItem('user');
    if (usuarioLocalStorage) {
      setUser(JSON.parse(usuarioLocalStorage));
    }    
  }, []);

  return (
    verificaLogin(usuario)
  )
}
