import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LanguagesprogramComponent } from './pages/languagesprogram/languagesprogram.component';
import { PitemComponent } from './pages/pitem/pitem.component';
import { IndexComponent } from './pages/index/index.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    LanguagesprogramComponent,
    PitemComponent,
    IndexComponent,
    ServicesComponent,
    PricesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
