Documentação da API
Esta API pode ser testada através do Swagger UI ou Postman.

Documentação Swagger: http://localhost:3000/api-docs

Também podes importar os endpoints para o Postman usando o link do Swagger ou criar uma coleção manualmente.

Endpoints Disponíveis

Empresas
Método      Rota	                Descrição
POST        /empresa/save	        Criar um nova empresa
GET         /empresa/list	        Listar todas os empresas
GET	        /empresa/list/:id  	    Obter empresa por ID
PUT	        /empresa/update/:id	    Atualizar Empresa por ID
DELETE	    /empresa/delete/:id	    Remover Empresa por ID

Produtores
Método      Rota	                Descrição
POST        /produtor/save	        Criar um novo produtor
GET         /produtor/list	        Listar todos os produtores
GET	        /produtor/list/:id  	Obter produtor por ID
PUT	        /produtor/update/:id	Atualizar produtor por ID
DELETE	    /produtor/delete/:id	Remover produtor por ID

Técnicos
Método	    Rota	                Descrição
POST	    /tecnico/save	        Criar um novo técnico
GET	        /tecnico/list	        Listar todos os técnicos
GET 	    /tecnico/list/:id   	Obter técnico por ID
PUT 	    /tecnico/update/:id	    Atualizar técnico por ID
DELETE  	/tecnico/delete/:id	    Remover técnico por ID

Campanhas
Método	    Rota                	Descrição
POST	    /campanha/save       	Criar uma nova campanha
GET	        /campanha/list       	Listar todas as campanhas
GET     	/campanha/list/:id    	Obter campanha por ID
PUT     	/campanha/update/:id	Atualizar campanha por ID
DELETE  	/campanha/delete/:id	Remover campanha por ID

Como Testar
Podes testar a API de duas formas:

Swagger UI
Acede a: http://localhost:3000/api-docs


Postman
Copia os Endpoints fornecidos acima.