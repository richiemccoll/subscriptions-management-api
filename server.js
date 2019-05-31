import 'dotenv/config';
import express from 'express';

import PlansController from './controllers/plans-controller';
import SubscriptionsController from './controllers/subscriptions-controller';

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/api/plans', PlansController);
app.use('/api/subscriptions', SubscriptionsController);

app.listen(PORT, () => {
    console.log('application is running on ' + PORT)
})