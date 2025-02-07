import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private cnt =0 

  getCounter(){
    return this.cnt
  }

  incrementCounter(){
    this.cnt = this.cnt + 1
  }
}
