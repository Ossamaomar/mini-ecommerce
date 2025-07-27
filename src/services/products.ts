export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred during fetching products");
  }
}

export async function getSingleProduct(id: number) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred during fetching product details");
    
  }
}
