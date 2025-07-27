import type { Product } from "@/services/types";
import { createContext, useContext, useState, type ReactNode } from "react";

type ProductsContextType = {
  products: Product[];
  setProducts: (products: Product[]) => void;
  sortedProducts: Product[];
  setSortedProducts: (products: Product[]) => void;
  filteredProducts: Product[];
  setFilteredProducts: (products: Product[]) => void;
};

const productsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: () => {},
  sortedProducts: [],
  setSortedProducts: () => {},
  filteredProducts: [],
  setFilteredProducts: () => {},
});

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  return (
    <productsContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        sortedProducts,
        setSortedProducts,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(productsContext);

  if (context === undefined)
    throw new Error("products context used outside its provider");

  return context;
}
