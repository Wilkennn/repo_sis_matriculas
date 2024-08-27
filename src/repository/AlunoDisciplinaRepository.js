import Connection from './Connection.js';

export default class AlunoDisciplinaRepository {
  constructor() {
    this.connection = new Connection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mydb'
    });
  }

  getAll(callback) {
    const sql = 'SELECT * FROM Aluno_Disciplina';
    this.connection.query(sql, [], callback);
  }

  getById(Aluno_matricula, Disciplina_id, callback) {
    const sql = 'SELECT * FROM Aluno_Disciplina WHERE Aluno_matricula = ? AND Disciplina_id = ?';
    this.connection.query(sql, [Aluno_matricula, Disciplina_id], callback);
  }

  create(alunoDisciplina, callback) {
    const sql = 'INSERT INTO Aluno_Disciplina (Aluno_matricula, Disciplina_id) VALUES (?, ?)';
    this.connection.query(sql, [alunoDisciplina.Aluno_matricula, alunoDisciplina.Disciplina_id], callback);
  }

  delete(Aluno_matricula, Disciplina_id, callback) {
    const sql = 'DELETE FROM Aluno_Disciplina WHERE Aluno_matricula = ? AND Disciplina_id = ?';
    this.connection.query(sql, [Aluno_matricula, Disciplina_id], callback);
  }
}