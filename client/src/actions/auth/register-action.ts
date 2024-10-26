import { API_BASE_URL } from "@/constants";
import { APIError } from "@/lib/handle-api-error";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const registerAction = async (
  formData: z.infer<typeof RegisterSchema>,
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new APIError(response.status, errorData.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof APIError) {
      console.error(`API error ${error.statusCode}:${error.message}`);
    } else {
      console.error("Unexpected error: ", error);
    }
  }
};
