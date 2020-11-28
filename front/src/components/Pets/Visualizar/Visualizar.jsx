import React from 'react'
import { Query } from 'react-apollo'
// import petsApi from '../../../api/pets'

import {BUSCAR_PET} from '../../../graphql/pets'
class Visualizar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: '',
      dono: '',
      tipo: '',
      observacoes: ''
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    // petsApi.buscarPetPorId(id)
    //   .then(pet => this.setState({
    //     nome: pet.nome,
    //     tipo: pet.tipo,
    //     dono: pet.donoId,
    //     observacoes: pet.observacoes
    //   }))
  }

  render() {
    return (
      <Query query={BUSCAR_PET} variables={{ id: this.props.match.params.id }}>
        {
          ({ data }) => {
           const pet = (data && data.pet) || {}
           if(pet){
            return (<div>
              <h1>Visualizar Pet</h1>
              <p>Nome: {pet.nome && pet.nome}</p>
              <p>Tipo: {pet.tipo && pet.tipo}</p>
              <p>Dono: {pet.dono && pet.dono.nome}</p>
              <p>Observações: {pet.observacoes && pet.observacoes}</p>
            </div>)
            }
          }
        }
      </Query>
    )
  }
}

export default Visualizar