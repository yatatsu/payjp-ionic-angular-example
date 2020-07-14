import { Component, OnInit } from '@angular/core';
type Payjp = any;
declare var Payjp: Payjp;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  payjp: Payjp;
  card: any;

  ngOnInit() {
    console.log("location.origin", window.location.origin);
    console.log("addEventListener", window.addEventListener);
    console.log("postMessage", window.postMessage);
    console.log("document", document);
    console.log("location", window.location);
    this.payjp = Payjp('pk_test_0383a1b8f91e8a6e3ea0e2a9');
    const elements = this.payjp.elements();
    this.card = elements.create('card');
    this.card.mount('#checkout');
  }

  async handleSubmit(e: any) {
    e.preventDefault();
    console.log('handleSubmit');
    const r = await this.payjp.createToken(this.card);
    console.log(r);
  }
}
