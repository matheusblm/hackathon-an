import { useState } from "react";

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    profissao: "",
    genero: "",
    identificacaoRacial: "",
    endereco: "",
    email: "",
    senha: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Data de Nascimento:
        <input
          type="date"
          name="dataNascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Profissão:
        <input
          type="text"
          name="profissao"
          value={formData.profissao}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Gênero:
        <input
          type="text"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Identificação Racial:
        <input
          type="text"
          name="identificacaoRacial"
          value={formData.identificacaoRacial}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Endereço:
        <input
          type="text"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Senha:
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroForm;
