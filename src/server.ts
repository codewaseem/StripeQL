import * as http from "http";
import app from "./app";

const port = process.env.PORT;

const httpServer = http.createServer(app);
httpServer.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at localhost:${port}`);
});
