// PACKAGES
import "dotenv/config";
import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload, type VerifyErrors } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const verifyTokenHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies["auth_token"];

  // console.log(token);

  if (!token) {
    return res.status(401).json({
      message: "Not authenticated",
    });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET_KEY as string,
    (err: VerifyErrors | null, decoded: JwtPayload | string | undefined) => {
      if (err) {
        return res.status(403).json({ message: "Token is not valid" });
      }

      if (decoded && typeof decoded === "object") {
        req.userId = (decoded as JwtPayload).id as string; // Ensure payload.id exists and is a string
        next();
      } else {
        return res.status(403).json({ message: "Token payload is invalid" });
      }
    },
  );
};
