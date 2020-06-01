const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https://accounts.google.com/signin/oauth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=282372674115-c7g5l6v8grfaui11r8enc39nqdamov78.apps.googleusercontent.com&o2v=2&as=3UU6s1CFa85gbwLTqw5eMw&flowName=GeneralOAuthFlow
