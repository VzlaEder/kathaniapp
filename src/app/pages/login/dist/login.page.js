"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPage = void 0;
var core_1 = require("@angular/core");
var LoginPage = /** @class */ (function () {
    function LoginPage(router, authService, toastService) {
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
        this.postData = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.validateInputs = function () {
        var email = this.postData.email.trim();
        var password = this.postData.password.trim();
        return (this.postData.email && this.postData.password && email.length > 0 && password.length > 0);
    };
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.loginAction = function () {
        var _this = this;
        if (this.validateInputs()) {
            this.loading = true;
            this.authService.login(this.postData).subscribe(function (res) {
                console.log(res);
                var datasuccess = res;
                localStorage.setItem('token', datasuccess.access_token);
                localStorage.setItem('member', JSON.stringify(datasuccess.member));
                _this.router.navigate(['home']);
                _this.loading = false;
            }, function (err) {
                _this.loading = false;
                console.log(err);
                var messageError = err.error.message;
                _this.toastService.presentToast(messageError);
            });
        }
        else {
            this.toastService.presentToast('Debes igresar email y contraseña');
        }
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
