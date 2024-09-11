const fs = require('fs-extra');
const puppeteer = require('puppeteer');
const path = require('path');

// Função assíncrona para converter HTML em PDF
async function convertHtmlToPdf(htmlFilePath, outputPdfPath) {
  try {
    // Lê o conteúdo do arquivo HTML
    const html = await fs.readFile(htmlFilePath, 'utf8');

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

// Caminho do arquivo HTML e do PDF gerado
const htmlFilePath = path.resolve('example.html');
const outputPdfPath = path.resolve('outputByFile.pdf');

// Converte o HTML para PDF
convertHtmlToPdf(htmlFilePath, outputPdfPath);
