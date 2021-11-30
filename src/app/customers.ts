import { last } from "rxjs";

export class Customers {
    customerId: string;
    fname: string;
    lname: string;
    email: string;
    mobile: string;
    category: string;

    constructor(customerId:any, fname:any, lname:any, email:any, mobile:any, category:any){
        this.customerId = customerId;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.mobile = mobile;
        this.category = category;

    }
}
