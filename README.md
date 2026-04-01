# 📊 Teste0 – Integração Google Sheets com TypeScript

## 🎯 Objetivo

Este projeto tem como objetivo demonstrar a integração entre uma planilha do Google Sheets e um script automatizado utilizando Google Apps Script, com desenvolvimento local em TypeScript e versionamento com Git.

---

## ⚙️ Funcionalidades

* Leitura de dados de uma planilha (nomes e salários)
* Cálculo automático da soma dos salários
* Escrita do resultado na própria planilha
* Estrutura pronta para automações futuras

---

## 🧱 Tecnologias utilizadas

* TypeScript
* Google Apps Script
* Google Sheets
* Git

---

## 🚀 Como funciona

1. Os dados são inseridos na planilha Google (nome e salário)
2. Um script em Apps Script lê os valores da coluna de salários
3. O sistema calcula a soma total
4. O resultado é inserido automaticamente na planilha

---

## 🖥️ Estrutura do projeto

```
Teste0/
├── src/            # Código fonte em TypeScript
├── dist/           # Código compilado (JavaScript)
├── appsscript.json # Configuração do Apps Script
├── package.json    # Configuração do projeto Node
├── tsconfig.json   # Configuração do TypeScript
```

---

## 🔄 Fluxo de desenvolvimento

```
TypeScript (src/)
   ↓
Compilação (tsc)
   ↓
JavaScript (dist/)
   ↓
Deploy (clasp push)
   ↓
Execução no Google Sheets
```

---

## 📌 Observações

* O conteúdo da planilha não é versionado diretamente no Git
* Apenas o código e a estrutura do projeto são versionados
* Integração feita via clasp (CLI do Google Apps Script)

---

## 📈 Possíveis melhorias

* Automação via triggers (execução automática)
* Interface com botões na planilha
* Modularização do código
* Integração com APIs externas

---

## 👨‍💻 Autor
Mario R Silveira.
Projeto desenvolvido como prática de integração e versionamento de aplicações com Google Apps Script.
