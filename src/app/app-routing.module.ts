import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LadyComponent } from './lady/lady.component';
import { ChildrenComponent } from './children/children.component';
import { MenComponent } from './men/men.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
	{ path: 'dama', component: LadyComponent },
	{ path: 'hombre', component: MenComponent },
	{ path: 'niño', component: ChildrenComponent },
	{ path: 'zapatos', component: ShoesComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
