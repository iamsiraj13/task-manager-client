import cogoToast from "@successtar/cogo-toast";

let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper{

    isEmpty(value){
        return value.length === 0;
    }
    isMobile(mobile){
        return MobileRegx.test(mobile)
    }
    isEmail(email){
        return !EmailRegx.test(email)
    }

    ErrorToast(mgs){
        cogoToast.error(mgs,{position:"bottom-center"})
    }
   
    SuccessToast(mgs){
        cogoToast.success(mgs,{position:"bottom-center"})
    }
   

}

export const {isEmpty,ErrorToast,SuccessToast,isMobile,isEmail} = new FormHelper();


// ErrorToast(msg) {
//     cogoToast.error(msg, { position: "bottom-center" });
// }
// SuccessToast(msg) {
//     cogoToast.success(msg, { position: "bottom-center" });
// }