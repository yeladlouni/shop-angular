import { Component } from "@angular/core";
import { never } from "rxjs";
import { Product } from "../model/product";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector: "shop",
    templateUrl: "shop.component.html"
})
export class ShopComponent {
    public selectedCategory = null;
    public productsPerPage = 5;
    public selectedPage = 1;

    constructor(private repository: ProductRepository) { }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }
  

}