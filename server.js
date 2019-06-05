import "dotenv/config";
import express from "express";
import middleware from "./middleware/middleware";
import errorHandler from "./middleware/error-handling";

import PlansController from "./controllers/plans-controller";
import SubscriptionsController from "./controllers/subscriptions-controller";
import UsersController from './controllers/users-controller';

const PORT = process.env.PORT;

const app = express();

middleware(app);

app.use("/api/plans", PlansController);
app.use("/api/subscriptions", SubscriptionsController);
app.use("/api/auth/", UsersController);

// Error handling must be defined AFTER all other middleware / routes
errorHandler(app);

app.listen(PORT, () => {
  console.log("application is running on " + PORT);
});
