const executaQuery = require('../database/queries')

class Pet {
  lista() {
    const sql = `SELECT Pets.*, Clientes.id as donoId,
      Clientes.nome as donoNome,
      Clientes.cpf as donoCpf
      FROM Pets
      INNER JOIN 
        Clientes on Clientes.id = Pets.donoId`;

    return executaQuery(sql).then(pets => {
      return pets.map((pet) => ({
        id: pet.id,
        nome: pet.nome,
        tipo: pet.tipo,
        observacoes: pet.observacoes,
        dono: { 
          id: pet.donoId,
          nome: pet.donoNome,
          cpf: pet.donoCpf
        }
      })
    )})
  }

  buscaPorId(id) {
    const sql = `SELECT Pets.*, Clientes.id as donoId,
    Clientes.nome as donoNome,
    Clientes.cpf as donoCpf
    FROM Pets
    INNER JOIN 
      Clientes on Clientes.id = Pets.donoId
    WHERE Pets.id=${parseInt(id)}`;
    return executaQuery(sql).then(response => ({
      id: response[0].id,
      nome: response[0].nome,
      tipo: response[0].tipo,
      observacoes: response[0].observacoes,
      dono: { 
        id: response[0].donoId,
        nome: response[0].donoNome,
        cpf: response[0].donoCpf
      }
    }))
  }

  adiciona(item) {
    const { nome, donoId, tipo, observacoes } = item
    const sql = `INSERT INTO Pets(nome, donoId, tipo, observacoes) VALUES('${nome}', ${donoId}, '${tipo}', '${observacoes}')`;
    return executaQuery(sql).then(response => ({
      id: response.insertId,
      nome,
      donoId,
      tipo,
      observacoes
    }))
  }

  atualiza(novoItem) {
    const { nome, donoId, tipo, observacoes, id } = novoItem
    const sql = `UPDATE Pets SET nome='${nome}', donoId=${donoId}, tipo='${tipo}', observacoes='${observacoes}' WHERE id=${id}`;
    return executaQuery(sql).then(() => novoItem)
  }

  deleta({id}) {
    const sql = `DELETE FROM Pets WHERE id=${id}`;
    return executaQuery(sql).then(() => id)
  }
}

module.exports = new Pet
