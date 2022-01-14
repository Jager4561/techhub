import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePage } from './pages/home/home.page';
import { WatchPage } from './pages/watch/watch.page';
import { VideosPage } from './pages/videos/videos.page';
import { RouterModule, Routes } from '@angular/router';
import { PhotosPage } from './pages/photos/photos.page';
import { CreatorsPage } from './pages/creators/creators.page';
import { AboutPage } from './pages/about/about.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'filmy', component: VideosPage },
  { path: 'zdjecia', component: PhotosPage },
  { path: 'tworcy', component: CreatorsPage },
  { path: 'o-projekcie', component: AboutPage },
  { path: 'watch/:id', component: WatchPage },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePage,
    WatchPage,
    VideosPage,
    PhotosPage,
    CreatorsPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
