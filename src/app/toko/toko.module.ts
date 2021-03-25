import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { JurnalComponent } from './jurnal/jurnal.component';



@NgModule({
  declarations: [UserComponent, JurnalComponent],
  imports: [
    CommonModule
  ],
  exports:[
    UserComponent,
    JurnalComponent
  ]
})
export class TokoModule { }
