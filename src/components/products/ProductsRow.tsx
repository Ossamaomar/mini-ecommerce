import { getProducts } from "@/services/products";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { useProductsContext } from "@/contexts/ProductsContext";
import EmptyState from "./EmptyState";
import { toast } from "sonner";

export default function ProductsRow() {
  const {
    setProducts,
    setSortedProducts,
    setFilteredProducts,
    filteredProducts,
  } = useProductsContext();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {

      try {
        setIsLoading(true);
        const res = await getProducts();
        setProducts(res);
        setSortedProducts(res);
        setFilteredProducts(res);
      } catch {
        toast.error("An error occurred during fetching products");
        setProducts([]);
        setSortedProducts([]);
        setFilteredProducts([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [setProducts, setFilteredProducts, setSortedProducts]);

  if (isLoading) return <Loader />;

  return (
    <>
      {filteredProducts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
