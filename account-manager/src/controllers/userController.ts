import { FastifyRequest, FastifyReply } from "fastify";
import { supabase } from "../supabaseClient";
import { createUser, getUserById } from "../models/userModel";

export const registerUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { email, password } = request.body as any;
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    reply.status(400).send(error.message);
  } else {
    const user = await createUser(data.user?.id!, email);
    reply.send(user);
  }
};

export const loginUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const { email, password } = request.body as any;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    reply.status(400).send(error.message);
  } else {
    reply.send(data);
  }
};
