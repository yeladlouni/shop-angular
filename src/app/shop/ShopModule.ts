import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/ModelModule";
import { CounterDirective } from "./counter.directive";
import { ShopComponent } from "./shop.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [ShopComponent, CounterDirective],
    exports: [ShopComponent]
})
export class ShopModule { }