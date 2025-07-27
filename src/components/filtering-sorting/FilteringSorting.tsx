import SearchBar from "./SearchBar";
import SortingMenu from "./SortingMenu";


export default function FilteringSorting() {
  return (
    <div className="flex justify-center items-center gap-2 mb-10 max-w-[600px] mx-auto ">
        <SearchBar />
        <SortingMenu />
    </div>
  )
}
