function somarSalarios(): void {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  const ultimaLinha = sheet.getLastRow();

  // Não faz nada se não houver dados
  if (ultimaLinha < 2) return;

  // Pega apenas os dados existentes (coluna B, a partir da linha 2)
  const valores = sheet.getRange(2, 2, ultimaLinha - 1, 1).getValues();

  let soma = 0;

  for (let i = 0; i < valores.length; i++) {
    const valor = valores[i][0];

    if (typeof valor === "number") {
      soma += valor;
    }
  }

  // Define uma linha fixa para o total
  const linhaTotal = 10;

  sheet.getRange(linhaTotal, 1).setValue("Total");
  sheet.getRange(linhaTotal, 2).setValue(soma);
}


// 🔥 Automação: executa ao editar a planilha
function onEdit(e: GoogleAppsScript.Events.SheetsOnEdit): void {
  const range = e.range;

  // Só executa se:
  // - Coluna B (salários)
  // - Linhas acima do total
  if (range.getColumn() === 2 && range.getRow() >= 2 && range.getRow() < 10) {
    somarSalarios();
  }
}