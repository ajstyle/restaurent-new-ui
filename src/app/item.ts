export interface Item {
  id?: number;
  Name: string;
  Price: number;
  item_type: string;
  img_name?: string;
  img_url?: string;
  Quantity?: number;
  selectedModifier?: Array<any>  ;
  Modifiers?: Array<any> ;
}

export interface KDS extends Item {
  orderNumber: number ;
  

}
export interface TicketModifier {
  id?: number;
  name: string;
  Price: number;
  item_type: string;
  img_name?: string;
  img_url?: string;
  Quantity?: number;
  selectedModifier?: Array<any>  ;
  Modifiers?: Array<any> ;
}

export interface OrderObject {
order: Array<TicketModifier> ;
total: number ;
orderNumber: number ;
}
export interface Order {
  orderNumber: string;
  items?: Item[];
  cartTotal: number;
  cartNumItems?: number;

}


