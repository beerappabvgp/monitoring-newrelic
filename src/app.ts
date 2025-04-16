import express, { Request, Response} from "express";
import cors from "cors";
import { router } from "./routes/api";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: any, res: any) => {
    return res.send("Hi there!!!!👋👋👋👋👋👋");
});

app.use("/api", router);

app.use((err: any, req: any, res: any, next: any) => {
    console.error("💥 Error Handler:", err);
    res.status(500).json({ error: "Something went wrong" });
  });
app.listen(3000, () => {
    console.log(`server is listening on port 3000`);
});