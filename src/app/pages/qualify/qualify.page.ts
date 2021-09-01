import { Component, OnInit } from '@angular/core';
import { QualificationService } from '../../services/qualification.service';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-qualify',
  templateUrl: './qualify.page.html',
  styleUrls: ['./qualify.page.scss'],
})
export class QualifyPage implements OnInit {


  constructor(private qualificationService: QualificationService, private toastService: ToastService) { }

  success: boolean;
  questionData: any;
  qualificationData: any;
  
  ionViewDidEnter(){
      this.getQuestions();
      this.getQualification();
  }

  ngOnInit() {
    this.getQuestions();
    this.getQualification();
  }

  getQuestions(){
    this.qualificationService.questions().subscribe(res =>{
      this.questionData = res.data;
      console.log(this.questionData)
    });
  }

  getQualification(){
    this.qualificationService.qualification().subscribe(res =>{
      this.qualificationData = res.data;
      console.log(this.qualificationData)
    });
  }

  qualificationUP(){
    const postQualificationData = {
      qualification: this.questionData.question
   };
    this.success = true;
    this.qualificationService.qualificationUP(postQualificationData).subscribe((res: any) =>{
      console.log(res);
      const messageSuccess = res.message;
      this.toastService.presentToast(messageSuccess);
      this.success = false;
    },
    (err: any)=>{
      this.success = false;
      console.log(err);
      const messageError = err.error.message;
      this.toastService.presentToast(messageError);
    }
  );
}

  color(val: string) {

    if(val == "Totalmente satisfactoria"){
      return 'danger';
    }else if( val == "Satisfactoria"){
      return 'warning';
    }
    return 'success';
    }

}
