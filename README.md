# Relatório ISI - Processo ETL (CSV para XML)

**Trabalho Prático I** - Integração de Sistemas de Informação (ISI)
**Licenciatura em Engenharia de Sistemas Informáticos (LESI)**
[cite_start]**Ano Letivo:** 2025/2026 [cite: 261]

| Aluno | Número |
| :--- | :--- |
| Diogo Manuel Pereira Abreu | [cite_start]27975 [cite: 257] |
| Paulo Ricardo Fernandes Gonçalves | [cite_start]27966 [cite: 258] |

## 1. Enquadramento e Objetivos

[cite_start]Este projeto demonstra a implementação de um fluxo **ETL (Extract, Transform, Load)** completo, focado na conversão de dados de clientes de um ficheiro no formato CSV para múltiplos ficheiros no formato XML[cite: 288, 307].

[cite_start]O fluxo de trabalho aborda os seguintes objetivos e processos de transformação[cite: 288, 289, 290, 291]:
* [cite_start]**Limpeza e Normalização de Dados**[cite: 289].
* [cite_start]**Validação de Campos** utilizando Expressões Regulares (Regex)[cite: 290].
* [cite_start]**Geração de Logs** do processo ETL[cite: 291].
* [cite_start]**Demonstrar um fluxo ETL completo** com o Pentaho e no Knime[cite: 293].
* [cite_start]**Explorar as capacidades de transformação** da ferramenta[cite: 295].

## 2. Ferramentas Utilizadas

O projeto foi desenvolvido e documentado utilizando as seguintes ferramentas:

* [cite_start]**Knime** (Kettle)[cite: 429].
* [cite_start]**Pentaho Data Integration (PDI) 9.4** (Kettle)[cite: 429].
* [cite_start]**Git** para controlo de versão[cite: 430].

## 3. Organização do Repositório

O repositório está organizado na pasta raiz `tp01-<número de aluno>/` e segue a seguinte estrutura:

ISI25_TP01_27975_27966/
         README.md
         doc/ISI25_TP01_27975_27966_doc.pdf
         numeroaluno_PlataformaUsada/ (27966 - Knime ou 27975_Pentaho_Data_Integration)
         dataint/             transformações e  jobs usados para o ETL  (data-integration)
         data/input/      ficheiros com os dados de entrada
         data/output/   dados de saída... para onde devem ser encaminhados os ficheiros de saída...  


## 4. Execução do Projeto (Pentaho PDI)

O processo de ETL é orquestrado pelo Job principal e deve ser executado através do Pentaho Data Integration.

### 4.1. Requisitos

1.  Instalação do **Pentaho Data Integration (PDI)** 9.4 ou superior.
2.  Acesso aos ficheiros de transformação (`.ktr`) e Job (`.kjb`) na pasta `dataint/`.

### 4.2. Fluxo de Trabalho do Job

O Job principal (`job.kjb`) executa as transformações na seguinte sequência[cite: 402]:

1.  `Transformação de CSV para XML`[cite: 406].
2.  `Transformação de Criação de Tabelas`[cite: 407].
3.  `Transformação de Ordenar Dados nas Tabelas`[cite: 408].
4.  `Transformação do campo data em MM/dd/yyyy`[cite: 409].
5.  `Transformação do campo data em dd/mm/yyyy`[cite: 410].

### 4.3. Passos de Execução

1.  **Abrir o Pentaho Data Integration (Spoon).**
2.  **Abrir o Job Principal:** Abrir o ficheiro `data/int/job.kjb`.
3.  **Executar o Job:** Clicar no botão "Run" (o ícone de *play*).





