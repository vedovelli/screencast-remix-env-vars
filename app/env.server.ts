import { z } from "zod";

const schema = z.object({
  DOMAIN: z.string().min(1),
  SESSION_SECRET: z.string().min(1),
  TIMEOUT: z.coerce.number().positive(),
});

type ENV = z.infer<typeof schema>;

declare global {
  var ENV: ENV;
  interface Window {
    ENV: ENV;
  }
}

export const getEnv = () => {
  return schema.parse(process.env);
};
