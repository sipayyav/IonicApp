import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';
import { DetailPage } from '../detail/detail';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  myForm: FormGroup;
  card = "";
  constructor(public navCtrl: NavController,public formBuilder : FormBuilder,public alertCtrl: AlertController) {
  }
  ngOnInit(){
    this.myForm = this.formBuilder.group({
      name: ['Sivarama', [Validators.required, Validators.minLength(4)]],
      password: ['',[Validators.minLength(4), Validators.compose([Validators.pattern("[0-9]*"),Validators.required])]]
  });
  }
  submitData(data){
    console.log(data.value)
    if(data.value.name == "Sivarama" && data.value.password == "1234"){
      var userData = this.myForm.value;
      this.navCtrl.push(DetailPage,{'userData':userData});  
    }else{
      let alert = this.alertCtrl.create({
        title: 'Oh No..!',
        subTitle: 'Invalid Credentials!',
        buttons: ['OK']
      });
      alert.present();
    }
    
  }
  update(){
    
   

  }
}
