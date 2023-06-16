const config = {
  env: process.env.NODE_ENV || "developement",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "imfuckingawsome",
  mongoUrl:
    process.env.MONGO_URL ||
    process.env.MONGO_HOST ||
    "mongodb://" + process.env.IP ||
    "127.0.0.1" + process.env.MONGO_PORT ||
    "27017" + "/mernproject",
};

export default config;
