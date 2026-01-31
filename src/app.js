import express from "express";
import routerApp from "./routes/index.routes.js";
import exphbs from 'express-handlebars'
import path from "node:path";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import errorHandler from "./middlewares/error.middleware.js";
const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.set('views',path.join(__dirname,'views'))
app.engine('.hbs',exphbs.engine({
    layoutsDir:path.join(app.get('views'),'layouts'),
    defaultLayout:'main',
    extname:'.hbs',
    partialsDir:path.join(app.get('views'),'partials')
}))
app.set('view engine','.hbs')
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use('/', routerApp)
app.use(errorHandler);
export default app;