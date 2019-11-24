import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item, Order } from '../../item';
import { PosService } from '../../services/pos.service';
import { ApiService } from '../../services/api.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModifiersDialogComponent} from '../modifiers-dialog/modifiers-dialog.component';
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
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss'],
  animations: [
    trigger('displayState', [
      state('inactive', style({
        transform: 'translateY(-35%)',
        
      })),
      state('active',   style({
        transform: 'translateY(0%)'
      
      })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]) ,
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
export class PosComponent implements OnInit {
  hide = false;
  name = 'Angular 5';
  data = '<h1>test</h1>';
  products = [];
  productTypes = ['Sea Food', 'Mexican Food' , 'Deals'];
  ticket: Item[];
  cartTotal = 0;
  cartNumItems = 0;
  items;
  selectedItem ; 
  categories : Array<string> ;
  constructor(private ticketSync: PosService, private db: ApiService, 
              public dialog: MatDialog , private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this.ticketSync.currentTicket.subscribe(data => this.ticket = data  );
    this.ticketSync.currentTotal.subscribe(total => this.cartTotal = total);
    this.ticketSync.currentCartNum.subscribe(num => this.cartNumItems);
    this.products[0] = this.db.seaFood();
    this.products[1] = this.db.mexicanFood();
    this.products[2] = this.db.dealFood();

  }

  openDialog(item): void {
    // const dialogRef = this.dialog.open(ModifiersDialogComponent, {
    //   width: '800px',
    //   height : '800px',
    //   data : item
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
    const dialogRef = this.bottomSheet.open(ModifiersDialogComponent , {
        data : item
      });
    
  }



  addToCheck(item: Item) {
    // If the item already exists, add 1 to quantity
    if (this.ticket.includes(item)) {
      this.ticket[this.ticket.indexOf(item)].Quantity += 1;
    } else {
      this.ticket.push(item);
    }
    console.log(this.ticket);
    this.calculateTotal();
  }
  back() {
    this.hide = false ; 
  }
  
  selecteItemFunction(item) {
    console.log('item======', item);
    this.hide = true ;
    this.selectedItem = item ;
    this.categories = this.selectedItem.category;
    
    this.bottomSheet.open(ModifiersDialogComponent , {
      data : item
    });
  }

 
  // Calculate cart total
  calculateTotal() {
    let total = 0;
    let cartNum = 0;
    // Multiply item price by item quantity, add to total
    this.ticket.forEach((item: Item) => {
      total += (item.Price * item.Quantity);
      cartNum += item.Quantity;
    });
    this.cartTotal = total;
    this.cartNumItems = cartNum;
    this.ticketSync.updateNumItems(this.cartNumItems);
    this.ticketSync.updateTotal(this.cartTotal);
  }

  syncTicket() {
    this.ticketSync.changeTicket(this.ticket);
  }


}

