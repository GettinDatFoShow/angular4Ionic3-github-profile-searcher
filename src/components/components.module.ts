import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
	declarations: [
		ProfileComponent,
		RepositoriesComponent
	],
	imports: [
		IonicModule
	],
	exports: [
		ProfileComponent,
		RepositoriesComponent
	]
})
export class ComponentsModule {}
