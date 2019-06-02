import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { AccountService } from '../util/account.service';
import { Web3Service } from '../util/web3.service';
declare var blockies: any;

@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit, OnDestroy {
 
    accounts: string[];
    accountData: any;
    model = {
      ether: 0,
      amount: 5,
      receiver: '',
      balance: 0,
      account: '',
      link: ''
    };
  
    status = '';
    cards = [];
    tokenSale: {
      tokenPrice: 1000000000000000,
      tokenSold: Number,
      progressPercent: Number
    }
    numberOfTokens = 0;
    avatar:string;
    tokens$: Observable<[]>;

    constructor(private web3Service: Web3Service, 
      private accountService: AccountService) {
    }
  
    async ngOnInit() {
      
      await this.watchAccount();
      this.web3Service.mainAccountBalance$.subscribe(balance => this.model.ether = balance)
      this.avatar = this.createBlockie();
    
    }
  
    async watchAccount() {
      this.web3Service.accounts$.subscribe((accounts) => {
        console.log(accounts)
        this.accounts = accounts;
        this.model.account = accounts[0];
        
        this.accountService.tokensAccount(this.accounts[0]).subscribe(data => {
          this.accountData = data
        })

      });

    }
    createBlockie(){
      return blockies.create({ seed:this.model.account ,size: 8,scale: 16}).toDataURL()
       
    }
  
    ngOnDestroy(){
      this.web3Service.accounts$.unsubscribe();
      this.web3Service.mainAccountBalance$.unsubscribe();
    }
  }
  