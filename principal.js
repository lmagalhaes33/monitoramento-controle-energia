// principal.js

// Importa o framework Express e o módulo 'dotenv' para variáveis de ambiente
const express = require('express');
const dotenv = require('dotenv');

// Configura o dotenv para carregar as variáveis do arquivo .env
dotenv.config();

// Inicializa o aplicativo Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON (necessário para receber dados do frontend)
app.use(express.json());

// ----------------------------------------------------------------------
// Configuração do Banco de Dados (Simulação)
// Em um projeto real, a conexão com o PostgreSQL seria configurada aqui
// ou em um arquivo de configuração separado.
// ----------------------------------------------------------------------

const dbConnect = () => {
    // Exemplo: Inicializa a conexão com o PostgreSQL aqui
    console.log('🔗 Tentando conectar ao banco de dados...');
    // Se a conexão for bem-sucedida:
    console.log('✅ Conexão com o DB estabelecida com sucesso!');
    // **NOTA:** Substitua isso pela sua lógica de conexão real (ex: Sequelize ou pg).
};

// ----------------------------------------------------------------------
// Rotas da Aplicação
// Aqui você "monta" os módulos de rota
// ----------------------------------------------------------------------

// Importa o módulo de rotas de autenticação (vamos criar em seguida)
const authRoutes = require('./routes/auth.routes');

// Monta as rotas de autenticação (login e cadastro)
// Ex: /api/auth/register, /api/auth/login
app.use('/api/auth', authRoutes);

// Rota de teste simples
app.get('/', (req, res) => {
    res.send('API de Monitoramento de Energia está rodando!');
});

// ----------------------------------------------------------------------
// Inicialização do Servidor
// ----------------------------------------------------------------------

try {
    // 1. Conecta ao banco de dados
    dbConnect(); 
    
    // 2. Inicia o servidor
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
        console.log(`Acesse: http://localhost:${PORT}`);
    });

} catch (error) {
    console.error('❌ Erro ao iniciar a aplicação:', error.message);
    process.exit(1);
}
