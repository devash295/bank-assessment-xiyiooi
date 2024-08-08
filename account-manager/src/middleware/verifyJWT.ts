import { FastifyRequest, FastifyReply } from "fastify";
import { supabase } from "../supabaseClient";

export async function verifyJWT(
  request: FastifyRequest,
  reply: FastifyReply,
  done: any
) {
  const authHeader = request.headers["authorization"];

  if (!authHeader) {
    reply.status(401).send("Missing authorization header");
    return;
  }

  const token = authHeader.split(" ")[1];
  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    reply.status(401).send("Invalid or expired token");
    return;
  }

  request.user = data.user;
  done();
}
