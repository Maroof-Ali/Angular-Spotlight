import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Page404 } from './404-not-found/not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { ChildComponent } from './components-communication/child-component/child.component';
import { ParentComponent } from './components-communication/parent.component';
import { ApplyingDirectivesComponent } from './custom-directives/custom-directive.component';
import { HighlighterDirective } from './custom-directives/custom.directive';
import { DataAndPropertyBinding } from './data-and-property-binding/data-and-property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LifecycleHooksComponent,
    DataAndPropertyBinding,
    EventBindingComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    Page404,
    ApplyingDirectivesComponent,
    HighlighterDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
