import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsRow from "@/components/products/ProductsRow";
import FilteringSorting from "@/components/filtering-sorting/FilteringSorting";


export default function Home() {
  return (
    <div className="">
      <FilteringSorting />
      <ProductsHeader />
      <ProductsRow />
    </div>
  );
}
