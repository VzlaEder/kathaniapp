import { Component, OnInit } from '@angular/core';
import { StartService } from '../../services/start.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  public data = {
    glucosaActual: null,
    pesoActual: null,
    altura: null
  };

  constructor(private startService: StartService) { }

  ngOnInit() {
    this.winmigHistory();
  }

  ionViewDidEnter(){
    this.winmigHistory();
  }

  winmigHistory() {
    this.startService.dashBoardData().subscribe((res: any) => {
      this.data = res.data;
    });
  }

  colorW(val: number) {
    if (val < 18.5 || val > 30.0) {
      return 'danger';
    } else if (val >= 25.0 && val <= 29.9) {
      return 'warning';
    }
    return 'success';
  }

  bodyCondition(val: number) {
    if (val < 18.5) {
      return 'Peso bajo';
    } else if (val >= 18.5 && val <= 24.9) {
      return 'Peso Normal';
    } else if (val >= 25.0 && val <= 29.9) {
      return 'Sobrepeso';
    } else {
      return 'Obesidad';
    }
  }

  riesgoW(val: number) {

    if (val < 18.5 || val > 30.0) {
      return 'Riesgo alto';
    } else if (val >= 25.0 && val <= 29.9) {
      return 'Riesgo leve';
    }
    return 'Sin riesgos';
  }

  riesgoG(val: number) {

    if (val < 70 || val > 125) {
      return 'Riesgo alto';
    } else if (val >= 101 && val <= 125) {
      return 'Riesgo medio';
    }
    return 'Sin riesgos';
  }

  colorG(val: number) {

    if (val < 70 || val > 125) {
      return 'danger';
    } else if (val >= 101 && val <= 125) {
      return 'warning';
    }
    return 'success';
  }

  consejo(val: number) {

    if (val < 70 || val > 125) {
      return 'Consulta tu médico.';
    } else if (val >= 101 && val <= 125) {
      return 'Mejora tus hábitos.';
    }
    return 'Sigue así.';
  }

}
