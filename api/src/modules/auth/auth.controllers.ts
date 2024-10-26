// PACKAGES
import type { User } from "@prisma/client";
import type { Request, Response } from "express";

// LOCAL MODULES
import { TOKEN_EXP_AGE } from "@/constants";
import { generateJWT } from "@/lib/generate-jwt";
import { db } from "@/lib/prisma";
import type { LoginType, RegisterType } from "@/modules/auth/auth.schema";

/**
 * Handles user registration.
 *
 * @description This function processes a registration request by checking if a user already exists with the provided email, hashing the user's password, creating a new user in the database, and returning a success message along with a JWT token.
 *
 * @param {Request} req - The HTTP request object containing user registration details in the body.
 * @param {Response} res - The HTTP response object used to send responses back to the client.
 * @returns {Promise<void>} A promise that resolves to void or sends a response with a status code.
 *
 * @throws {Error} Throws an error if the registration process encounters any issues.
 */

export const handleRegisterUser = async (
  req: Request,
  res: Response,
): Promise<any | void> => {
  try {
    const { email, password, username } = req.body as RegisterType;

    const user = await db.user.findUnique({
      where: {
        email: email,
        username: username,
      },
    });

    // if user exists with same email send error
    if (user) {
      return res.status(401).json({
        message: "ERROR! Bad request. You cannot register.",
      });
    }

    // hash password
    const hashedPassword = await Bun.password.hash(password);

    // create new user
    const createdUser = await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    const { password: _password, ..._data } = createdUser;

    // get token from token generator
    const { jwtToken } = generateJWT(createdUser.id);

    res
      .cookie("auth_token", jwtToken, {
        httpOnly: true,
        maxAge: TOKEN_EXP_AGE,
        // secure: true // in prod un-comment
      })
      .status(200)
      .json({
        message: "SUCCESS! User has been registered.",
        data: _data,
      });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      message: "ERROR! Something went wrong. Internal server error.",
      error: error.message,
    });
  }
};

/**
 *  Handles user login.
 *
 * @description This function processes a login request by checking if the credentials are right with the provided email, user's password,  and returning a success message along with a JWT token.
 *
 * @param {Request} req - The HTTP request object containing user registration details in the body.
 * @param {Response} res - The HTTP response object used to send responses back to the client.
 * @returns {Promise<void>} A promise that resolves to void or sends a response with a status code.
 *
 * @throws {Error} Throws an error if the registration process encounters any issues.
 */
export const handleLoginUser = async (
  req: Request,
  res: Response,
): Promise<void | any> => {
  const { email, password } = req.body as LoginType;
  //
  if (!email) {
    return res.status(400).json({
      message: "ERROR! Bad request. Password is required.",
    });
  }

  try {
    // find user
    const existedUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    // if user does not exist
    if (!existedUser) {
      return res.status(401).json({
        message:
          "ERROR! Bad request. Cannot login, check your credentials and try again.",
      });
    }

    // assert that existedUser is not null
    const user = existedUser as User;

    // compare password
    let comparePassword = await Bun.password.verify(password, user.password);

    // if compare
    if (!comparePassword) {
      return res.status(401).json({
        message: "ERROR! The credentials you provided are invalid.",
      });
    }

    // get token from token generator
    const { jwtToken } = generateJWT(user.id);

    const { password: _password, ..._data } = user;

    res
      .cookie("auth_token", jwtToken, {
        httpOnly: true,
        maxAge: TOKEN_EXP_AGE,
        // secure: true // in prod un-comment
      })
      .status(200)
      .json({
        message: "SUCCESS! You have been logged in.",
        data: _data,
      });
  } catch (error) {
    res.status(500).json({
      message: "ERROR! Something went wrong. Internal server error.",
    });
  }
};

/**
 * Handles user logout.
 *
 * This function clears the authentication token from the user's cookies and responds with a success message.
 *
 * @param {Request} req - The HTTP request object representing the user's logout request.
 * @param {Response} res - The HTTP response object used to send the response back to the client.
 * @returns {Promise<void>} A promise that resolves to void or sends a response with a status code.
 *
 * @throws {Error} Throws an error if the logout process encounters any issues.
 */
export const handleLogoutUser = async (
  req: Request,
  res: Response,
): Promise<any | void> => {
  try {
    res.clearCookie("auth_token").status(200).json({
      message: "SUCCESS! You have been logged out.",
    });
  } catch (error) {
    res.status(500).json({
      message: "ERROR! Something went wrong. Internal server error.",
    });
  }
};
