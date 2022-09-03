const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../modules/users/models/userModel");
const bcrypt = require("bcrypt");
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },

    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        const comparePassword = await bcrypt.compare(password, user.password);

        if (!user) {
          return done(null, false);
        }
        if (user.email === email && comparePassword === true) {
          return done(null, user);
        } else return done(null, false);
      } catch (error) {
        done(error);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser(async (_id, done) => {
  try {
    const user = await User.findOne({ _id });
    done(null, user);
  } catch (error) {
    done(e);
  }
});
