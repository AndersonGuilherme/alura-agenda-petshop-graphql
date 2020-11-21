const executaQuery = require('../database/queries')

class Cliente {
  lista(res) {
    const sql = 'SELECT * FROM Clientes; SELECT * FROM Pets;'
    return executaQuery(sql).then(response => {
      const clientes = response[0];
      const pets = response[1];
      const teste = clientes.map(cliente => {
        cliente.pets = pets.filter(pet => pet.donoId === cliente.id);
        return cliente
      })
    })

  }

  buscaPorId( id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}; SELECT * FROM Pets;`
    return executaQuery(sql).then(response => { 
      const cliente = response[0][0];
      cliente.pets = response[1];
      return cliente
    });
  }

  adiciona( item) {
    const { nome, cpf } = item
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`
    return executaQuery(sql).then( response => ({
      id: response.insertId,
      nome,
      cpf
    }));
  }

  atualiza( novoItem ) {
    const { id, nome, cpf } = novoItem
    const sql = `UPDATE Clientes SET nome='${nome}', CPF='${cpf}' WHERE id=${id}`
    return executaQuery(sql).then(() => novoItem);
  }

  deleta( item ) {
    const { id } = item
    const sql = `DELETE FROM Clientes WHERE id=${id}`
    return executaQuery(sql).then(() => id);
  }
}

module.exports = new Cliente
