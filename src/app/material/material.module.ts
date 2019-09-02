import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule, MatToolbarModule } from "@angular/material";
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';

const material = [
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatRadioModule,
  MatTableModule
];
@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})
export class MaterialModule {}
