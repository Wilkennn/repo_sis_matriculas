import Connection from '../connection/connection.js';
import { config } from '../config/config.js';

export default class UsuarioRepository {
  constructor() {
    this.connection = new Connection(config);
  }

  getAll(callback) {
    const sql = 'SELECT * FROM usuario';
    return this.connection.query(sql, [], callback);
  }

  getById(id, callback) {
    const sql = 'SELECT * FROM Usuario WHERE id = ?';
    return this.connection.query(sql, [id], callback);
  }

  create(usuario, callback) {
    const sql = 'INSERT INTO Usuario (id, nome, cpf, email, endereco, telefone, data_nascimento, login, senha, Aluno_matricula) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    return this.connection.query(sql, [usuario.id, usuario.nome, usuario.cpf, usuario.email, usuario.endereco, usuario.telefone, usuario.data_nascimento, usuario.login, usuario.senha, usuario.aluno_matricula], callback);
  }

  update(id, usuario, callback) {
    const sql = 'UPDATE Usuario SET nome = ?, cpf = ?, email = ?, endereco = ?, telefone = ?, data_nascimento = ?, login = ?, senha = ?, Aluno_matricula = ? WHERE id = ?';
    return this.connection.query(sql, [usuario.nome, usuario.cpf, usuario.email, usuario.endereco, usuario.telefone, usuario.data_nascimento, usuario.login, usuario.senha, usuario.Aluno_matricula, id], callback);
  }

  delete(id, callback) {
    const sql = 'DELETE FROM Usuario WHERE id = ?';
    return this.connection.query(sql, [id], callback);
  }
}
