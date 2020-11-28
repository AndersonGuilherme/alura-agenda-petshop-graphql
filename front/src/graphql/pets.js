import graphql from 'graphql-tag'

export const LISTAR_PETS = graphql`
    query {
        pets {
            id
            nome
            tipo
            dono { 
                id
                nome
            }
            observacoes
        }
    }
`
export const ADICIONAR_PET = graphql`
    mutation storePet(
        $nome: String!
        $donoId: Int!
        $tipo: String
        $observacoes: String
    ) {
        storePet(
            nome: $nome
            donoId: $donoId
            tipo: $tipo
            observacoes: $observacoes
        ) {
            nome
        }
    }`

export const BUSCAR_PET = graphql`
 query pet($id: ID!) {
   pet(id: $id) {
     id
     nome
     tipo
     observacoes
     dono {
       id
       nome
     }
   }
 }
`