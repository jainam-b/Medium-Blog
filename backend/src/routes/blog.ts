import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import { sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();


// MIDDLEWARE
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";
  const token = header.split(" ")[1];
  const response = await verify(token, c.env.JWT_SECRET);
  if (response.id) {
    next();
  } else {
    c.status(403);
    c.json({
      error: "Unauthorized access",
    });
  }
});

blogRouter.post("/", (c) => {



    
  return c.text("Hello Hono!");
});

blogRouter.put("/", (c) => {
  return c.text("Hello Hono!");
});

blogRouter.get("/", (c) => {
  return c.text("Hello Hono!");
});

blogRouter.get("/", (c) => {
  return c.text("Hello Hono!");
});
