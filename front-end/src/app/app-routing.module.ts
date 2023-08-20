import { NgModule } from '@angular/core';
import { RouterModule, Routes, TitleStrategy } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { ViewerComponent } from './viewer/viewer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  { path: 'video-viewer/:id', component: ViewerComponent },
  { path: 'list', component: ListPageComponent },
  { path: '', component: FrontPageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
