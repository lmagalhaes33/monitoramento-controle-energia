// routes/auth.routes.js

const express = require('express');
const router = express.Router();

// ----------------------------------------------------------------------
// Rotas de Autenticação (TP2)
// ----------------------------------------------------------------------

// Rota para Cadastro de novo usuário
// RF: Cadastro de Usuário
router.post('/register', (req, res) => {
    // **TODO TP2:**
    // 1. Receber { nome, email, senha } do req.body.
    // 2. Validar os dados.
    // 3. Criptografar a senha (usando bcrypt).
    // 4. Salvar o novo usuário no PostgreSQL.
    // 5. Retornar status 201 ou 400.
    res.status(501).json({ message: 'Rota de Cadastro (register) ainda não implementada no backend.' });
});

// Rota para Login de usuário
// RF: Login de Usuário
router.post('/login', (req, res) => {
    // **TODO TP2:**
    // 1. Receber { email, senha } do req.body.
    // 2. Buscar o usuário no PostgreSQL.
    // 3. Comparar a senha (usando bcrypt.compare).
    // 4. Gerar um Token JWT se as credenciais estiverem corretas.
    // 5. Retornar o token.
    res.status(501).json({ message: 'Rota de Login (login) ainda não implementada no backend.' });
});

// Rota para o futuro Módulo de Consumo (TP3)
// const consumptionRoutes = require('./consumption.routes');
// router.use('/consumption', consumptionRoutes);

module.exports = router;
