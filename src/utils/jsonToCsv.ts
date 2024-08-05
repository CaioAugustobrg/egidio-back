import fs from 'fs';
import { exec } from 'child_process';

// Função para converter dados em CSV
function jsonToCsv(items: any[]): string {
    const header = Object.keys(items[0]);
    const headerString = header.join(',');

    const replacer = (key: string, value: any): any => value ?? '';

    // Cria as linhas CSV
    const rowItems = items.map((row: { [key: string]: any }) =>
        header
            .map((fieldName) => JSON.stringify(row[fieldName], replacer))
            .join(',')
    );

    const csv = [headerString, ...rowItems].join('\r\n');

    return csv;
}

async function saveCsvToFileAndOpen(items: any[], filePath: string): Promise<void> {
    const csv = jsonToCsv(items);

    // Salva o arquivo CSV
    fs.writeFile(filePath, csv, (err) => {
        if (err) {
            console.error('Erro ao salvar o arquivo CSV:', err);
        } else {
            console.log('Arquivo CSV salvo com sucesso:', filePath);

            // Abre o arquivo CSV com o aplicativo padrão
            let openCommand: string;

            if (process.platform === 'darwin') {
                openCommand = `open ${filePath}`; // macOS
            } else if (process.platform === 'win32') {
                openCommand = `start ${filePath}`; // Windows
            } else {
                openCommand = `xdg-open ${filePath}`; // Linux
            }

            exec(openCommand, (error) => {
                if (error) {
                    console.error('Erro ao abrir o arquivo:', error);
                }
            });
        }
    });
}

// Exporta a função para uso externo
export { jsonToCsv, saveCsvToFileAndOpen };
