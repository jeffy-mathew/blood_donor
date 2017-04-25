import { Injectable } from '@angular/core';
@Injectable()
export class ValidateService {
    validateRegister(newreg: any) {
        if (newreg.first_name == undefined || newreg.last_name == undefined || newreg.phone == undefined || newreg.pwd == undefined || newreg.pwdcnf == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateSingleRegister(newdonor: any) {
        if (newdonor.first_name == undefined || newdonor.last_name == undefined || newdonor.phone == undefined || newdonor.addr1 == undefined || newdonor.addr2 == undefined || newdonor.location == undefined || newdonor.pincode == undefined || newdonor.gender == undefined || newdonor.bloodgroup == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
    validateEmail(email: any) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    validatePhone(phone: any) {
        var re = /^\d{10}$/;
        return re.test(phone);
    }
    validatePassword(pwd: any, pwdcnf: any) {
        if (pwd == pwdcnf) {
            return true;
        }
        else {
            return false;
        }
    }
    validatePincode(pincode:any){
              var re = /^\d{6}$/;
            return re.test(pincode);
        }

    validateSearch(loc: any, bgroup: any, date: any) {
        if (loc == undefined || bgroup == undefined || date == undefined) {
            return false;
        }
        else {
            return true;
        }
    }

}


