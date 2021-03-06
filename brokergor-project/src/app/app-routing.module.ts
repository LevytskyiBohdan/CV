import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PriceComponent } from './pages/price/price.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { CarComponent } from './pages/car/car.component';
import { ExportComponent } from './pages/export/export.component';
import { ImportComponent } from './pages/import/import.component';
import { Eur1Component } from './pages/eur1/eur1.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPriceComponent } from './admin/admin-price/admin-price.component';
import { AdminContactsComponent } from './admin/admin-contacts/admin-contacts.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { PassengerCarComponent } from './pages/calculator/passenger-car/passenger-car.component';
import { MotorcycleComponent } from './pages/calculator/motorcycle/motorcycle.component';
import { CargoCarComponent } from './pages/calculator/cargo-car/cargo-car.component';
import { BusesComponent } from './pages/calculator/buses/buses.component';
import { AdminSliderComponent } from './admin/admin-slider/admin-slider.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

// Guard
import { AdminGuard } from './shared/guard/admin.guard';
import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { NewsComponent } from './pages/news/news.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'price', component: PriceComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news/:id', component: NewsDetailsComponent},
  {path: 'car', component: CarComponent},
  {path: 'export', component: ExportComponent},
  {path: 'import', component: ImportComponent},
  {path: 'eur1', component: Eur1Component},
  {path: 'authentication', component: AuthenticationComponent, canActivate: [SecureInnerPagesGuard]},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'price', pathMatch: 'full'},
    {path: 'price', component: AdminPriceComponent},
    {path: 'contacts', component: AdminContactsComponent},
    {path: 'sliderAdmin', component: AdminSliderComponent},
    {path: 'news', component: AdminNewsComponent},
  ], canActivate: [AdminGuard]},
  {path: 'calculator', component: CalculatorComponent, children:[
    {path: '', redirectTo: 'passenger-car', pathMatch: 'full'},
    {path: 'passenger-car', component: PassengerCarComponent},
    {path: 'motorcycle', component: MotorcycleComponent},
    {path: 'cargo-car', component: CargoCarComponent},
    {path: 'buses', component: BusesComponent},
  ]},
  {path: '**', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
