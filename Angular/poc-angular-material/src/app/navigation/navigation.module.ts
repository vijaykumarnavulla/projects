import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavigationComponent ],
    exports: [ NavigationComponent ]
})

export class NavigationModule {}
