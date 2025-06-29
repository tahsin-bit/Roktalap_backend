import { PrismaClient } from "@prisma/client";
import app from "./app";

const PORT = process.env.PORT || 8000;PORT
const prisma = new PrismaClient();

app.listen(PORT, async () => {
  try {
    console.log(`Server running on http://localhost:${PORT}`);
    await prisma.$connect();
    console.log("Database connected...");
  } catch (err) {
    console.error("Database connection error:", err);
  }
});