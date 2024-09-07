import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello world!\nLet's f*****g go!!!");
});

export default app;
