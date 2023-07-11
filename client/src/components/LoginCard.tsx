import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/async/authThunk";
import { AppDispatch, RootState } from "../store/reducer";
import { Navigate } from "react-router-dom";

export const LoginCard = () => {
  const selectUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    dispatch(loginUser(formData));
  };

  if (selectUser) {
    return <Navigate to="/" />;
  }
  return (
    <div className="bg-semidarkblue rounded-[1.25rem] p-8 flex flex-col w-[25rem]">
      <h2 className="text-2xl text-white  tracking-[-0.03125rem]">Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-[1.5rem] my-[2.5rem]">
          <input
            type="email"
            id="email"
            name="email"
            className="block relative border-b border-greyishblue bg-semidarkblue focus:border-none focus:outline-none text-white pl-[1rem] pb-[1rem]"
            autoComplete="offh"
            placeholder="Email address"
          />
          <input
            type="password"
            id="password"
            name="password"
            className="block relative border-b border-greyishblue bg-semidarkblue focus:border-none focus:outline-none text-white pl-[1rem] pb-[1rem]"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-red rounded-[.375rem] flex justify-center items-center h-[3rem] w-full text-white"
        >
          Login to your account
        </button>
        <div className="mt-[1.5rem] flex w-full justify-center items-center text-white">
          Don't have an account?{" "}
          <button className="text-red ml-2">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
