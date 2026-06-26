# weather-api
API REST de previsão do tempo desenvolvida com Node.js e Express. Consome dados meteorológicos de uma API externa e retorna informações climáticas em formato JSON.
# 🌦️ Weather API

Uma API REST de previsão do tempo desenvolvida com **Node.js** e **Express**, que consome dados da API **Visual Crossing Weather** utilizando a **Fetch API**. O projeto foi desenvolvido com foco em boas práticas de desenvolvimento backend, arquitetura em camadas, tratamento de erros, cache com Redis e proteção contra abuso da API.

---

## 🚀 Demonstração

### Requisição

```http
GET /weather/barbacena
```

### Resposta

```json
{
  "city": "Barbacena",
  "temperature": 22.5,
  "humidity": 70,
  "condition": "Partially cloudy"
}
```

---

# 📋 Funcionalidades

- ✅ Consulta do clima por cidade
- ✅ Consumo de API externa (Visual Crossing)
- ✅ Utilização da Fetch API (sem Axios)
- ✅ Tratamento de erros
- ✅ Arquitetura em camadas (Routes + Services)
- ✅ Variáveis de ambiente com dotenv
- ✅ Cache com Redis (opcional)
- ✅ Rate Limiting para proteção da API
- ✅ Respostas JSON padronizadas

---

# 🛠️ Tecnologias

- Node.js
- Express
- Fetch API
- Visual Crossing Weather API
- Redis
- express-rate-limit
- dotenv

---

# 📁 Estrutura do Projeto

```text
weather-api/
│
├── src/
│   ├── config/
│   │   └── redis.js
│   │
│   ├── services/
│   │   └── weatherService.js
│   │
│   └── server.js
│
├── .env
├── package.json
├── package-lock.json
└── README.md
```

---

# ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/weather-api.git
```

Entre na pasta:

```bash
cd weather-api
```

Instale as dependências:

```bash
npm install
```

---

# 🔑 Configuração

Crie um arquivo **.env**

```env
PORT=3000

WEATHER_API_KEY=SUA_CHAVE_DA_VISUAL_CROSSING

REDIS_URL=redis://localhost:6379
```

---

# ▶️ Executando a aplicação

```bash
node src/server.js
```

Servidor iniciado:

```text
Servidor rodando na porta 3000
```

---

# 🌐 Endpoints

## Buscar clima

```http
GET /weather/:city
```

### Exemplo

```http
GET /weather/londres
```

### Resposta

```json
{
    "city": "London",
    "temperature": 18.7,
    "humidity": 65,
    "condition": "Partially cloudy"
}
```

---

# ❌ Tratamento de Erros

### Cidade inexistente

Status HTTP

```http
404 Not Found
```

Resposta

```json
{
    "error": "Cidade não encontrada"
}
```

---

### Erro interno

Status HTTP

```http
500 Internal Server Error
```

Resposta

```json
{
    "error": "Erro interno no servidor"
}
```

---

# ⚡ Cache com Redis

O projeto utiliza Redis para armazenar temporariamente os dados das consultas.

Fluxo:

```text
Cliente
    │
    ▼
Verifica Cache
    │
 ┌──┴─────────────┐
 │                │
 ▼                ▼
Encontrou?      Não encontrou
 │                │
 ▼                ▼
Retorna Cache   Consulta API
                    │
                    ▼
             Salva no Redis
                    │
                    ▼
             Retorna ao Cliente
```

### Benefícios

- Redução de chamadas para a API externa
- Maior desempenho
- Menor tempo de resposta
- Cache com expiração automática

> **Observação:** Caso o Redis esteja indisponível, a aplicação continua funcionando normalmente, realizando a consulta diretamente na API externa.

---

# 🛡️ Rate Limiting

Para evitar abuso da API, foi implementado o middleware **express-rate-limit**.

Configuração:

- Máximo de **100 requisições**
- Janela de **15 minutos**

Quando o limite é excedido:

Status HTTP

```http
429 Too Many Requests
```

Resposta

```json
{
    "error": "Muitas requisições. Tente novamente mais tarde."
}
```

---

# 🧠 Arquitetura

```text
                Cliente
                   │
                   ▼
             Express Route
                   │
                   ▼
          Weather Service
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
     Redis Cache      Visual Crossing API
```

---

# 📚 Conceitos aplicados

- APIs REST
- Express.js
- Fetch API
- Async/Await
- Tratamento de exceções
- Variáveis de ambiente
- Service Layer
- Cache
- Redis
- Rate Limiting
- Organização de projeto
- Clean Code

---

# 📈 Melhorias Futuras

- Autenticação com JWT
- Testes automatizados
- Docker
- Deploy na Render
- Documentação com Swagger/OpenAPI
- Logs com Winston
- Monitoramento de performance

---

# 👨‍💻 Autor

**Daniel Araújo**

Projeto desenvolvido para estudos de **Node.js**, **Express**, **APIs REST** e **Boas Práticas de Backend**, com foco na construção de aplicações escaláveis e prontas para produção.

---

## ⭐ Se este projeto foi útil para você

Deixe uma ⭐ no repositório para apoiar o projeto.
