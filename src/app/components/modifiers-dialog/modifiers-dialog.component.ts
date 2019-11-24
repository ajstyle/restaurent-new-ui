import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material';
import { PosService } from '../../services/pos.service';
import { ApiService } from '../../services/api.service';
import { Item, Order, TicketModifier } from '../../item';
import {MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';
@Component({
  selector: 'app-modifiers-dialog',
  templateUrl: './modifiers-dialog.component.html',
  styleUrls: ['./modifiers-dialog.component.scss'],
  animations: [
    trigger('displayState', [
      state('inactive', style({
        transform: 'translateY(-40%) scale(0.5)',
        
      })),
      state('active',   style({
        transform: 'translateY(0%) scale(1)'
      
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]) ,

    trigger('scale', [
      state('scaleIn', style({ transform: 'scale(1)' })),
      state('scaleOut', style({ transform: 'scale(1.7)' })),
      transition('scaleIn <=> scaleOut', animate('500ms linear'))
    ]),
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ModifiersDialogComponent implements OnInit {
  public scale = 'scaleIn';

  hide = false ; 
  cartTotal = 0;
  cartNumItems = 0;
  ticket: Item[];
  ticketModifier: TicketModifier[];
  modifier = [];
  flag = true;
  selectedOptions: Array<any> = [];
  currentSelected: string;
  totalAmount = 0;
  total = 0;
  step = 0;
  show = true;
  quantity = 1 ;
  productPrice : number ;
  disableSubstract = false  ; 
  // constructor(@Inject(MAT_DIALOG_DATA) public data ,
  //             public dialogRef: MatDialogRef<ModifiersDialogComponent>,
  //             private ticketSync: PosService, private db: ApiService) {
  // }
 constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data ,
 private _bottomSheetRef: MatBottomSheetRef<ModifiersDialogComponent>,
              private ticketSync: PosService, private db: ApiService) {
  }
  ngOnInit() {
    console.log('======get data', this.data);
    this.data['quantity'] = 1 ;
     this.productPrice = this.data.Price
    this.ticketSync.currentTicket.subscribe(data => this.ticket = data);
    this.ticketSync.currentTotal.subscribe(total => this.cartTotal = total);
    this.ticketSync.currentCartNum.subscribe(num => this.cartNumItems);
    this.ticketSync.currentTicketModifier.subscribe(data => {this.ticketModifier = data;
      console.log('=========',this.ticketModifier );
     } );
    if (this.data.Modifiers.Deals) {
      this.defaultItemDeals();
    } else {
      this.defaultItem();
    }
    console.log(this.selectedOptions);
    this.totalAfterAddModifier();
    if( this.data['quantity'] < 1 ) {
      this.disableSubstract = true ; 
    }
  
  }


  addItem(){
    this.data['quantity'] += 1 ;
     this.productPrice = this.data['quantity'] * this.data.Price;
    console.log(this.productPrice) ; 
  }

  subtractItem() {
    
  this.data['quantity'] -= 1 ;    
  this.productPrice = this.data['quantity'] * this.data.Price;
  
 }





  close() {
    this._bottomSheetRef.dismiss();
  }
  totalAfterAddModifier() {
    const totalRs = this.selectedOptions.reduce((accumulator, currentValue) => {
      console.log(accumulator + currentValue.Price);
      return accumulator + currentValue.Price;
    }, 0);
    console.log('total===', this.total);
    this.totalAmount = this.data.Price + totalRs;
    console.log(this.totalAmount);
  }

  defaultItem() {
    console.log(this.data.Modifiers);
    // tslint:disable-next-line:forin
    for (const key in this.data.Modifiers) {
      this.data.Modifiers[key].map(x => {
        console.log(x);
        if (x.Default) {
          this.selectedOptions.push(x);
        }
      });
    }
  }

  defaultItemDeals() {
    console.log('====', this.data.Modifiers);
    const data = this.data.Modifiers ;
    console.log( data.Deals);

    data.Deals.forEach( (e) => {
      console.log(e);

    // tslint:disable-next-line:forin
      for (const key in e) {
        console.log(key);
        if (key !== 'category') {
          e[key].map(x => {
            console.log(x);
            if (x.Default) {
              this.selectedOptions.push(x);
            }
          });
        }

    }
  } );
  }
  toggle() {
    this.show = !this.show;
  }

  customize(){
    this.hide = true ; 
   // this.scale = this.scale === 'scaleIn' ? 'scaleOut' : 'scaleIn';

  }
  onSelection(e, v) {
    this.currentSelected = e.option.value;
    if (this.selectedOptions.includes(e.option.value)) {
      this.selectedOptions.splice(this.selectedOptions.indexOf(e.option.value), 1);
      this.totalAfterAddModifier();
    } else {
      if (e.option.selected) {
        this.selectedOptions.push(e.option.value);
        this.totalAfterAddModifier();
      }
    }
  }
  setStep(index: number) {
    this.step = index;
  }

  addModifier() {
    const obj = JSON.parse(JSON.stringify(this.data));
    obj.Price = this.totalAmount;
    obj.selectedModifier = this.selectedOptions;
    obj.Quantity = 1;
    this.ticketModifier.push(obj);
    this.calculateTotal();
    this.ticketSync.ticketModifiers(this.ticketModifier);
  }
  calculateTotal() {
    let total = 0;
    let cartNum = 0;
    console.log('calculate', this.ticket);
    this.ticketModifier.forEach((item: TicketModifier) => {
      console.log('selectedModifier;', item);
      total += (item.Price * item.Quantity);
      cartNum += item.Quantity;
    });

    this.cartTotal = total;
    this.cartNumItems = cartNum;
    console.log('cartNumItems', this.cartNumItems);
    this.ticketSync.updateNumItems(this.cartNumItems);
    this.ticketSync.updateTotal(this.cartTotal);
    this._bottomSheetRef.dismiss();
  }

}

