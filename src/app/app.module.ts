import { SearchResultComponent } from './components/templates/search-result/search-result.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';
import { FilmListComponent } from './components/organism/film-list/film-list.component';
import { FilmItemComponent } from './components/molecules/film-item/film-item.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { FilmsPageComponent } from './components/pages/films-page/films-page.component';
import { SearchInputComponent } from './components/molecules/search-input/search-input.component';
import { HeaderComponent } from './components/organism/header/header.component';
import { FooterComponent } from './components/organism/footer/footer.component';
import { CopyrightComponent } from './components/molecules/copyright/copyright.component';
import { EmailComponent } from './components/molecules/email/email.component';
import { FollowLinksComponent } from './components/molecules/follow-links/follow-links.component';
import { PhoneComponent } from './components/molecules/phone/phone.component';
import { ContactBlockComponent } from './components/organism/contact-block/contact-block.component';
import { FollowBlockComponent } from './components/organism/follow-block/follow-block.component';
import { IconLinkComponent } from './components/molecules/icon-link/icon-link.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmItemComponent,
    HomePageComponent,
    FilmsPageComponent,
    SearchInputComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent,
    EmailComponent,
    FollowLinksComponent,
    PhoneComponent,
    ContactBlockComponent,
    FollowBlockComponent,
    IconLinkComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
