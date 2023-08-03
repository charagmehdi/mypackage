import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MentionModule } from 'angular-mentions';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { AuthService } from './services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LoginComponent,
    GalleryComponent,
    AboutComponent,
  ],
  imports: [
    MentionModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    CKEditorModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        {
          path: 'gallery',
          component: GalleryComponent,
          canActivate: [AuthService],
        },
        { path: 'about', component: AboutComponent },
      ],
      { relativeLinkResolution: 'legacy' }
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
