import { Component } from '@angular/core';
import { Web3Service } from './util/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  input: string;
  constructor(private web3Service: Web3Service) { }

  onChangeAddress(address){
    this.web3Service.refreshAccounts(address)
  }


}
