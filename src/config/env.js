import dotenv from 'dotenv';

dotenv.config();

const env = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'mongodb://localhost:27017/crud-mongo',
}


export default env;