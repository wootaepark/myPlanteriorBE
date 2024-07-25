const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user');
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_REDIRECT_URI
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      console.log(profile);
      let user = await User.findOne({ where: { user_id: profile.id } });
      if (user) {
        return done(null, user);
      }
      user = await User.create({
        user_id : profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        source: "google",
      });
      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.user_id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
