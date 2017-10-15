import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Platform } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { InstructionsPage } from '../pages/instructions/instructions';
import { HomePage } from '../pages/home/home';
import { DfhResultsModal } from '../pages/home/dfhResultsModal';
import { TabsPage } from '../pages/tabs/tabs';
import { DfhService } from '../pages/services/dfhservice'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    InstructionsPage,
    HomePage,
    TabsPage,
    DfhResultsModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    InstructionsPage,
    HomePage,
    TabsPage,
    DfhResultsModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    Base64,
    DfhService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
