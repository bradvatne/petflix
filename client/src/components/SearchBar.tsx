import { useDispatch, useSelector } from "react-redux";
import { Icons } from "./ui/Icons";
import { AppDispatch, RootState } from "../store/store";
import { setSearch } from "../store/reducers/searchReducer";

export const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector<RootState>((state) => state.search) as string;

  return (
    <div className="flex gap-[1.5rem] mt-[1.5rem] lg:mt-16 ">
      <Icons.Search />
      <input
        type="search"
        placeholder="Search for movies or TV series"
        className="mb-[1.2rem] bg-transparent border-b border-darkblue  focus:ring-none focus:outline-none text-white text-[1.5rem] font-[300] pb-[1rem] focus:border-greyishblue w-full"
        value={searchValue}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
};
