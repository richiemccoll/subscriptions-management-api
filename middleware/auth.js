import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default function AuthMiddleware(app) {
  const authStrategy = new Strategy(
    {
      secretOrKey: process.env.AUTH_SECRET,
      algorithms: ["HS256"],
      issuer: process.env.TOKEN_ISSUER,
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("Bearer")
    },
    async (payload, done) => {
      let id = parseInt(payload.sub);
      if (id) {
        done(null, id);
      } else {
        done(null, false);
      }
    }
  );
  passport.use(authStrategy);
  app.use(passport.initialize());
}
