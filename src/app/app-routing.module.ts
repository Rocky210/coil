import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoilComponent } from './coil/coil.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: 'new', component: NewComponent },
  { path: '', component: CoilComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
