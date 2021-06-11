import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'






@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



  appPages = [
    { title: 'Perfil', url: '/home/profile', icon: 'person' },
    { title: 'Notificaciones', url: '/home/notifications', icon: 'notifications' },
    { title: 'Vigila tu glicemia', url: '/home/glucose-control', icon: 'water' },
    { title: 'Controla tu peso', url: '/home/weith-control', icon: 'scale' },
    { title: 'Tu tratamientos', url: '/home/treatment-control', icon: 'clipboard' },
    { title: 'Tus estadísticas', url: '/home/statistics', icon: 'stats-chart' },
    { title: 'Califica nuestro servicio', url: '/home/qualify', icon: 'warning' }
  ];
  constructor(private AuthService: AuthService){}

  

  ngOnInit() {
    console.log(this.datosMember)
  }

  logout(){
    this.AuthService.logout()
  }

  datosMember = JSON.parse(localStorage.getItem('member'))
  
}
