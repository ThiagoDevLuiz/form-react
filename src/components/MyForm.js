import React, { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {
  // 6 - Controlled inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');

  // tema 8
  const [bio, setBio] = useState('');

  // tema 9
  const [role, setRole] = useState('');

  const handleName = e => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  // 5 - Envio de form
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Enviando o formulário');
    console.log(name, email, bio, role);

    // 7 - Limpar form
    setName('');
    setEmail('');
    setBio('');
  };

  return (
    <div>
      {/* 5 - Envio de form  */}
      {/* 1 - Criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            // value={name}
          />
        </div>

        {/* 2 - Label envolvendo input */}
        <label>
          {/* 4 - Simplificação de manipulação de state */}
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={e => setEmail(e.target.value)}
            // value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={e => setBio(e.target.value)}
            value={bio}></textarea>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
