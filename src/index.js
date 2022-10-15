// framework
const express = require ('express');
// segurança das requisições
const helmet = require('helmet');
// middleware - observa a origem das requisições
const morgan = require('morgan');
// biblioteca para conversão de protocolos... https
const cors = require('cors');
// conexão com banco de dados
const mongoose = require('mongoose');
// configurações - secret, db, etc
const cfg = require("./config/cfg");
// rotas = endpoints
const routefinanceiro = require("./routes/financeiro");
// not found
const notfound = require("./middleware/notfound");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan());
app.use(cors());

mongoose.connect(cfg.db,{useNewUrlParser:true, useUnifiedTopology:true});

app.use("/api/financeiro", routefinanceiro);

app.listen(3001, () => console.log("Servidor online..."));

app.use(notfound);