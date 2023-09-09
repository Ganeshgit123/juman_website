import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
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
    path: "project",
    loadChildren: () => import("./project/project.module").then((m) => m.ProjectModule),
  },
  {
    path: "project-details/:id",
    loadChildren: () => import("./project-details/project-details.module").then((m) => m.ProjectDetailsModule),
  },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "gcc",
    loadChildren: () => import("./gcc-installation/gcc-installation.module").then((m) => m.GccInstallationModule),
  },
  {
    path: "market",
    loadChildren: () => import("./marketplace/marketplace.module").then((m) => m.MarketplaceModule),
  },
  {
    path: "bod",
    loadChildren: () => import("./board-of-director/board-of-director.module").then((m) => m.BoardOfDirectorModule),
  }
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
