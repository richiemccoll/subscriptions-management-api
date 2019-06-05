import passport from "passport";

export default function ProtectedRoute() {
  return passport.authenticate("jwt", { session: false });
}
