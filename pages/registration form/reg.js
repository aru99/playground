function validatetype1() {
    var fullName= document.myform.fullName.value;
    var rollNumber = document.myform.rollNumber.value;
    var school = document.myform.school.value;
    var branch =document.myform.Branch.value;
    var address =document.myform.address.value;
    var phoneNumber= document.myform.phoneNumber.value;

    if(fullName=="")
    {
        alert("Name is mandatory");
        return false;
    }else if (rollNumber=="")
        {
        alert("roll number is mandatory");
            return false;
         }else if (school=="")
             {
                 alert("Name of school is mandatory");
                 return false;
             }else if(branch=="")
                {
                    alert("branch name is mandatory");
                    return false;
                }else if (address=="")
                    {
                        alert("address is mandatory");
                        return false;
                    }else if (pnoneNumber=="")
                        {
                            alert("phone number is mandatory");
                            return false;
                        }else {
                                alert("validation successful");
                                return true;
                             }



    }

function validatetype2() {
    var fullName= document.myform.fullName.value;
    var rollNumber = document.myform.rollNumber.value;
    var school = document.myform.school.value;
    var branch =document.myform.Branch.value;
    var address =document.myform.address.value;
    var phoneNumber= document.myform.phoneNumber.value;

    var exp_name=/^[a-zA-Z]*$/;
    var result_name =exp_name.test(fullName);
    if (result_name) {
        alert("name validation successfull");
    }else {
        alert("please enter a proper name");
        document.myform.fullName.focus();
        return false;
    }
    var exp_rollnumber=/^[0-9]+$/;
    var result_rollnumber=exp_rollnumber.test(rollNumber);
    if (result_rollnumber)
    {
        alert("roll number validation successful");
    }else{
        alert("please enter a vaild roll number");
        document.myform.rollNumber.focus();
        return false;
    }

    var exp_school=/^[a-zA-Z\s]*$/;
    var result_school=exp_school.test(school);
    if (result_school)
    {
        alert("roll number validation successful");
    }else{
        alert("please enter a vaild school");
        document.myform.school.focus();
        return false;
    }

    var exp_branch=/^[a-zA-Z]*$/;
    var result_branch=exp_branch.test(branch);
    if (result_branchl)
    {
        alert("branch validation successful");
    }else{
        alert("please enter a vaild branch");
        document.myform.branch.focus();
        return false;
    }

    var exp_address=/^[a-zA-Z0-9\s]*$/;
    var result_address=exp_address.test(address);
    if (result_address)
    {
        alert("address validation successful");
    }else{
        alert("please enter a vaild address");
        document.myform.address.focus();
        return false;
    }

    var exp_phonenumber=/^[0-9]*$/;
    var result_phonenumber=exp_phonenumber.test(phoneNumber);
    if (result_phonenumber)
    {
        alert("phone number validation successful");
    }else{
        alert("please enter a vaild phone number");
        document.myform.phoneNumber.focus();
        return false;
    }
}




























/*



  */
