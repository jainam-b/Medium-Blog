import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@jainam-b/medium-comman";
import { sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// MIDDLEWARE
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";
  const token = header.split(" ")[1] || "";
  const user = await verify(token, c.env.JWT_SECRET);
  if (user) {
    const userId = (user as { id: string }).id;
    c.set("userId", userId);
    await next();
  } else {
    c.status(403);
    c.json({
      error: "Unauthorized access",
    });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const {success} =createBlogInput.safeParse(body)
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const userId = c.get("userId");
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });

  return c.json({
    id: blog.id,
  });
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const {success}=updateBlogInput.safeParse(body)
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const userId = c.get("userId");
  const blog = await prisma.blog.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      content: body.content,
      id: userId,
    },
  });

  return c.json({
    id: blog.id,
  });
});

// Todo : add pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.blog.findMany();
  return c.json({
    blogs,
  });
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        authorId: id,
      },
    });

    return c.json({
      blog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      msg: "error while fetching the blog post ",
    });
  }
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZlYzExZmQ0LTllMmYtNDk4NS1iYjQxLTRmMTFhYWI5MzczMCJ9.I2JasKBSe6OkIUKWs6s7ToDTsHO2NOQuw0ef3bapio0
