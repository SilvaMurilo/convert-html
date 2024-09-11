const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const path = require('path');

// Função assíncrona para converter HTML em PDF
async function convertHtmlToPdf(html, outputPdfPath) {
  try {
    // Lança o navegador headless com o puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Define o conteúdo HTML na página
    await page.setContent(html, { waitUntil: 'networkidle0' });

    // Gera o arquivo PDF
    await page.pdf({
      path: outputPdfPath, // Caminho de saída do PDF
      format: 'A4',        // Formato da página
      printBackground: true, // Inclui o fundo (background) no PDF
    });

    // Fecha o navegador
    await browser.close();
    
    console.log(`PDF gerado em: ${outputPdfPath}`);
  } catch (error) {
    console.error('Erro ao converter HTML para PDF:', error);
  }
}

// Conteúdo HTML como string
const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo</title>
</head>
<body>
  <h1>Olá, Mundo!</h1>
  <p>Isso é uma string HTML.</p>
</body>
</html>
`;

// Caminho do PDF gerado
const outputPdfPath = path.resolve('outputByString.pdf');

// Converte o HTML para PDF
convertHtmlToPdf(html, outputPdfPath);
