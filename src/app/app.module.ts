import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ThermalPrintModule } from "ng-thermal-print";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ThermalPrintModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
