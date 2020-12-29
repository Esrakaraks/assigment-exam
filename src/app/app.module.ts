import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import { HeaderComponent } from './header/header.component';
import { DoubleSelectComponent } from './double-select/double-select.component';
import { ChipComponent } from './chip/chip.component';
import {MatIconModule} from '@angular/material/icon';
import { TreeImagesComponent } from './tree-images/tree-images.component';
import { RedImageComponent } from './red-image/red-image.component';
import { SliderAvatarComponent } from './slider-avatar/slider-avatar.component';
import { BlueImagesComponent } from './blue-images/blue-images.component';
import { FormComponent } from './form/form.component';
import { FixMessangerComponent } from './fix-messanger/fix-messanger.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DoubleSelectComponent,
    ChipComponent,
    TreeImagesComponent,
    RedImageComponent,
    SliderAvatarComponent,
    BlueImagesComponent,
    FormComponent,
    FixMessangerComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
   ReactiveFormsModule,
    MatChipsModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
