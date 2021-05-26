
function validate() {
    if (document.myForm.fName.value == "") {
        alert("Please provide your name!");
        document.myForm.fName.focus();
        return false;
    }
    if (document.myForm.lName.value == "") {
        alert("Please provide your last name!");
        document.myForm.lName.focus();
        return false;
    }
    if (document.myForm.email.value == "") {
        alert("Please provide your Email!");
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.phone.value == "") {
        alert("Please provide your phone!");
        document.myForm.phone.focus();
        return false;
    }
    if (document.myForm.password.value == "") {
        alert("Please provide your password!");
        document.myForm.password.focus();
        return false;
    }
    else {
        window.alert("welcom "+document.myForm.fName.value)
    }
}
function sale() {
    window.alert(
        "the product has been added in the basket"
    )
}
function init(){
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 
    }
    
    function moveRight(){
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
    }
    
    window.onload =init;


