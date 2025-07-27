import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProductsContext } from "@/contexts/ProductsContext";
import type { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

type Checked = DropdownMenuCheckboxItemProps["checked"];
type SortType = "none" | "high-low" | "low-high" | "name";

export default function SortingMenu() {
  const { products, setSortedProducts } = useProductsContext();
  const [selectedSort, setSelectedSort] = useState<SortType>("none");
  const [selectNone, setSelectNone] = useState<Checked>(true);
  const [selectPriceLowHigh, setSelectPriceLowHigh] = useState<Checked>(false);
  const [selectPriceHighLow, setSelectPriceHighLow] = useState<Checked>(false);
  const [selectAlphabetically, setSelectAlphabetically] =
    useState<Checked>(false);
  const displayedSort =
    selectedSort === "none"
      ? "Select Filter"
      : selectedSort === "high-low"
      ? "Price (High to Low)"
      : selectedSort === "low-high"
      ? "Price (Low to High)"
      : "Name (A-Z)";

  function handleSort(sortType: SortType) {
    console.log(sortType);
    setSelectedSort(sortType);
    switch (sortType) {
      case "low-high":
        setSortedProducts([...products].sort((a, b) => a.price - b.price));
        setSelectPriceLowHigh(true);
        setSelectNone(false);
        setSelectPriceHighLow(false);
        setSelectAlphabetically(false);

        break;
      case "high-low":
        setSortedProducts([...products].sort((a, b) => b.price - a.price));
        setSelectPriceHighLow(true);
        setSelectNone(false);
        setSelectPriceLowHigh(false);
        setSelectAlphabetically(false);
        break;
      case "name":
        setSortedProducts(
          [...products].sort((a, b) => a.title.localeCompare(b.title))
        );
        setSelectAlphabetically(true);
        setSelectNone(false);
        setSelectPriceLowHigh(false);
        setSelectPriceHighLow(false);
        break;
      case "none":
        setSortedProducts(products);
        setSelectNone(true);
        setSelectPriceLowHigh(false);
        setSelectPriceHighLow(false);
        setSelectAlphabetically(false);
        break;
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-2 border-gray-400" variant="outline">{displayedSort}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={selectNone}
          onClick={() => handleSort("none")}
        >
          None
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectPriceLowHigh}
          onClick={() => handleSort("low-high")}
        >
          Price (Low to High)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectPriceHighLow}
          onClick={() => handleSort("high-low")}
        >
          Price (High to Low)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectAlphabetically}
          onClick={() => handleSort("name")}
        >
          Name (A-Z)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
