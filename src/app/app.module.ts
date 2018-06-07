import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HeaderComponent } from './../components/header/header';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GlobalServiceProvider } from '../providers/global-service/global-service';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { AddlessonsPage } from '../pages/addlessons/addlessons';
import { AddtestsPage } from '../pages/addtests/addtests';
import { BankaccountsPage } from '../pages/bankaccounts/bankaccounts';
import { ContactusPage } from '../pages/contactus/contactus';
import { EditaccountPage } from '../pages/editaccount/editaccount';
import { ForgetpasswordPage } from '../pages/forgetpassword/forgetpassword';
import { LessonsshowPage } from '../pages/lessonsshow/lessonsshow';
import { LoginPage } from '../pages/login/login';
import { MaxImagePage } from '../pages/max-image/max-image';
import { SignupPage } from '../pages/signup/signup';
import { StudentanswerPage } from '../pages/studentanswer/studentanswer';
import { StudentsubsPage } from '../pages/studentsubs/studentsubs';
import { StudenttabsPage } from '../pages/studenttabs/studenttabs';
import { StudenttaskPage } from '../pages/studenttask/studenttask';
import { StudenttestPage } from '../pages/studenttest/studenttest';
import { SubjectcontentPage } from '../pages/subjectcontent/subjectcontent';
import { TeacherquesPage } from '../pages/teacherques/teacherques';
import { TeachertabsPage } from '../pages/teachertabs/teachertabs';
import { TeacherweeksPage } from '../pages/teacherweeks/teacherweeks';
import { TermsPage } from '../pages/terms/terms';
import { TestquestionsPage } from '../pages/testquestions/testquestions';
import { TestresultPage } from '../pages/testresult/testresult';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FCM } from '@ionic-native/fcm';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutusPage,
    AddlessonsPage,
    TestquestionsPage,
    AddtestsPage,
    SignupPage,
    TeacherweeksPage,
    TeacherquesPage,
    StudentanswerPage,
    TeachertabsPage,
    LessonsshowPage,
    ContactusPage,
    StudenttaskPage,
    StudentsubsPage,
    SubjectcontentPage,
    EditaccountPage,
    StudenttestPage,
    StudenttabsPage,
    LoginPage,
    TermsPage,
    MaxImagePage,
    BankaccountsPage,
    ForgetpasswordPage,
    TestresultPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StudenttabsPage,
    StudenttaskPage,
    SubjectcontentPage,
    StudenttestPage,
    AboutusPage,
    TeachertabsPage,
    MaxImagePage,
    TeacherquesPage,
    StudentsubsPage,
    StudentanswerPage,
    TeacherweeksPage,
    TermsPage,
    LoginPage,
    TestquestionsPage,
    TestresultPage,
    SignupPage,
    LessonsshowPage,
    ForgetpasswordPage,
    HeaderComponent,
    AddtestsPage,
    EditaccountPage,
    AddlessonsPage,
    BankaccountsPage,
    ContactusPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,FCM,Toast,NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalServiceProvider
  ]
})
export class AppModule {}
