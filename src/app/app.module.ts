import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url :any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


