import dotenv from 'dotenv';

dotenv.config();

const env = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST
}


export default env;