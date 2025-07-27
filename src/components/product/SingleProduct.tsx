import { getSingleProduct } from "@/services/products";
import type { Product } from "@/services/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Loader from "../products/Loader";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const res = await getSingleProduct(Number(productId));
        setProduct(res);
      } catch {
        toast.error("An error occurred during fetching product details");
        navigate("/")
      } finally {
        setIsLoading(false);
      }

    }
    fetchProduct();
  }, [productId, navigate]);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-4">
      <div className="md:w-fit">
        <img
          className="w-full max-w-[300px] mx-auto border-4 rounded-2xl border-gray-400"
          src={product?.image}
          alt={product?.title}
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4 ">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2">
          <h3 className="text-xl font-medium text-left md:text-3xl">
            {product?.title}
          </h3>
          <p className="w-fit px-2 py-1  bg-teal-300/50 rounded-md dark:text-black text-teal-700 text-sm font-medium whitespace-nowrap">
            {product?.category}
          </p>
        </div>
        <p className="text-gray-500 italic">{product?.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product?.price}
          </span>

          <Button className="bg-teal-500 border-2 border-teal-500 duration-300 hover:bg-white hover:text-black">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
