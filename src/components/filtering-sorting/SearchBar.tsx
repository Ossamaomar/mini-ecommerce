import { useProductsContext } from "@/contexts/ProductsContext";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { sortedProducts, setFilteredProducts } = useProductsContext();

  function handleSearch(text: string) {
    setSearch(text);
  }

  useEffect(() => {
    if (!search.trim()) {
      setFilteredProducts(sortedProducts);
    } else {
      const filtered = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [sortedProducts, setFilteredProducts, search]);

  return (
    <div className="w-full">
      <Input
        className="border-2 border-teal-500 "
        placeholder="search for your product"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
