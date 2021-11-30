
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CdkTableExporterModule } from 'cdk-table-exporter';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.css']
})
export class RestComponent implements OnInit {

  fname: any;
  searchString: any;
  p: number = 1;
  selectedCustomerIdList: any = [];
  selectedCustomerIdListSize: any = 0
  array = [];
  selectedAll: any = false;
  customerList: any = [];
  checkedBx: any = false;
  customers:any = [];
  //   {
  //     "customerId": 5,
  //     "fname": "Endeshaw",
  //     "lname": "Abebe",
  //     "email": "seydo.ess@gmail.com",
  //     "mobile": "2222",
  //     "status": "FAIL",
  //     "category": "STD"
  //   },
  //   {
  //     "customerId": 10,
  //     "fname": "Salas",
  //     "lname": "Seydo",
  //     "email": "seydo.ess@gmail.com",
  //     "mobile": "2222",
  //     "status": "PASS",
  //     "category": "STD"
  //   },
  //   {
  //     "customerId": 15,
  //     "fname": "Salas",
  //     "lname": "Seydo",
  //     "email": "seydo.ess@gmail.com",
  //     "mobile": "2222",
  //     "status": "PASS",
  //     "category": "STD"
  //   },
  //   {
  //     "customerId": 20,
  //     "fname": "Solo",
  //     "lname": "Mekury",
  //     "email": "seydo.ess@gmail.com",
  //     "mobile": "2222",
  //     "status": "PASS",
  //     "category": "PLT"
  //   },
  //   {
  //     "customerId": 25,
  //     "fname": "Salas",
  //     "lname": "Seydo",
  //     "email": "seydo.ess@gmail.com",
  //     "mobile": "2222",
  //     "status": "FAIL",
  //     "category": "GD"
  //   }
  // ]

  catList: any = [
    { 'id': 'STD', 'name': 'standard' },
    { 'id': 'STDP', 'name': 'standard Plus' },
    { 'id': 'PLT', 'name': 'Platinuim' },
    { 'id': 'GD', 'name': 'Gold' },
  ]


  constructor(public dialog: MatDialog, public _toastr: ToastrService, private _restservice: RestService) { }


  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
    this._restservice.getCustomerList().subscribe(data => {
      this.customers = data;

      console.log("get customer list /////  :  " + this.customers.length);
      
      this.customers.sort(function (a:any, b:any) {
        var valA = a.custId;
        var valB = b.custId;

        return (valA > valB) ? -1 : (valA < valB) ? 1 : 0;
      });
    });
  }
  getCategorySelected(evt: any) {
    console.log("Here is ID from selected category  :  " + evt.id);
    this.customerList = [];
    console.log("Before loop  :  " + evt.id);
    console.log("Before loop customers size    :  " + this.customers.length);
    for (var i = 0; i < this.customers.length; i++) {
      console.log("After loop  :  " + evt.id);
      if (this.customers[i].category === evt.id) {
        console.log("In for loop Here is ID from selected category  :  " + "From List  : " + this.customers[i].category + "  From Selected :  " + evt.id);
        this.customerList.push(this.customers[i])
      }
    }
  }
  pageSize = this.customerList.length;

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  checkUncheck(val: any, obj: any, curindex: any) {
    console.log("from checkUncheck  : " + val + obj + curindex)
    if (val) {
      if (obj.selected && this.selectedCustomerIdList.indexOf(obj.customerId + curindex) === -1) {
        this.selectedCustomerIdList.push(obj.customerId + curindex);
        console.log("first cust id :  " + this.selectedCustomerIdList[0]);
      }
    } else {
      this.selectedCustomerIdList.splice(this.selectedCustomerIdList.indexOf(obj.customerId + curindex));
      this.selectedAll = false;
    }

    this.selectedCustomerIdListSize = this.selectedCustomerIdList.length;
  }

  selecteAll(val: any) {

    console.log("from selecteAll  : " + val);

    if (val == "") {
      this.selectedAll = !this.selectedAll;
      console.log("from selecteAll first if  : " + this.selectedAll);
    }

    if (this.selectedAll === true) {
      this.selectAllCheckBox(true);
      this.checkedBx = true;
    } else {
      console.log("from selecteAll else  : " + this.selectedAll);
      for (var i = 0; i < this.customerList.length; i++) {
        this.customerList[i].selected = val;
        this.checkUncheck(val, this.customerList[i], i);
      }

      this.checkedBx = false;
    }

  }

  searcingString: string = '';
  selectAllCheckBox(val: any) {
    for (var i = 0; i < this.customerList.length; i++) {
      // if(this.customerList[i].customerId && this.customerList[i].customerId.toUpperCase().includes(this.searchString.toUpperCase())){
      //   this.customerList.selected = val;
      // }
      // if(this.customerList[i].fname && this.customerList[i].fname.toUpperCase().includes(this.searchString.toUpperCase())){
      //   this.customerList.selected = val;
      // }
      // if(this.customerList[i].lname && this.customerList[i].lname.toUpperCase().includes(this.searchString.toUpperCase())){
      //   this.customerList.selected = val;
      // }
      // if(this.customerList[i].email && this.customerList[i].email.toUpperCase().includes(this.searchString.toUpperCase())){
      //   this.customerList.selected = val;
      // }
      // if(this.customerList[i].mobile && this.customerList[i].mobile.toUpperCase().includes(this.searchString.toUpperCase())){
      //   this.customerList.selected = val;
      // }
      // if(this.customerList[i].status && this.customerList[i].status.toUpperCase().includes(this.searchString.toUpperCase())){
      //   this.customerList.selected = val;
      // }

      this.customerList[i].selected = val;

      this.checkUncheck(val, this.customerList[i], i);
    }
  }

  checkIfAllSelected(i: any, val: any, curSelectedObj: any, curindex: any) {

    for (let curObj of this.customerList) {
      if (curObj === curSelectedObj) {
        curObj.selected = val;
        this.checkUncheck(val, curObj, curindex);
      }
    }
  }

  downloadCSV() {
    var tempList: any = [];
    var fileName = "Customers";
    this.customerList.forEach((cust: any) => {
      if (cust.selected) {
        console.log("selected value //// :  " + cust.customerId);

        cust.CustID = cust.customerId;
        cust.FirstName = cust.fname;
        cust.LastName = cust.lname;
        cust.Email = cust.email;
        cust.Mobile = cust.mobile;
        cust.Status = cust.status;

        tempList.push(cust);
      }
    });
    if (!tempList) {
      tempList.push({ 'id': '' });
    }

    var csv = this.exportToCsv(fileName, tempList, ['CustID', 'FirstName', 'LastName', 'Email', 'Mobile', 'Status']);
  }

  exportToCsv(filename: string, rows: any[], columns: string[]) {
    if (!rows || !rows.length) {
      console.log('exportToCsv');
      return;
    }

    const separater = ',';
    const keys = Object.keys(rows[0]).filter(k => {
      console.log('test1');
      if (columns.length) {
        return columns.includes(k);
      } else {
        return true;
      }
    });

    const csvContent = keys.join(separater) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          return cell;
        }).join(separater);
      }).join('\n');

      const blob = new Blob([csvContent], {type: 'text/csvContent;charset=utf-8;'});
      // if(Navigator.msSaveBlob){

      // }
  }

  openDialog() {
    var dialogResult = '';
    const dialogRef = this.dialog.open(DialogConfirmation, {
      data: {
        result: dialogResult
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      dialogResult = result;
      if (result === 'delete') {
        this.removeCustomer();
      }
    });
  }


  removeCustomer() {
    var inxArrTodelete: any = [];
    console.log(this.customerList);
    console.log("Before loop");
    for (var i = 0; i < this.customerList.length; i++) {
      console.log("After loop");
      if (this.customerList[i].selected == true) {
        console.log("in if loop");
        console.log(this.customerList[i]);
        inxArrTodelete.push(i);
      }
    }

    // inxArrTodelete.array.forEach((element: any) => {
    //   this.customerList.splice(element, 1);
    // });

    for (var i = 0; i < inxArrTodelete.length; i++) {
      console.log("After delete loop \\\ ");
      this.customerList.splice(inxArrTodelete[i], 1);
      console.log("After delete element \\\ ");
      this._toastr.success('Custemer is Deleted Successfully!!', 'Success!');
      console.log("After delete alert \\\ ");
    }
  }


}

@Component({
  selector: 'dialog-confirmation',
  templateUrl: './rest-dialog.html',
})
export class DialogConfirmation {
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmation>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    data.result = 'delete';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

