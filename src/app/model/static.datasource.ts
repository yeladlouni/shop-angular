import { Injectable  } from "@angular/core";
import { Product } from "./product";
import { Observable, from } from "rxjs";

@Injectable() 
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Product 1", "Category 1", "Product 1 Category 1", 100),
        new Product(1, "Product 2", "Category 2", "Product 2 Category 2", 1000),
        new Product(1, "Product 3", "Category 1", "Product 4 Category 1", 200),
        new Product(1, "Product 4", "Category 2", "Product 5 Category 2", 400),
        new Product(1, "Product 5", "Category 3", "Product 6 Category 3", 10),
        new Product(1, "Product 6", "Category 4", "Product 7 Category 4", 100.10),
        new Product(1, "Product 7", "Category 1", "Product 8 Category 1", 33.22),
        new Product(1, "Product 8", "Category 2", "Product 9 Category 2", 78.93),
        new Product(1, "Product 9", "Category 3", "Product 10 Category 3", 1330),
        new Product(1, "Product 9", "Category 10", "Product 10 Category 10", 1330)
        
    ];

    getProducts(): Observable<Product[]> {
        return from ([this.products]);
    }
}