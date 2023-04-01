<h1>Cadastro de clientes</h1>
<p>
  Esta é uma aplicação Full-Stack desenvolvida com Node.js e React para      gerenciamento de clientes.
</p>
<h3>Funcionalidades</h3>
<ul>
  <li>Cadastro de Funcionário</li>
  <li>Cadastro de Clientes</li>
  <li>Visualização de Clientes cadastrados</li>
  <li>Edição de clientes cadastrados</li>
  <li>Exclusão de Clientes cadastrados</li>
</ul>
<h3>Tecnologias Utilizadas</h3>
<ul>
  <li>Node.ts</li>
  <li>Express</li>
  <li>PostgreSQL</li>
  <li>React.ts</li>
  <li>CSS</li>
  <li>HTML</li>
  <li>TypeScript</li>
</ul>
<h3>Instalação</h3>
<ol>
  <li>
      Clone o repositório
      <pre>
        git clone https://github.com/gabrielfmaranhao/Cadastro-de-clientes.git
      </pre>
  </li>
  <li>
    Entre nos arquivos _core e project e instale as depedencias com o <code>yarn</code>
  </li>
  <li>
    Entre no arquivo _core e crie suas variáveis de dependencia de acordo com o arquivo .env.example.
    <pre>
      DATABASE_NAME=nome do banco de dados
      DATABASE_USERNAME=usuario do banco de dados
      DATABASE_PASSWORD=senha do usuario do banco de dados 
      DATABASE_HOST=localhost
      SECRECT_KEY=chave secreta
    </pre>
  </li>
  <li>
    feito o passo 3 use o comando<code>yarn typeorm migration:run -d src/data-source.ts</code>para perisistir as tabelas no banco de dados.
  </li>
  <li>
    Feito o passo antecedente inicie o servidor utilizando o comando <code>yarn dev</code>
  </li>
  <li>
    entre na pasta project e inicie aplicação usando <code>yarn start</code>
  </li>
  
</ol>

