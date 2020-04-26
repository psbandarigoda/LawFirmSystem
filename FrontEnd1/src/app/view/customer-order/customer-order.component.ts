import {Component, OnInit} from '@angular/core';
import {CustomerOrderService} from "../../service/customerOrder.service";
import {ClientService} from "../../service/client.service";


@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {

  // // time = new Date();
  // // curDate = new Date();
  // itemName: string;
  // brand: string;
  // qty: number;
  // itemCount: number = 1;
  // discount: number;
  // lastAmount: number;
  // totalPrice: number = 0;
  // itemPrice: number = 0;
  // customerPhoneNo: String = 'DemoNumber';
  // customerId: number;
  // itemQtyOnHand: number = 0;
  // updateItemQty: number = 0;
  // points: number = 0;
  // currentPoints: number;
  // getLastOrderId: number;
  // whoisTheCustomer: number;
  // searchItemValuesIf = true;
  // // searchItemDetails: Array<Item> = new Array<Item>();
  // searchitembynameOrId: string;
  // Cusdetail: Customer = new Customer();
  // searchCustomerDetails: Customer = new Customer();
  // searchCustomerDetails1: Customer = new Customer();
  // searchCustomerValueIf = true;
  // addCusOrder: CustomerOrder = new CustomerOrder();
  // cusorderBill: CustomerOrderBillDTO = new CustomerOrderBillDTO();
  // // CusOrder: Array<CustomerOrder> = new Array<CustomerOrder>();
  // // orderList: Array<CustomerOrderDetail> = new Array<CustomerOrderDetail>();
  //
  constructor(private customerOrderService: CustomerOrderService, private customerService: ClientService) {

  }
  //
  //
  ngOnInit() {
    // setInterval(() => {
    //   this.time = new Date();
    // }, 1000);
  }
  //
  //
  // //ADD ITEMS TO THE CART TABLE
  // cusOrderDetail() {
  //   let orderListDetail: CustomerOrderDetail = new CustomerOrderDetail();
  //   let orderItemDetail: Item = new Item();
  //   this.searchItemDetails.forEach(function (value) {
  //     orderItemDetail.barCode = value.barCode;
  //     orderItemDetail.itemName = value.itemName;
  //     orderItemDetail.brand = value.brand;
  //     orderItemDetail.retailPrice = value.retailPrice;
  //     orderItemDetail.itemQtyOnHand = value.itemQtyOnHand;
  //     orderItemDetail.stockLevel = value.stockLevel;
  //   });
  //
  //   this.itemPrice = orderItemDetail.retailPrice;
  //   orderListDetail.qty = this.qty;
  //   orderListDetail.price = this.itemPrice = +this.itemPrice * +this.qty;
  //   orderListDetail.item = orderItemDetail;
  //
  //   this.updateItemQty = orderListDetail.item.itemQtyOnHand - this.qty;
  //   orderListDetail.item.itemQtyOnHand = this.updateItemQty;
  //
  //   if (this.qty != null) {
  //     this.orderList.push(orderListDetail);
  //     this.totalPrice = +this.totalPrice + +this.itemPrice;
  //   } else {
  //     alert('Order Qty NULL')
  //   }
  // }


  //ADD CUSTOMER ORDER & LOYALTY POINTS GENERATING
  // addCustomerOrder() {
  //   this.addCusOrder = new CustomerOrder();
  //
  //   this.addCusOrder.date = this.curDate;
  //   this.addCusOrder.discount = this.discount;
  //   this.addCusOrder.totalPrice = this.totalPrice;
  //
  //   this.customerService.searchCustomerPoints(this.customerPhoneNo).subscribe((result) => {
  //
  //     if (result == null) {
  //       this.searchCustomerValueIf = true;
  //     } else {
  //       this.searchCustomerValueIf = false;
  //       this.searchCustomerDetails1 = result;
  //       this.customerId = this.searchCustomerDetails1.cusID;
  //
  //       this.Cusdetail = new Customer();
  //       this.Cusdetail.cusID = this.customerId;
  //
  //       this.addCusOrder.customer = this.Cusdetail;
  //       this.addCusOrder.customerOrderDetailSet = this.orderList;
  //       this.addCusOrder.customerOrderDetailSet[0];
  //
  //       //Customer Order Adding
  //       if (this.addCusOrder.customerOrderDetailSet != null && this.addCusOrder.totalPrice != 0) {
  //         this.customerOrderService.addCustomerOrder(this.addCusOrder).subscribe((result) => {
  //
  //           if (result != null) {
  //             alert('Order Added SuccessFully');
  //             window.location.reload();
  //             this.addCusOrder = new CustomerOrder();
  //             this.Cusdetail = new Customer();
  //             console.log(this.CusOrder);
  //           }
  //         });
  //       } else {
  //         alert('Order is NULL')
  //       }
  //     }
  //
  //   });
  //
  //   //CustomerOrderDetailsSearch
  //   this.customerOrderService.searchOrderDetails(17).subscribe((result) => {
  //     console.log("mmmmmmmmm" + this.whoisTheCustomer);
  //     if (result != null) {
  //       console.log("ssssssssssssssssssss" + result);
  //     }
  //   });
  //
  //   //CustomerOrderBillPrint
  //   this.customerOrderService.printBill(this.addCusOrder).subscribe((result) => {
  //     if (result != null) {
  //       console.log("pppppppppppppppppppppp" + result);
  //     }
  //   });
  //
  //   //loyalty points generating
  //   if (this.lastAmount > 50000) {
  //     this.points = 15;
  //   } else if (this.lastAmount > 10000) {
  //     this.points = 10;
  //   } else if (this.lastAmount > 5000) {
  //     this.points = 5;
  //   } else if (this.lastAmount > 1000) {
  //     this.points = 1;
  //   }
  //
  //   if (this.customerPhoneNo != 'DemoNumber') {
  //     this.Cusdetail = new Customer();
  //     this.Cusdetail = this.searchCustomerDetails;
  //     this.Cusdetail.loyaltyPoints = this.currentPoints + +this.points;
  //     this.customerService.updateLoyaltyPoints(this.Cusdetail).subscribe((result) => {
  //
  //       if (result != null) {
  //         this.Cusdetail = new Customer();
  //         console.log(this.Cusdetail);
  //       }
  //     });
  //   }


  //SEARCH ITEM DETAILS
  // searchItemByNameOrId(event: any) {
  //   if (this.searchitembynameOrId.length != 0) {
  //     this.customerOrderService.searchItemDetailsByBarcode(this.searchitembynameOrId).subscribe((result) => {
  //       if (result == null) {
  //         this.searchItemValuesIf = true;
  //       } else {
  //         this.searchItemValuesIf = false;
  //         this.searchItemDetails = result;
  //       }
  //     });
  //   } else {
  //     this.searchItemValuesIf = true;
  //   }
  // }
  //
  //
  // //REMOVE ITEM FROM CART TABLE
  // deleteRow(id) {
  //   for (let i = 0; i < this.orderList.length; ++i) {
  //     if (this.orderList[i].item.barCode === id) {
  //       this.orderList.splice(i, 1);
  //       this.totalPrice = this.totalPrice - this.itemPrice;
  //     }
  //   }
  // }
  //
  // //REMOVE CUSTOMER LOYALTY DETAILS
  // removeCustomer() {
  //   this.totalPrice = this.lastAmount;
  //   if (this.totalPrice == this.lastAmount) {
  //     this.customerPhoneNo = null;
  //     this.discount = null;
  //     this.lastAmount = null;
  //   }
  // }
  //
  //
  // //LAST ORDER UNDO
  // lastOrderUndo() {
  //   this.getLastOrderId = 11;
  //   this.customerOrderService.lastOrderUndo(this.getLastOrderId);
  //
  //   this.customerOrderService.searchLastOrder().subscribe((result) => {
  //     if (result == null) {
  //     } else {
  //       this.getLastOrderId = 3;
  //       console.log(result);
  //       if (this.getLastOrderId != null) {
  //         this.customerOrderService.lastOrderUndo(this.getLastOrderId).subscribe();
  //         alert('Last Order Delete SuccessFully')
  //       }
  //     }
  //   });
  // }
  //
  //
  // //ADD DISCOUNT ACCORDING TO THE CUSTOMER'S LOYALTY POINTS
  // addDiscount() {
  //   if (this.customerPhoneNo != 'DemoNumber') {
  //     this.lastAmount = this.totalPrice;
  //
  //     this.customerService.searchCustomerPoints(this.customerPhoneNo).subscribe((result) => {
  //
  //       if (result == null) {
  //         this.searchCustomerValueIf = true;
  //       } else {
  //         this.searchCustomerValueIf = false;
  //         this.searchCustomerDetails = result;
  //         this.currentPoints = this.searchCustomerDetails.loyaltyPoints;
  //
  //         if (this.currentPoints >= 1000) {
  //           this.discount = this.totalPrice * 0.10;
  //           this.totalPrice = this.totalPrice - this.discount;
  //         } else if (this.currentPoints >= 500) {
  //           this.discount = this.totalPrice * 0.05;
  //           this.totalPrice = this.totalPrice - this.discount;
  //         } else if (this.currentPoints >= 100) {
  //           this.discount = this.totalPrice * 0.01;
  //           this.totalPrice = this.totalPrice - this.discount;
  //         } else if (this.currentPoints < 100) {
  //           this.discount = this.totalPrice * 0.005;
  //           this.totalPrice = this.totalPrice - this.discount;
  //         }
  //       }
  //     });
  //   }
  }

