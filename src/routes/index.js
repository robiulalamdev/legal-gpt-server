const express = require("express");
const { userRoutes } = require("../modules/user/user.route");
const { chatRoutes } = require("../modules/chat/chat.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/chats",
    route: chatRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
module.exports = { routers: router };
