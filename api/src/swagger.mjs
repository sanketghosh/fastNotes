import swaggerAutoGen from "swagger-autogen";

const doc = {
  info: {
    title: "fastNotes",
    description: "API documentation for fastNotes application",
  },
  host: "localhost:8000",
  basePath: "/api/v1/",
};

const outputFile = "./swagger.json";
const routes = ["./modules/auth/auth.routes.ts"];

swaggerAutoGen()(outputFile, routes, doc);
