"use strict";
function somarSalarios() {
    var _a;
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const valores = sheet.getRange("B2:B").getValues();
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        const valor = (_a = valores[i]) === null || _a === void 0 ? void 0 : _a[0];
        if (typeof valor === "number") {
            soma += valor;
        }
    }
    const ultimaLinha = sheet.getLastRow();
    sheet.getRange(ultimaLinha + 1, 1).setValue("Total");
    sheet.getRange(ultimaLinha + 1, 2).setValue(soma);
}
