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
import viewEngine from "./config/viewEngine";
import initWebRoute from "./routes/web";
import bodyParser from "body-parser";
require("dotenv").config();



let app = express();


// kết nối viewEngine

viewEngine(app);

// parse gửi yêu cầu tới Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// init web routes
initWebRoute(app);

let port = process.env.PORT || 8080;
app.listen( port, () => {
    console.log("chatbot đang chạy ở cổng: " +port);
})

