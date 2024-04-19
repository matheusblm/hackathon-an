Documentação da API
Introdução
Esta documentação abrange todos os endpoints da API desenvolvida em NestJS para um sistema de revisões. Esta API permite a gestão de usuários, revisões, auditorias de revisões, arquivos, tags e comentários relacionados às revisões.

Configuração Inicial
Certifique-se de ter o Node.js e o NestJS CLI instalados em seu ambiente. Após clonar o repositório, execute  yarn para instalar as dependências. Para rodar o servidor localmente, use npm run start.

Endpoints
1. Usuários (Users)
Criar Usuário (POST /users)
Descrição: Cadastra um novo usuário no sistema.
Corpo da Requisição:

`
{
  "name": "John Doe",
  "password": "securepassword",
  "sex": "Male",
  "age": 30,
  "education": "Master's Degree",
  "country": "USA",
  "city": "New York",
  "state": "NY"
}
`

Resposta de Sucesso: 201 (Created)
Listar Usuários (GET /users)
Descrição: Retorna uma lista de todos os usuários cadastrados.
Obter Usuário (GET /users/:id)
Descrição: Retorna os detalhes de um usuário específico.
Atualizar Usuário (PUT /users/:id)
Descrição: Atualiza os dados de um usuário existente.
Corpo da Requisição:

`
{
  "name": "Jane Doe"
}
`

Resposta de Sucesso: 200 (OK)
Deletar Usuário (DELETE /users/:id)
Descrição: Remove um usuário do sistema.
2. Revisões (Reviews)
Criar Revisão (POST /reviews)
Descrição: Cria uma nova revisão associada a um usuário.
Corpo da Requisição:

`
{
  "userId": 1,
  "description": "Excellent product with reliable features."
}
`

Resposta de Sucesso: 201 (Created)
Listar Revisões (GET /reviews)
Descrição: Retorna todas as revisões cadastradas.
Atualizar Revisão (PUT /reviews/:id)
Descrição: Atualiza detalhes de uma revisão específica.
Deletar Revisão (DELETE /reviews/:id)
Descrição: Remove uma revisão do sistema.
3. Auditorias de Revisão (ReviewAudits)
Criar Auditoria (POST /reviewAudits)
Descrição: Registra uma auditoria para uma revisão específica, indicando aprovação ou rejeição.
Corpo da Requisição:

`
{
  "reviewId": 1,
  "accept": true,
  "comment": "This review has been verified."
}
`

Resposta de Sucesso: 201 (Created)
Listar Auditorias (GET /reviewAudits)
Descrição: Retorna todas as auditorias realizadas.
Atualizar Auditoria (PUT /reviewAudits/:id)
Descrição: Atualiza os detalhes de uma auditoria.
Deletar Auditoria (DELETE /reviewAudits/:id)
Descrição: Remove uma auditoria do sistema.
4. Arquivos (Files)
Criar Arquivo (POST /files)
Descrição: Associa um arquivo a uma revisão.
Corpo da Requisição:

`
{
  "reviewId": 1,
  "url": "http://example.com/file.pdf"
}
`

Listar Arquivos (GET /files)
Descrição: Retorna todos os arquivos cadastrados.
Atualizar Arquivo (PUT /files/:id)
Descrição: Atualiza o URL de um arquivo existente.
Deletar Arquivo (DELETE /files/:id)
Descrição: Remove um arquivo do sistema.
5. Tags
Criar Tag (POST /tags)
Descrição: Adiciona uma tag a uma revisão.
Corpo da Requisição:

`
{
  "reviewId": 1,
  "name": "Quality",
  "value": "High"
}
`

Listar Tags (GET /tags)
Descrição: Retorna todas as tags cadastradas.
Atualizar Tag (PUT /tags/:id)
Descrição: Atualiza os detalhes de uma tag.
Deletar Tag (DELETE /tags/:id)
Descrição: Remove uma tag do sistema.
6. Comentários (Comments)
Criar Comentário (POST /comments)
Descrição: Adiciona um comentário a uma revisão.
Corpo da Requisição:

`
{
  "reviewId": 1,
  "text": "This is a detailed comment about the review."
}

`

Listar Comentários (GET /comments)
Descrição: Retorna todos os comentários feitos.
Atualizar Comentário (PUT /comments/:id)
Descrição: Atualiza o texto de um comentário existente.
Deletar Comentário (DELETE /comments/:id)
Descrição: Remove um comentário do sistema.
