import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'eCom';

  constructor(private basketService: BasketService, private accountServices: AccountService) { }
  // testReduce(){
  //   const numbers =[1,2,3,4];
  //   const sum = numbers.reduce((a,c)=>{
  //     return a+c
  //   },0);
  //   console.log(sum);
  // }
  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
    // this.testReduce();

  }
  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe({
        next: () => { console.log('intialBasket') },
        error: (err) => { console.error(err) }
      })
    }
  }
  loadCurrentUser() {
    const token = localStorage.getItem('token');
    // if (token) {

      this.accountServices.loadCurrentUser(token).subscribe({
        next: () => { console.log('loadded User Succeffully') },
        error: (err) => { console.log(err) }
      })
    // }
  }
}
