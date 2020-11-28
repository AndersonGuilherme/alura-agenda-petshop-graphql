import { fetchOptions } from './config'

const listarClientes = () => 
  fetchOptions('{clientes {id, nome, cpf}}')
  .then(response => response.json())
  .then(response => response.data.clientes)

const buscarClientePorId = id => 
    fetchOptions(`{cliente(id: ${id})  { nome, cpf}}`)
    .then(response => response.json())
    .then(response => response.data.cliente)

const adicionarCliente = cliente => 
 fetchOptions(`
    mutation { 
      storeCliente(nome: "${cliente.nome}",cpf: "${cliente.cpf}" )
      {
        id, nome, cpf
      }
    }`)
    .then(response => response.json())
    .then(response => response.data.cliente)

const alterarCliente = (id, cliente) =>
  fetchOptions(`
    mutation { 
      updateCliente(id: "${id}", nome: "${cliente.nome}",cpf: "${cliente.cpf}" )
      {
        id, nome, cpf
      }
    }`)
   .then(response => response.json())
   .then(response => response.data.cliente)

const removerCliente = id => 
fetchOptions(`
  mutation { 
    destroyCliente(id: "${id}" )
  }`)
 .then(response => response.json())
 .then(response => response.data.cliente)

export default {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  alterarCliente,
  removerCliente
}