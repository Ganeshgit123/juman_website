import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: "contact",
    loadChildren: () => import("./contact/contact.module").then((m) => m.ContactModule),
  },
  {
    path: "career",
    loadChildren: () => import("./career/career.module").then((m) => m.CareerModule),
  },
  {
    path: "operating",
    loadChildren: () => import("./operating/operating.module").then((m) => m.OperatingModule),
  },
  {
    path: "product",
    loadChildren: () => import("./product/product.module").then((m) => m.ProductModule),
  },
  {
    path: "product-details",
    loadChildren: () => import("./product-details/product-details.module").then((m) => m.ProductDetailsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: "enabled",
      scrollPositionRestoration: "top",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
