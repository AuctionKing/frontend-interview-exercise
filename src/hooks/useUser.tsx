import { useState } from "react";
import { User } from "@/src/types";

export const useUser = () => {
  const [user, setUser] = useState<User | undefined>({
    id: "fake-user-id",
    name: "User One",
    email: "user_1@email.com",
  });

  return { user, setUser };
};
