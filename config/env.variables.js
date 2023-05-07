const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: Number(process.env.PORT),
  mongoUrl: String(process.env.MONGODB_URI),
}
