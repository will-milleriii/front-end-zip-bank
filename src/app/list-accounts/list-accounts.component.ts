import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AccountListService} from '../services/account-list.service';

export class Account {
  constructor(
    public id: number,
    public accountNumber: string,
    public routingNumber: string,
    public accountType: string,
    public balance: number,
    public dateOfOpening: Date,
    public interestRate: number,
    public encryptedUrl: string)
  {
  }
}
@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {
 accounts: Account[];
 message: string;

  constructor(private router: Router , public listService: AccountListService) { }

  ngOnInit(): void {
    this.getAllAccounts();
  }

  // tslint:disable-next-line:typedef
  getAllAccounts()
  {
    this.listService.retrieveAllAccounts(1).subscribe(
      response => {
        console.log(response);
        // @ts-ignore
        this.accounts = response; },
    error => console.log('couldn\'t get because', error)
    );
  }

  // tslint:disable-next-line:typedef
  navigateToAccount(url)
  {
    this.router.navigate(['accounts', url]);
  }
}