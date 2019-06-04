import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../../../util/account.service';
import { Web3Service } from '../../../util/web3.service';
declare var blockies: any;
import { Account } from '../../models/account'
@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit, OnDestroy {
  @Input() address: string;
  accounts: string[];
  accountData: Account
  balance: number = 0;

  status = '';
  cards = [];
  tokenSale: {
    tokenPrice: 1000000000000000,
    tokenSold: Number,
    progressPercent: Number
  }
  numberOfTokens = 0;
  avatar: string;
  tokens$: Observable<[]>;
  constructor(private web3Service: Web3Service,
    private accountService: AccountService) {
  }

  async ngOnInit() {

    await this.watchAccount();
    this.web3Service.mainAccountBalance$.subscribe(balance => this.balance = balance)
    this.avatar = this.createBlockie();

  }

  async watchAccount() {
    this.web3Service.accounts$.subscribe((accounts) => {
      console.log(accounts)
      this.accounts = accounts;
      this.address = accounts[0];

      this.accountService.tokensAccount(this.address).subscribe(data => {
        this.accountData = data
      })

    });

  }
  createBlockie() {
    return blockies.create({ seed: this.address, size: 8, scale: 16 }).toDataURL()

  }

  ngOnDestroy() {
    this.web3Service.accounts$.unsubscribe();
    this.web3Service.mainAccountBalance$.unsubscribe();
  }
}
