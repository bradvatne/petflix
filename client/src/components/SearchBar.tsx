import { Icons } from "./ui/Icons";

export const SearchBar = () => {
  return (
    <div className="flex gap-[1.5rem] mt-16 ">
      <Icons.Search />
      <input
        type="search"
        className="mb-[1.2rem] bg-transparent border-b border-darkblue  focus:ring-none focus:outline-none text-white text-[1.5rem] font-[300] pb-[1rem] focus:border-greyishblue w-full"
      />
    </div>
  );
};
