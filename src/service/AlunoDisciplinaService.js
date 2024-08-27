import AlunoDisciplinaRepository from '../repository/AlunoDisciplinaRepository.js';

export default class AlunoDisciplinaService {
  constructor() {
    this.alunoDisciplinaRepository = new AlunoDisciplinaRepository();
  }

  listarTodos(callback) {
    return this.alunoDisciplinaRepository.getAll(callback);
  }

  buscarPorId(Aluno_matricula, Disciplina_id, callback) {
    return this.alunoDisciplinaRepository.getById(Aluno_matricula, Disciplina_id, callback);
  }

  criar(alunoDisciplina, callback) {
    return this.alunoDisciplinaRepository.create(alunoDisciplina, callback);
  }

  deletar(Aluno_matricula, Disciplina_id, callback) {
    return this.alunoDisciplinaRepository.delete(Aluno_matricula, Disciplina_id, callback);
  }
}
