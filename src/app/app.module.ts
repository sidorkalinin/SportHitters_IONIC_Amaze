import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {TwitterConnect} from '@ionic-native/twitter-connect';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { TabsPage } from '../pages/tabs/tabs';
import { FavouritesPage } from '../pages/favourites/favourites';
import { ContestMainPage } from '../pages/contest-main/contest-main';
import { CreateContestPage } from '../pages/create-contest/create-contest'; 
import { JoinContestPage } from '../pages/join-contest/join-contest';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignUpProvider } from '../providers/sign-up/sign-up';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    FavouritesPage,
    TabsPage,
    ContestMainPage,
    CreateContestPage,
    JoinContestPage,
    ForgotPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignUpPage,
    FavouritesPage,
    TabsPage,
    ContestMainPage,
    CreateContestPage,
    JoinContestPage,
    ForgotPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignUpProvider,
    LoginProvider,
    Camera,
    InAppBrowser,
    TwitterConnect,
    GooglePlus,
    Facebook,
   ]
})
export class AppModule {}
