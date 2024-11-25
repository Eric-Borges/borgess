// Form.jsx
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Formulário enviado! Nome: ${name}, Email: ${email}`);
  };

  return (
    <div className="form-container">
      <h2>Formulario de Contato</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu email"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Enviar
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Form;
