import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../../services/toast.service'
import { AuthService } from '../../services/auth.service'
import { LoginResSeccesI, LoginResWornI, LoginNoConnectI } from '../../models/loginres.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public postData = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService,private toastService:ToastService) { }

  validateInputs() {
    let email = this.postData.email.trim();
    let password = this.postData.password.trim();

    return (this.postData.email && this.postData.password && email.length > 0 && password.length > 0);

  }

  ngOnInit() {
  }

  loginAction() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe((res: any) => {
        console.log(res)
        let datasuccess: LoginResSeccesI = res;
          localStorage.setItem("token", datasuccess.access_token)
          localStorage.setItem("member",JSON.stringify(datasuccess.member))
          this.router.navigate(['home']);
      },
        (HttpErrorResponse: any) => {
          console.log(HttpErrorResponse)
          let messageError = HttpErrorResponse.error.message
          this.toastService.presentToast(messageError)
        }
      )
    }
    else {
      this.toastService.presentToast('Debes igresar email y contraseña')
    }
  }
}
