const executaQuery = require('../database/queries')

class Servico {
  lista() {
    const sql = 'SELECT * FROM Servicos';
    return executaQuery( sql).then(response => response)
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Servicos WHERE id=${parseInt(id)}`
    return executaQuery( sql).then(response => response[0])
  }

  adiciona(item) {
    const { nome, preco, descricao } = item
    const sql = `INSERT INTO Servicos(nome, Preco, Descricao) VALUES('${nome}', ${preco}, '${descricao}')`
    return executaQuery( sql).then(response => ({
      id: response.insertId,
      nome, 
      preco, 
      descricao
    }))
  }

  atualiza( novoItem) {
    const { nome, preco, descricao, id } = novoItem
    const sql = `UPDATE Servicos SET nome='${nome}', Preco=${preco}, Descricao='${descricao}' WHERE id=${id}`
    return executaQuery( sql).then(() => novoItem);
  }

  deleta({id}) {
    const sql = `DELETE FROM Pets WHERE id=${id}`;
    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Servico
