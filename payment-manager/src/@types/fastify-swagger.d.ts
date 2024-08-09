declare module "fastify-swagger" {
  import { FastifyPluginCallback } from "fastify";

  interface SwaggerOptions {
    routePrefix?: string;
    swagger?: any;
    exposeRoute?: boolean;
  }

  const fastifySwagger: FastifyPluginCallback<SwaggerOptions>;
  export default fastifySwagger;
}
