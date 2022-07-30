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
import chatbotController from "../controllers/chatbotController";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", chatbotController.getHomePage);

    router.get("/webhook", chatbotController.getWebhook);
    router.post("/webhook", chatbotController.postWebhook);
    


    return app.use("/", router);
};

module.exports = initWebRoutes;