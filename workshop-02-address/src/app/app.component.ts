import { Component, OnInit, OnDestroy } from '@angular/core';
import { Address } from './model';
import { AddressService } from './address.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private tabs = [
    { label: 'A - E', pattern: /^[a-e].*/i },
    { label: 'F - J', pattern: /^[f-j].*/i },
    { label: 'K - O', pattern: /^[k-o].*/i },
    { label: 'P - T', pattern: /^[p-t].*/i },
    { label: 'U - Z', pattern: /^[u-z].*/i }
  ]

  currentAddresses: Address[] = [];
  currentTab = 0;

  //svc is injected into the component
  constructor(private addressSvc: AddressService) { }

  ngOnInit() {
    this.addressSvc.findAddress(this.tabs[0].pattern)
      .then((addr: Address[]) => {
        this.currentAddresses = addr;
        console.log('initial load address: ', addr)
      })
      .catch(err => {
        console.error('error: ', err);
      })
  }

  ngOnDestroy() { }

  processAddress(address: Address) {
    console.log('address: ', address);

    this.addressSvc.addNeweAddress(address)
      .then(result => {
        //TODO: check if the new address is visible under the current 
        //tab, if it is reload the tab
        const patt = this.tabs[this.currentTab].pattern;

        //find if address is in this pattern
        this.addressSvc.findAddress(patt)
        .then((addre:Address[])=>{
          this.currentAddresses = addre;
        })

        console.log("Saved: ", result);
      })
      .catch(err => {
        console.error('err: ', err);
      });
  }

  loadAddress(event: MatTabChangeEvent) {
    this.currentTab = event.index;
    const patt = this.tabs[event.index].pattern;
    console.log('event: ', patt, typeof(patt))
    this.addressSvc.findAddress(patt)
      .then((addr: Address[]) => {
        this.currentAddresses = addr;
        console.log('address: ', addr)
      })
      .catch(err => {
        console.error('error: ', err);
      })
  }
}
