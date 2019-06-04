import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../../../util/account.service';
import { Web3Service } from '../../../util/web3.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output()
  public address: EventEmitter<string> = new EventEmitter<string>();
  input: string;
  constructor(private web3Service: Web3Service) { }

  ngOnInit() {
  }
  async search() {
    console.log(this.input)
    let isValid = this.web3Service.isValid(this.input);
    if (isValid){
       this.address.emit(this.input);
       this.input = '';
    } else { 
      console.error(`Address ${this.input} is not a valid ethereum address. Try again...`)
      console.error(`Try again...`)
    }
    
  }
}
