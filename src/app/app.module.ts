import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { HeaderService } from './services/header.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
