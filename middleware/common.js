import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

export default function commonMiddleware(app) {
    app.use(bodyParser.json());
    app.use(morgan("common"));
    app.use(cors());
    app.use(helmet());
}