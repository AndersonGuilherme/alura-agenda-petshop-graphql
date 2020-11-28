# alura-agenda-petshop-graphql

Curso da alura para estudo de graphql


### FrontEnd
1. react-apollo

###### O React Apollo permite que você busque dados do seu servidor GraphQL e os use na construção de interfaces de usuário complexas e reativas usando a estrutura React. O React Apollo pode ser usado em qualquer contexto em que o React possa ser usado. No navegador, no React Native ou no Node.js quando você deseja fazer a renderização do lado do servidor.


``` javascript 
import { Query } from 'react-apollo';
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
```

2. apollo-boost

###### O Apollo Boost é uma maneira sem configuração de começar a usar o Apollo Client. 

``` javascript 
import ApolloClient from 'apollo-boost';
export const apolloClient = new ApolloClient({
  uri: `http://localhost:4000`,
})
```
3. graphql-tag


###### Utilizando graphql-tag para criaçao das querys e mutations do graphql no arquivo /graphql/pet.js
###### A tag literal do modelo gql pode ser usada para escrever concisamente uma consulta GraphQL que é analisada em um GraphQL AST padrão. É o método recomendado para passar consultas ao cliente Apollo. Embora seja desenvolvido principalmente para o Apollo Client, ele gera um GraphQL AST genérico que pode ser usado por qualquer cliente GraphQL.

``` javascript 
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
```
---

### Backend

1. graphql-yoga

###### Servidor GraphQL completo com foco em fácil configuração, desempenho e ótima experiência de desenvolvedor

``` javascript 

const { GraphQLServer } = require('graphql-yoga');

const resolvers = require('./graphql/resolvers/');
const typeDefs = require('./graphql/schemas/');

const server = new GraphQLServer({
  resolvers,
  typeDefs
});

server.start(() => {
  console.log('🚀 Server started at port: http://localhost:4000. ')
});

```



2. merge-graphql-schemas

###### Fazendo merge dos resolvers
``` javascript 
  const path = require('path');
  const { fileLoader,  mergeResolvers } = require('merge-graphql-schemas'); 

  const files = path.join(__dirname, './');

  const loaded = fileLoader(files);
  const resolvers = mergeResolvers(loaded);

  module.exports = resolvers
```


###### Fazendo merge dos schemas
``` javascript 
  const path = require('path');
  const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas'); 

  const files = path.join(__dirname, './');

  const loaded = fileLoader(files);
  const schemas = mergeTypes(loaded);
  module.exports = schemas;
```
