/** importing the installed packages  to use the configure and build our API
 */
import cors from "cors";
import express from "express";

/**
 * importing route endpoints entry point directory for configurations
 *  */
import petRoutes from "./pets/routes/pets.routes.js";

/**
 * getting rid of express top level function from imported express be able to use it to create an express app , we store it in a variable.
 */
const app = express();
// defining port to use
const port = "3000";

/**
global middleware
*/
app.use(cors());
app.use(express.json());

/**
routes
*/
app.use("/pets", petRoutes);

/**
 * setting the port which our app is to listen on and display on the console
 */
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`⚡️[server]: Server is running at https;//localhost:${port}`)
  );
}

export default app;
