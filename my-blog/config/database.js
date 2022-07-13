const path = require("path");

module.exports = ({ env }) => ({
  connection:
    env("ENV") === "develop"
      ? {
          client: "sqlite",
          connection: {
            filename: path.join(
              __dirname,
              "..",
              env("DATABASE_FILENAME", ".tmp/data.db")
            ),
          },
          useNullAsDefault: true,
        }
      : {
          client: "postgres",
          connection: env("DATABASE_URL"),
          useNullAsDefault: true,
        },
});
