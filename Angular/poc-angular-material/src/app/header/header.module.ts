import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import {DemoMaterialModule} from '../material-module';

@NgModule({
    imports: [ RouterModule, CommonModule,DemoMaterialModule ],
    declarations: [ HeaderComponent ],
    exports: [ HeaderComponent ]
})

export class HeaderModule {}
