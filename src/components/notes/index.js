import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import graphlHTTP from "express-graphql";
import schema from "./schema";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/notetaking_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
const PORT = 3000;

app.use(cors());


app.get("/", (req, res) => {
  res.json({
    message: "Notetaking API v1"
  });
});
app.use(
    "/graphql",
    graphlHTTP({
      schema: schema,
      graphiql: true
    })
  );
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});

