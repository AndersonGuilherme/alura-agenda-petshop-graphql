import graphql from 'graphql-tag'

export const LISTAR_PETS = graphql`
    query {
        pets {
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
    }
`