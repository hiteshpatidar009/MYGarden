
        function validation(){
            const uname = document.login.uname.value;
            const dateofbirth = document.login.dateofbirth.value;
            const phone = document.login.phone.value;
            const gender = document.login.gender.value;
            const reg = document.login.reg.value;
            const country = document.login.country.value;
            const state = document.login.state.value;
            const address = document.login.address.value;
            const pcountry = document.login.pcountry.value;
            const pstate = document.login.pstate.value;
            const paddress = document.login.paddress.value;
            const occupation = document.login.occupation.value;
            const email = document.login.email.value;
            const filename = document.login.filename.value;

            if(uname_validation(uname)){
                if(dateofbirth_validation(dateofbirth)){
                    if(phone_validation(phone,10)){
                        if(gender_validation(gender)){
                            if(reg_validation(reg)){
                                if(country_validation(country)){
                                    if(state_validation(state)){
                                        if(address_validation(address)){
                                          if(pcountry_validation(pcountry)){
                                              if (pstate_validation(pstate)){
                                                if(paddress_validation(paddress)){
                                                   if(occupation_validation(occupation)){
                                                     if(email_validation(email)){
                                                        if(filename_validation(filename)){
                                                            alert('Form Successfully Submitted');
                                                            return true;
                                                        }
                                                     }
                                                   }
                                                }
                                              }  
                                           }
                                        }
                                    }
                                }
                            
                            }
                        }
                    }
                }
            }
            return false;
        }

        function uname_validation(uname){
            var letter = /^[A-Z a-z\s]+$/;
            if(uname.match(letter)){
                return true;
            } else {
                alert("Please enter name value in alphabets");
                return false;
            }
        }

        function dateofbirth_validation(dateofbirth){
            if(dateofbirth){
                return true;
            } else {
                alert("Please enter a valid date of birth");
                return false;
            }
        }

        function phone_validation(phone, max){
            var letter = /^[0-9]+$/;
            var phone_len = phone.length;
            if(phone.match(letter) && phone_len == max){
                return true;
            } else {
                alert("Please re-enter phone number (10 digits)");
                return false;
            }
        }

        function gender_validation(gender){
            if(gender){
                return true;
            } else {
                alert("Please select Gender");
                return false;
            }
        }

        function reg_validation(reg){
            if(reg){
                return true;
            } else {
                alert("Please select Religion");
                return false;
            }
        }
    // Present address:
        function country_validation(country){
             if (country){
                return true;
            }else {
                alert("Please select Country");
                return false;
            }
        }

        function state_validation(state){
            if (state){
               return true;
           }else {
               alert("Please select your State");
               return false;
           }
       }

        function address_validation(address){
            letter=/^[A-Z a-z 0-9 \s]+$/;
            if(address.match(letter)){
                return true;
            }
            else{
                alert("Please enter your Address");
                return false;
            }
        }
// parmanet address:
        function pcountry_validation(pcountry){
            if (pcountry){
               return true;
           }else {
               alert("Please select your parmanet Country");
               return false;
           }
       }

       function pstate_validation(pstate){
           if (pstate){
              return true;
          }else {
              alert("Please select your parmanet State");
              return false;
          }
      }

       function paddress_validation(paddress){
           letter=/^[A-Z a-z 0-9 ]+$/;
           if(paddress.match(letter)){
               return true;
           }
           else{
               alert("Please enter your parmanet Address");
               return false;
           }
       }

       function occupation_validation(occupation){
         latter=/^[a-z A-Z \s]+$/;
         if(occupation.match(latter)){
            return(true);
         } else{
            alert("Place enter valid occupation");
            return false;
         }
       }

       function email_validation(email){
        letter=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(email.match(letter)){
            return true;
        } else{
            alert("Please Enter Valid Email");
            return false;
        }
       }

       function filename_validation(filename){
        if(filename){
            return true;
        } else{
            alert ("Please attach document file ");
            return false;
        }
       }


