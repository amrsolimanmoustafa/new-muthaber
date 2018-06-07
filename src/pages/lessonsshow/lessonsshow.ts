import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the LessonsshowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessonsshow',
  templateUrl: 'lessonsshow.html',
})
export class LessonsshowPage {
video;
  constructor(public sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonshowPage',this.navParams.get('lesson').video_url);
    // this.video=this.navParams.get('lesson').video_url
    this.getSafeUrl(this.navParams.get('lesson').video_url)
}
  getSafeUrl(url) {
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl( url.replace("watch?v=", "embed/"));
    // this.video = url.replace("watch?v=", "v/");

  }

}
