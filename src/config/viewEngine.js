// +------------------------------------------------------------------------+
// | @author Nyakko (Anh Tuấn)
// | @author_url 1: https://www.facebook.com/nyakko.neko
// | @author_url 2: https://github.com/Nyakkon
// | @author_email: kyuubi.yae@wibu.me
// +------------------------------------------------------------------------+
// | CHATBOT MESSENGER FOR PAGE (Messenger Platform)
// | Copyright (c) 2022 Nyakko. All rights reserved.
// +------------------------------------------------------------------------+


/* Code Zone */


import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("view", "./src/views");
};

module.exports = configViewEngine;