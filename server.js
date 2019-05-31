import 'dotenv/config';
import express from 'express';
import middleware from './middleware/middleware';

import PlansController from './controllers/plans-controller';
import SubscriptionsController from './controllers/subscriptions-controller';

const PORT = process.env.PORT;

const app = express();

middleware(app);

app.use('/api/plans', PlansController);
app.use('/api/subscriptions', SubscriptionsController);

app.listen(PORT, () => {
    console.log('application is running on ' + PORT)
})