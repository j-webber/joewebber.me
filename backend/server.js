import express from "express";
import "dotenv/config";
import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import PG from "pg";
import passport from "passport";
import passportConfig from "./lib/passport.js";
import postRouter from "./routes/postRouter.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import { ensureAuthenticated } from "./middleware/authMiddleware.js";
import adminRouter from "./routes/adminRouter.js";
import cors from "cors";
import authRouter from "./routes/authRouter.js";

const port = process.env.PORT || 5000;

const app = express();

const { Pool } = PG;
const pgSession = connectPgSimple(session);

const pgPool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000
  },
  saveUninitialized: false,
  resave: false,
  store: new pgSession({
    pool: pgPool,
    tableName: "session",
    createTableIfMissing: true
  })
};

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://joewebber.me"
        : "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// this comes from express session docs: https://expressjs.com/en/resources/middleware/session.html
if (process.env.NODE_ENV === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
  sess.cookie.sameSite = "none"; // Required for cross-origin cookies
  sess.cookie.domain = ".joewebber.me"; //must set this in order for cookie to be stored in browser
}

app.use(session(sess));

app.use(passport.session());

passportConfig(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postRouter);
app.use("/api/admin", ensureAuthenticated, adminRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => res.send("Server is ready!"));

app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port: ${port}`));
