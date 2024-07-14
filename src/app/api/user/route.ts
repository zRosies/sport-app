import { createUser, updateUser } from "../controllers/users";

export async function POST(req: any) {
  try {
    const { email, password } = await req.json();
    const response = await createUser({ email: email, password: password });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
export async function PUT(req: any) {
  try {
    const updatedUser = await req.json();
    const response = await updateUser(updatedUser);
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
