# Relatório ISI - Processo ETL (CSV para XML)

**Trabalho Prático I** - Integração de Sistemas de Informação (ISI)
**Licenciatura em Engenharia de Sistemas Informáticos (LESI)**

**Ano Letivo:** 2025/2026 

| Aluno | Número |
| :--- | :--- |
| Diogo Manuel Pereira Abreu | 27975 |
| Paulo Ricardo Fernandes Gonçalves |27966 |

## 1. Enquadramento e Objetivos

Este projeto demonstra a implementação de um fluxo **ETL (Extract, Transform, Load)** completo, focado na conversão de dados de clientes de um ficheiro no formato CSV para múltiplos ficheiros no formato XML

O fluxo de trabalho aborda os seguintes objetivos e processos de transformação
* **Limpeza e Normalização de Dados**
* **Validação de Campos** utilizando Expressões Regulares (Regex)
* **Geração de Logs** do processo ETL
* **Demonstrar um fluxo ETL completo** com o Pentaho e no Knime
* **Explorar as capacidades de transformação** da ferramenta

## 2. Ferramentas Utilizadas

O projeto foi desenvolvido e documentado utilizando as seguintes ferramentas:

* **Knime**.
* **Pentaho Data Integration (PDI) 9.4** (Kettle).
* **Git** para controlo de versão.

## 3. Organização do Repositório

O repositório está organizado na pasta raiz `tp01-<número de aluno>/` e segue a seguinte estrutura:

-ISI25_TP01_27975_27966/
         - README.md
         - doc/ISI25_TP01_27975_27966_doc.pdf
         - numeroaluno_PlataformaUsada/ (27966 - Knime ou 27975_Pentaho_Data_Integration)
         - dataint/       -      transformações e  jobs usados para o ETL  (data-integration)
         - data/input/    -      ficheiros com os dados de entrada
         - data/output/   -      dados de saída... para onde devem ser encaminhados os ficheiros de saída...  

## 4. Execução do Projeto (Pentaho PDI)

O processo de ETL é orquestrado pelo Job principal e deve ser executado através do Pentaho Data Integration.

### 4.1. Requisitos

1.  Instalação do **Pentaho Data Integration (PDI)** 9.4 ou superior.
2.  Acesso aos ficheiros de transformação (`.ktr`) e Job (`.kjb`) na pasta `dataint/`.

### 4.2. Fluxo de Trabalho do Job

O Job principal (`job.kjb`) executa as transformações na seguinte sequência:

1.  `Transformação de CSV para XML`.
2.  `Transformação de Criação de Tabelas`.
3.  `Transformação de Ordenar Dados nas Tabelas`.
4.  `Transformação do campo data em MM/dd/yyyy`.
5.  `Transformação da tabela "FactSales" de XML para JSON`.

### 4.3. Passos de Execução

1.  **Abrir o Pentaho Data Integration (Spoon).**
2.  **Abrir o Job Principal:** Abrir o ficheiro `data/int/job.kjb`.
3.  **Executar o Job:** Clicar no botão "Run" (o ícone de *play*).





