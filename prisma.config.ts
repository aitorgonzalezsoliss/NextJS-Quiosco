// Load local environment variables from .env for Prisma during local development
import "dotenv/config";
import path from "node:path";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
  schema: path.join("prisma", "schema.prisma"),
});
