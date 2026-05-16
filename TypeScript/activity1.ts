// create a simple typescript shopping cart using generic functions to add items and combine product details, and use type inference and type narrowing to display product name and price
interface Product {
    name: string;
    price: number;
}

class ShoppingCart<T extends Product> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    displayCart(): void {
        this.items.forEach(item => {
            console.log(`Product: ${item.name}, Price: $${item.price}`);
        });
        console.log(`Total Price: $${this.getTotalPrice()}`);
    }
}

const cart = new ShoppingCart<Product>();
cart.addItem({ name: "Laptop", price: 999.99 });
cart.addItem({ name: "Headphones", price: 199.99 });

cart.displayCart();



function combineProductDetails<T extends Product, U extends Product>(product1: T, product2: U): T & U {
    return { ...product1, ...product2 };
}

const productA = { name: "Smartphone", price: 499.99, brand: "TechBrand" };
const productB = { name: "Tablet", price: 299.99, brand: "GadgetCo" };

const combinedProduct = combineProductDetails(productA, productB);
console.log(combinedProduct); // Output: { name: 'Tablet', price: 299.99, brand: 'GadgetCo' }

// Type inference and type narrowing example
function displayProductInfo(product: Product | null): void {
    if (typeof product === "object" && product !== null && "name" in product && "price" in product) {
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Price: $${product.price}`);
    } else {
        console.log("No product information available.");
    }

}

displayProductInfo(productA); // Output: Product Name: Smartphone, Product Price: $499.99
displayProductInfo(null); // Output: No product information available.
