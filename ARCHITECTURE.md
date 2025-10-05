Arquitetura da Plataforma de Monitoramento de Energia

Este documento detalha o projeto arquitetural da aplicação web full-stack desenvolvida para a ODS 7 – Energia Acessível e Limpa, utilizando o Modelo C4 para comunicação em diferentes níveis de abstração.

I. Escolhas de Tecnologias (Stack)

Para construir uma aplicação responsiva, escalável e segura (Requisitos Não Funcionais), optamos pela seguinte stack tecnológica:
Frontend: React.js (Framework robusto para Single Page Applications (SPAs). Permite interfaces reativas e de alto desempenho, essencial para a visualização de relatórios em tempo real.)
Backend (API): Node.js + Express (Ambiente de execução rápido, ideal para APIs com alta concorrência. Utiliza JavaScript (ou TypeScript), unificando a linguagem full-stack.)
Banco de Dados: PostgreSQL (Banco de dados relacional maduro, conhecido por sua estabilidade e integridade de dados. É otimizado para lidar com séries temporais, o que é crucial para armazenar o histórico de consumo de energia.)
Autenticação: 	JSON Web Tokens (JWT) - Padrão stateless e seguro para autenticação de APIs REST.

II. Projeto Arquitetural (Modelo C4)
Com certeza! A primeira entrega (que é a finalização do TP2 com a documentação do TP3) exige que você organize e formalize o que discutimos.

O objetivo agora é criar a página de documentação da arquitetura no seu repositório (por exemplo, um arquivo ARCHITECTURE.md ou dentro da pasta /docs) e garantir que o GitHub Projects esteja pronto para o TP3.

1. Documentação da Arquitetura (ARCHITECTURE.md)

Crie um arquivo de documentação com o seguinte conteúdo e estrutura:

ARCHITECTURE.md (Documentação da Arquitetura)

Arquitetura da Plataforma de Monitoramento de Energia

Este documento detalha o projeto arquitetural da aplicação web full-stack desenvolvida para a ODS 7 – Energia Acessível e Limpa, utilizando o Modelo C4 para comunicação em diferentes níveis de abstração.

I. Escolhas de Tecnologias (Stack)

Para construir uma aplicação responsiva, escalável e segura (Requisitos Não Funcionais), optamos pela seguinte stack tecnológica:
Camada	Tecnologia Principal	Racional/Justificativa
Frontend	React.js	Framework robusto para Single Page Applications (SPAs). Permite interfaces reativas e de alto desempenho, essencial para a visualização de relatórios em tempo real.
Backend (API)	Node.js + Express	Ambiente de execução rápido, ideal para APIs com alta concorrência. Utiliza JavaScript (ou TypeScript), unificando a linguagem full-stack.
Banco de Dados	PostgreSQL	Banco de dados relacional maduro, conhecido por sua estabilidade e integridade de dados. É otimizado para lidar com séries temporais, o que é crucial para armazenar o histórico de consumo de energia.
Autenticação	JSON Web Tokens (JWT)	Padrão stateless e seguro para autenticação de APIs REST.

II. Projeto Arquitetural (Modelo C4)

A arquitetura segue o padrão de Arquitetura em Camadas e é visualizada usando o Modelo C4:

1. Nível: Contexto (System Context Diagram)

Este nível mostra como a Plataforma de Monitoramento interage com o mundo externo.

    Usuário (A): Interage com a Plataforma via web para visualizar relatórios e receber recomendações.

    Administrador (A): Gerencia usuários e configurações do sistema.

    Serviço de Dados de Medição (Sistema Externo): Simulação/Integração futura para fornecer os dados brutos de KWh.

Usuaario ⟷ Plataforma de Monitoramento de Energia ⟵ Servic¸​o de Dados de Medição

2. Nível: Contêiner (Container Diagram)

Este nível mostra a estrutura das grandes peças de software (Contêineres) que compõem a solução:

    Aplicação Web (Frontend - React): Interface de usuário rodando no navegador do cliente. Comunica-se exclusivamente com a API Backend via HTTP/S.

    API Backend (Node.js/Express): Servidor de aplicação que contém toda a lógica de negócio, autenticação e acesso ao banco de dados. Expõe uma API REST.

    Banco de Dados (PostgreSQL): Persiste os dados (Usuários, Consumo, Metas).
Aplicação Web ⟷ API Backend ⟷ Banco de Dados 

3. Nível: Componentes (Component Diagram - Foco no Backend)

Este nível detalha os principais agrupamentos lógicos dentro da API Backend:

    Módulo de Autenticação: Lógica de login, cadastro, hashing de senha (bcrypt) e geração/validação de Tokens JWT.

    Módulo de Consumo: Recebe e armazena os registros de KWh no banco de dados.

    Módulo de Relatórios: Lógica de agregação de dados e cálculo de métricas (consumo diário, mensal, picos).

    Módulo de Recomendações: Lógica que compara o consumo atual com as metas e regras para gerar as dicas de otimização.



III. Justificativa do Modelo Escolhido
A escolha pelo Modelo C4 e por uma Arquitetura em Camadas (separação clara de Frontend, Backend e DB) é justificada por:

    Separação de Preocupações (Coesão): Cada camada tem uma responsabilidade única. O backend foca na segurança e lógica, o frontend na UX.

    Facilidade de Colaboração: Diferentes desenvolvedores podem trabalhar simultaneamente no React e no Node.js com interfaces bem definidas (a API REST).

    Manutenibilidade: A estrutura modular permite que novos requisitos (como um novo relatório ou tipo de recomendação) sejam adicionados sem impactar todo o sistema.
  




