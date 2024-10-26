// PACKAGES
import "dotenv/config";
import jwt from "jsonwebtoken";

// LOCAL MODULES
import { TOKEN_EXP_AGE } from "@/constants";
import { z } from "zod";

const EnvSchema = z.object({
  JWT_SECRET_KEY: z.string({
    required_error:
      "JWT secret key might be missing or not there in .env file.",
  }),
});

const processEnv = EnvSchema.parse(process.env);

export const generateJWT = (userId: string) => {
  const jwtToken = jwt.sign({ id: userId }, processEnv.JWT_SECRET_KEY, {
    expiresIn: TOKEN_EXP_AGE,
  });

  return {
    jwtToken,
  };
};
