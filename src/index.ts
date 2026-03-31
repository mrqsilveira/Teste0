function somarSalarios(): void {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    const valores = sheet.getRange("B2:B").getValues();

    let soma: number = 0;

    for (let i = 0; i < valores.length; i++) {
        const valor = valores[i]?.[0];

        if (typeof valor === "number") {
            soma += valor;
        }
    }

    const ultimaLinha = sheet.getLastRow();

    sheet.getRange(ultimaLinha + 1, 1).setValue("Total");
    sheet.getRange(ultimaLinha + 1, 2).setValue(soma);
}