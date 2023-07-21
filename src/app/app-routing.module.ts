import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { LanguagesprogramComponent } from './pages/languagesprogram/languagesprogram.component';
import { IndexComponent } from './pages/index/index.component';
import { PitemComponent } from './pages/pitem/pitem.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'language', component: LanguagesprogramComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'item', component: PitemComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'prices', component: PricesComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', pathMatch: 'full', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
