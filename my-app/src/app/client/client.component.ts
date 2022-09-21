import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

//   service: any = null;
//   constructor(private serviceService: ServiceService) { }

//   ngOnInit(): void {
//     this.service = console.log(this.serviceService.retornar());
//   }
// }

data: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe(
      {
        next: (data) => {
          this.data = data;
          console.log(data);
        },
        error: (e) => {console.log(e);},
        complete: () => {console.log('Complete');}
      }
    )
  }
}