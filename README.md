# monitoramento-controle-energia
# TP1 - Definição do Problema e Planejamento Inicial

## 1. Objetivo do Projeto
Desenvolver uma aplicação web que permita aos usuários monitorar e analisar seu **consumo de energia elétrica em tempo real**, oferecendo relatórios e recomendações para otimizar o uso, reduzir custos e contribuir para o consumo sustentável, em conformidade com o **ODS 7 – Energia Acessível e Limpa**.

---

## 2. Problema a ser Resolvido
Muitos usuários residenciais e pequenos negócios não possuem **visibilidade clara** sobre como, quando e onde estão consumindo energia.  
Essa falta de informação resulta em **desperdícios**, **contas elevadas** e maior **impacto ambiental**.  

A solução proposta busca resolver este problema fornecendo um **dashboard inteligente de monitoramento energético**, permitindo que o usuário identifique padrões de consumo e adote medidas para otimizar o uso de energia.

---

## 3. Tipo de Solução
Será desenvolvida uma **aplicação web full-stack**, composta por:
- **Frontend**: interface gráfica responsiva (desktop e mobile).  
- **Backend**: APIs para cadastro, login, registros de consumo e relatórios.  
- **Dashboard**: gráficos e indicadores sobre consumo, metas e recomendações.  

> A escolha por uma aplicação web full-stack garante acessibilidade ampla, integração de dados e possibilidade futura de expansão para dispositivos móveis e IoT.

---

## 4. Requisitos da Aplicação

### 4.1 Requisitos Funcionais
- **RF01**: O usuário deve poder se cadastrar e realizar login no sistema.  
- **RF02**: O usuário deve registrar dados de consumo de energia (manualmente ou via integração futura com sensores).  
- **RF03**: O sistema deve exibir relatórios gráficos de consumo por dia, semana e mês.  
- **RF04**: O sistema deve gerar recomendações automáticas de economia (ex.: “Pico de consumo às 20h, avalie desligar aparelhos em stand-by”).  
- **RF05**: O usuário deve poder definir metas de consumo e acompanhar o progresso.  
- **RF06**: O sistema deve permitir exportar relatórios em PDF.  

### 4.2 Requisitos Não Funcionais
- **RNF01**: A aplicação deve ser responsiva e acessível em desktop e dispositivos móveis.  
- **RNF02**: O sistema deve armazenar dados em banco de dados seguro.  
- **RNF03**: O tempo de resposta para exibição dos gráficos deve ser inferior a 2 segundos.  
- **RNF04**: O sistema deve estar disponível 24/7 com tolerância a falhas básicas.  
- **RNF05**: A interface deve ser intuitiva e de fácil navegação.  

---

## 5. Diagrama de Casos de Uso

**Atores:**
- **Usuário**
- **Administrador**

**Casos de Uso:**
- Cadastrar-se  
- Fazer Login  
- Registrar Consumo  
- Consultar Relatórios  
- Definir Metas  
- Receber Recomendações  
- Exportar Relatórios  
- Gerenciar Usuários *(Administrador)*  

📌 O diagrama UML está disponível na pasta `/diagrams/`.

---

## 6. Planejamento no GitHub Projects
- **Project Backlog**: contém todos os requisitos funcionais listados.  
- **TODO (para TP2)**: tarefas previstas para a próxima etapa (implementação inicial do cadastro e login, estrutura do banco de dados e criação da interface básica).  
- **In Progress**: atividades em andamento.  
- **Done**: atividades concluídas.  

---
