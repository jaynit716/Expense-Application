import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevigationComponent } from './nevigation/nevigation.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import{FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { SearchTextPipe } from './search-text.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NevigationComponent,
    FeedbackComponent,
    ExpensesComponent,
    NotFoundComponent,
    SearchTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
