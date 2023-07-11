import { FormEvent } from "react";
import { useAuthContext } from "./AuthProvider";

export const LogoutCard = () => {
  const { logout } = useAuthContext();

  return (
    <div className="bg-semidarkblue rounded-[1.25rem] p-8 flex flex-col w-[25rem]">
      <h2 className="text-2xl text-white  tracking-[-0.03125rem]">
        You are already logged in
      </h2>
      <div className="flex flex-col gap-[1.5rem] my-[2.5rem]">
        <button
          type="submit"
          className="bg-red rounded-[.375rem] flex justify-center items-center h-[3rem] w-full text-white"
          onClick={() => logout()}
        >
          Click here to log out
        </button>
      </div>
    </div>
  );
};
