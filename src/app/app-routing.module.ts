import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404 } from './404-not-found/not-found.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ParentComponent } from './components-communication/parent.component';
import { ApplyingDirectivesComponent } from './custom-directives/custom-directive.component';
import { DataAndPropertyBinding } from './data-and-property-binding/data-and-property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '', component : WelcomeComponent, pathMatch : 'full'},
  {path : 'welcome', component : WelcomeComponent},
  {path : 'lifecycle-hooks', component : LifecycleHooksComponent},
  {path : 'data-binding', component : DataAndPropertyBinding},
  {path : 'event-binding', component : EventBindingComponent},
  {path : 'attribute-directives', component : AttributeDirectivesComponent},
  {path : 'structural-directives', component : StructuralDirectivesComponent},
  {path : 'custom-directives', component : ApplyingDirectivesComponent},
  {path : 'components-communication', component : ParentComponent},
  {path : '**', component : Page404}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
