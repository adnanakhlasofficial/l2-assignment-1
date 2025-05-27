interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    const expensiveProduct = products.reduce(
      (max: Product, currentProduct: Product) =>
        max.price > currentProduct.price ? max : currentProduct
    );
    return expensiveProduct;
  }
}

const items: Product[] = [];

console.log(getMostExpensiveProduct(items));
