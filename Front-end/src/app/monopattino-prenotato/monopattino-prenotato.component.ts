import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-monopattino-prenotato',
  templateUrl: './monopattino-prenotato.component.html',
  styleUrls: ['./monopattino-prenotato.component.css']
})
export class MonopattinoPrenotatoComponent implements OnInit {
  @Input() qr: string;
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  rilascia() {
    if (localStorage.getItem('prenotato')) {
      this.http.put(environment.url + 'rilascia',
        {
          qr: this.qr
        },
        {
          withCredentials: true
        }
      ).subscribe((data) => {
        if (data) {
          localStorage.setItem('prenotato', null);
        }
      });
    } else {
      alert('Non hai prenotato')
    }
  }
}

