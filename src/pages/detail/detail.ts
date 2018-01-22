import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  userName : string;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HTTP,public toastCtrl: ToastController) {
    //https://restcountries.eu/rest/v2/all
      this.items.push( 
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/ad.svg","Name":"Andorra"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/ae.svg","Name":"United Arab Emirates"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/af.svg","Name":"Afghanistan"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/ag.svg","Name":"Antigua and Barbuda"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/ai.svg","Name":"Anguilla"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/al.svg","Name":"Albania"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/am.svg","Name":"Armenia"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/ao.svg","Name":"Angola  "},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/aq.svg","Name":"Antarctica"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/ar.svg","Name":"Argentina"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/as.svg","Name":"American Samoa"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/at.svg","Name":"Austria"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/au.svg","Name":"Austria"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/aw.svg","Name":"Aruba"},
        {"img" : "https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/ax.svg","Name":"Åland Islands"}
      );
 
  }

  ionViewDidLoad() {
    var userInfo = this.navParams.get('userData');
    this.userName = userInfo.name;
    this.http.get('https://restcountries.eu/rest/v2/all', {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {

      console.log(error);

    });
  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation'+infiniteScroll);

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        if(this.items.length<=100){
          this.items.push({
            "img":"https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/in.svg",
            "Name":this.items.length
          });
        }
        console.log(this.items)
            console.log('Async operation has ended');
          infiniteScroll.complete();
        }
        
    
    }, 1000);
  }

  itemClick(data){
    console.log(data);
    this.presentToast(data.Name);
  }
  
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: "Clicked on : "+msg,
      duration: 3000
    });
    toast.present();
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    // this.items.concat({
    //   "img":"https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/im.svg",
    //   "Name":"Pull to content"
    // });
    for(var i=0;i<5;i++){
      this.items.splice(0,0,{
        "img":"https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/im.svg",
        "Name":"Pull to content"+i
      })
    }
    // this.items.splice(0, 0, {
    //   "img":"https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/im.svg",
    //   "Name":"Splice Data"
    // });
    // this.items.push({
    //     "img":"https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/im.svg",
    //     "Name":"Pull to content"
    //   });
          console.log(this.items);

    setTimeout(() => {
      console.log('Async operation has ended');
     
      refresher.complete();
    }, 2000);
  }
}
