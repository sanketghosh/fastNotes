// PACKAGES
import "dotenv/config";
import jwt from "jsonwebtoken";

// LOCAL MODULES
import { TOKEN_EXP_AGE } from "@/constants";

export const generateJWT = (userId: string) => {
  const jwtToken = jwt.sign(
    { id: userId },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: TOKEN_EXP_AGE },
  );

  return {
    jwtToken,
  };
};
