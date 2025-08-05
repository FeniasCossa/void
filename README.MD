# API - Teste de Candidatura - Void

Esta API foi desenvolvida para gerenciar Empresas, Campanhas, Técnicos e Produtores em um sistema.  

---

## Funcionalidades

- Cadastro, listagem, atualização e remoção de Empresas  
- Cadastro, listagem, atualização e remoção de Campanhas  
- Cadastro, listagem, atualização e remoção de Técnicos  
- Cadastro, listagem, atualização e remoção de Produtores  
- Associação de Produtores a Técnicos em campanhas específicas  
- Transferência de Produtores entre Técnicos  
- Listagem de Produtores por Técnico  

---

## Como testar a API

### 1. Via Swagger (Documentação interativa)

A API possui documentação automática integrada com Swagger, que permite testar todos os endpoints via interface web.

- Acesse: `http://localhost:3000/api-docs`
- Navegue pelos endpoints, visualize os parâmetros e faça chamadas diretamente pelo navegador.

### 2. Via Postman

Você pode usar o Postman para testar a API utilizando os seguintes endpoints:

| Método | Endpoint                 | Descrição                          |
|--------|--------------------------|----------------------------------|
| POST   | `/empresa/save`           | Criar uma nova empresa            |
| GET    | `/empresa/list`           | Listar todas as empresas          |
| GET    | `/empresa/list/:id`       | Obter empresa por ID              |
| PUT    | `/empresa/update/:id`     | Atualizar empresa por ID          |
| DELETE | `/empresa/delete/:id`     | Remover empresa por ID            |

| Método | Endpoint                 | Descrição                          |
|--------|--------------------------|----------------------------------|
| POST   | `/campanha/save`          | Criar nova campanha               |
| GET    | `/campanha/list`          | Listar todas campanhas            |
| GET    | `/campanha/list/:id`      | Obter campanha por ID             |
| PUT    | `/campanha/update/:id`    | Atualizar campanha por ID         |
| DELETE | `/campanha/delete/:id`    | Remover campanha por ID           |

| Método | Endpoint                 | Descrição                          |
|--------|--------------------------|----------------------------------|
| POST   | `/tecnico/save`           | Criar novo técnico                |
| GET    | `/tecnico/list`           | Listar todos técnicos             |
| GET    | `/tecnico/list/:id`       | Obter técnico por ID              |
| PUT    | `/tecnico/update/:id`     | Atualizar técnico por ID          |
| DELETE | `/tecnico/delete/:id`     | Remover técnico por ID            |

| Método | Endpoint                  | Descrição                         |
|--------|---------------------------|---------------------------------|
| POST   | `/produtor/save`           | Criar novo produtor              |
| GET    | `/produtor/list`           | Listar todos produtores          |
| GET    | `/produtor/list/:id`       | Obter produtor por ID            |
| PUT    | `/produtor/update/:id`     | Atualizar produtor por ID        |
| DELETE | `/produtor/delete/:id`     | Remover produtor por ID          |

| Método | Endpoint                     | Descrição                         |
|--------|------------------------------|---------------------------------|
| POST   | `/produtor-campanha/atribuir`| Atribuir produtor a técnico      |
| PUT    | `/produtor-campanha/transferir` | Transferir produtor entre técnicos |
| GET    | `/tecnico/:id/produtores` - (Tem pequenos problemas)   | Listar produtores de um técnico  |

---

## Rodando o projeto localmente

1. Clone o repositório  
2. Configure seu banco de dados MySQL e atualize o arquivo de configuração (`config/db.js`)  
3. Instale as dependências:  
   ```bash
   npm install
