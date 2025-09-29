import { Strategy as LocalStrategy } from "passport-local";
import prisma from "./db.js";
import bcrypt from "bcrypt";

const passportConfig = (passport) => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            username
          }
        });

        if (!user) done(null, false);

        const match = await bcrypt.compare(password, user.password);
        if (!match) done(null, false);

        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id
        }
      });
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

export default passportConfig;
