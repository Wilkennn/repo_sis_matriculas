import UsuarioService from '../services/UsuarioService.js';

export class UsuarioController {

  async loginAluno(req, res) {
    try {
      const { login, senha } = req.body;

      const loginAluno = await UsuarioService.loginAluno(login, senha);

      if (req.query.format === 'json') {
        return res.status(200).json(loginAluno);
      }else {
        return res.render('/menu-aluno', { loginAluno });
      }

      res.json({ success: loginAluno.success, message: loginAluno.message, token: loginAluno.token, user: loginAluno.user });
  } catch (error) {
      console.error('Erro durante o login:', error);
      res.status(500).json({ message: 'Erro durante o login do usuário' });
  }
  }

  async getAll(req, res) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();      
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({
        message: 'Não foi possível buscar a lista de usuários. Por favor, tente novamente mais tarde.',
        error: error.message
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      if (isNaN(Number(id))) {
        return res.status(400).json({ message: 'ID inválido. Deve ser um número.' });
      }

      const usuario = await UsuarioService.getUsuarioById(id);

      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ message: `Usuário com ID ${id} não encontrado.` });
      }
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);

      res.status(500).json({
        message: 'Não foi possível buscar o usuário. Por favor, verifique o ID e tente novamente.',
        error: error.message,
      });
    }
  }

  async create(req, res) {
    try {
      const usuarioData = req.body;
      const newUsuario = await UsuarioService.createUsuario(usuarioData);

      if (req.query.format === 'json') {
        return res.status(201).json(newUsuario);
      } else {
        return res.render('cadastro', { success: true,  messageType: 'success', message: "Usuario criado com sucesso! <i class='fas fa-check check-icon'></i>" });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Não foi possível criar o usuário. Verifique os dados fornecidos e tente novamente.',
        error: error.message
      });
    }
  }

  async update(req, res) {
    try {

      const { id } = req.params;
      const usuarioData = req.body;
      const updatedUsuario = await UsuarioService.updateUsuario(id, usuarioData);
      if (updatedUsuario) {
        res.status(200).json({ message: 'Usuário atualizado com sucesso.', usuario: updatedUsuario });
      } else {
        res.status(404).json({ message: `Usuário com ID ${id} não encontrado para atualização.` });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Não foi possível atualizar o usuário. Verifique os dados e tente novamente.',
        error: error.message
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deleted = await UsuarioService.deleteUsuario(id);
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: `Usuário com ID ${id} não encontrado para exclusão.` });
      }
    } catch (error) {
      res.status(500).json({
        message: 'Não foi possível deletar o usuário. Verifique o ID e tente novamente.',
        error: error.message
      });
    }
  }
}
