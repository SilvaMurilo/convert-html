
```markdown
# HTML to PDF Converter

Este projeto fornece dois scripts para converter HTML em PDF usando Node.js:

1. `htmlFileToPdf.js`: Converte um arquivo HTML localizado na raiz do projeto em um arquivo PDF.
2. `htmlStringToPdf.js`: Converte uma string HTML hardcoded no script em um arquivo PDF.

## Pré-requisitos

Antes de executar os scripts, você precisa ter o Node.js instalado. Baixe e instale a partir de [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone o repositório para o seu ambiente local.

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue para o diretório do projeto.

   ```bash
   cd <NOME_DO_DIRETORIO>
   ```

3. Instale as dependências do projeto.

   ```bash
   npm install
   ```

## Scripts

### Converter HTML de um Arquivo para PDF

Para gerar um PDF a partir de um arquivo HTML (`example.html`) localizado na raiz do projeto, execute:

```bash
node htmlFileToPdf.js
```

O PDF gerado será salvo como `output.pdf` na raiz do projeto.

### Converter uma String HTML Hardcoded para PDF

Para gerar um PDF a partir de uma string HTML hardcoded no script, execute:

```bash
node htmlStringToPdf.js
```

Este comando cria um PDF com base na string HTML definida dentro do script `htmlStringToPdf.js`. O PDF gerado será salvo como `output.pdf` na raiz do projeto.

## Estrutura do Projeto

- `htmlFileToPdf.js`: Script para converter HTML de um arquivo em PDF.
- `htmlStringToPdf.js`: Script para converter uma string HTML hardcoded em PDF.
- `package.json`: Arquivo de configuração do npm com as dependências do projeto.

## Exemplos de HTML

### Exemplo para `htmlFileToPdf.js`

Crie um arquivo `example.html` na raiz do projeto com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <p>Este é um exemplo de HTML para PDF.</p>
</body>
</html>
```

### Exemplo para `htmlStringToPdf.js`

No script `htmlStringToPdf.js`, você pode definir uma string HTML assim:

```javascript
const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <p>Este é um exemplo de HTML para PDF gerado a partir de uma string.</p>
</body>
</html>
`;
```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, sinta-se à vontade para enviar um pull request. Certifique-se de testar suas alterações antes de enviá-las.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---

Se precisar de ajuda ou tiver alguma dúvida, sinta-se à vontade para abrir uma issue no repositório. Ou entrar em contato pelo linkedin: https://www.linkedin.com/in/sousamurilo/