import express from "express";

import cors from "cors";

import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/health", (req, res) => {
    res.json({
        success: true
    });
});

if(process.env.JWT_SECRET) console.log("✅ ok")

export default app;