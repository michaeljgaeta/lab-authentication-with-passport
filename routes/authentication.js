"use strict";

const { Router } = require("express");
const authenticationRouter = Router();

const passport = require("passport");

// 5 - We need to tell our route handlers to use their corresponding strategies.

// /authentication/sign-up
authenticationRouter.get("/sign-up", (req, res, next) => {
  res.render("authentication/sign-up", { title: "Sign Up" });
});

authenticationRouter.post(
  "/sign-up",
  passport.authenticate("sign-up", {
    successRedirect: "/",
    failureRedirect: "/authentication/sign-up"
  })
);

authenticationRouter.get("/sign-in", (req, res, next) => {
  res.render("authentication/sign-in");
});

authenticationRouter.post(
  "/sign-in",
  passport.authenticate("sign-in", {
    successRedirect: "/",
    failureRedirect: "/authentication/sign-in"
  })
);

authenticationRouter.post("/sign-out", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

module.exports = authenticationRouter;
