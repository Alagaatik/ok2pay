
function home (argument) {
    

var data="action=home";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;


ve();

     }
    
  xhr.send(data);


    }

    function va (argument) {
    

var data="action=va";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   if (xhr.responseText =="sss") {
   document.getElementById('vam2').click();
   }
else{
  not();
}
     }
    
  xhr.send(data);


    }

  function uacc (argument) {
    

var data="action=uacc";

     
     document.getElementById('uaccbtn').disabled=true;
document.getElementById('uaccbtn').innerHTML='Updating....';
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   if (xhr.responseText=="true") {
     Swal.fire({title:"Good job!",text:"Your Account Has been Upgraded!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('uaccbtn').disabled=true;
document.getElementById('uaccbtn').innerHTML='Updated';
   }
   else{
 Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('uaccbtn').disabled=false;
document.getElementById('uaccbtn').innerHTML='Update';
   }

     }
    
  xhr.send(data);


    }




      function vacc (code) {
    

var data="action=vacc";

     
     document.getElementById('uaccbtn').disabled=true;
document.getElementById('uaccbtn').innerHTML='Updating....';
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   if (xhr.responseText=="true") {
     Swal.fire({title:"Good job!",text:"Your Account Has been Verified!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('uaccbtn').disabled=true;
document.getElementById('uaccbtn').innerHTML='Updated';
setTimeout(function(){window.location=window.location},2000);
   }
   else{
 Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('uaccbtn').disabled=false;
document.getElementById('uaccbtn').innerHTML='Update';
   }

     }
    if (code == document.getElementById('realc').value) {
 xhr.send(data);
    }
 else{
  Swal.fire({title:"Error",text:"Invalid Code",icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
 
 }


    }



function usec (argument) {
    

var data="action=usec&pin="+document.getElementById('pin').value;

     
     document.getElementById('usecbtn').disabled=true;
document.getElementById('uaccbtn').innerHTML='Loading....';
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   if (xhr.responseText=="true") {
     Swal.fire({title:"Good job!",text:"Your Account Pin Has been Set!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('usecbtn').disabled=true;
document.getElementById('usecbtn').innerHTML='Updated';
   }
   else{
 Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('usecbtn').disabled=false;
document.getElementById('usecbtn').innerHTML='Update';
   }

     }


     if (document.getElementById('pin').value.length == 4) {
if (document.getElementById('pin').value == document.getElementById('pin1').value ) {
 xhr.send(data);
    }
 
else{
   Swal.fire({title:"Error",text:"You Must Set The Same Pin",icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('usecbtn').disabled=false;
}
     }
     else{
       Swal.fire({title:"Error",text:"Pin Must Be 4 Digit",icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    document.getElementById('usecbtn').disabled=false;
     }
    

    }




    function vbvn (argument) {
    
document.getElementById('bvnbtn').disabled=true;
document.getElementById('bvnbtn').innerHTML='Verifying....';
var data="action=vbvn&bvn="+document.getElementById('bvn').value+'&bvnfn='+document.getElementById('bvnfn').value+'&bvnln='+document.getElementById('bvnln').value;

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
  if (!xhr.responseText) {
document.getElementById('bvnerr').innerHTML='';
document.getElementById('bvnbtn').innerHTML='Verified';
    Swal.fire({title:"Good job!",text:"Your Bvn Has Been Verified!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
  }
  else{
document.getElementById('bvnbtn').disabled=false
document.getElementById('bvnbtn').innerHTML='Verify Bvn.';
document.getElementById('bvnerr').innerHTML=xhr.responseText;
  }

     }
    
  xhr.send(data);


    }


function bills (argument) {
    

var data="action=bills";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }
    function airtime (argument) {
    

var data="action=airtime";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }


     function data (argument) {
    

var data="action=data";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }


     function profile (argument) {
    

var data="action=profile";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }


    function cable (argument) {
    

var data="action=cable";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }

      function history (argument) {
    

var data="action=history";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }

        function reff (argument) {
    

var data="action=reff";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }


     function loans (argument) {
    

var data="action=loans";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }

        function savings (argument) {
    

var data="action=savings";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }
  function withdraw(argument) {
    

var data="action=withdraw";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }
    function bc(gg) {
 

if ( gg <= Number( document.getElementById('cvg').innerHTML) ) {
  document.getElementById('kjh').disabled=false;
  console.log(gg);
}
else{
   document.getElementById('kjh').disabled=true;
}

}

    function ele (argument) {
    

var data="action=ele";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }


function waec (argument) {
    

var data="action=waec";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
   document.getElementById('main').innerHTML=xhr.responseText;

     }
    
  xhr.send(data);


    }


    function paycable (sm,cp,cn,pp,c1,c2) {
    

var data="action=paycable&sm="+sm+"&cp="+cp+'&cn='+cn+'&price='+pp+'&name='+c1+'&name1='+c2;

     document.getElementById('c'+cn+'btn').disabled=true;
     document.getElementById('c'+cn+'btn').innerHTML='Loading...';
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
  
      if (!xhr.responseText) {
        Swal.fire({title:"Good job!",text:"Your Cable Subscription has been paid!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else if (xhr.responseText==""){
        document.getElementById('c'+cn+'btn').disabled=false;
     document.getElementById('c'+cn+'btn').innerHTML='Proceed';
     console.log(xhr.responseText); 
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else{
         document.getElementById('c'+cn+'btn').disabled=false;
     document.getElementById('c'+cn+'btn').innerHTML='Proceed';
     console.log(xhr.responseText); 
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      
      }
     }
    
  xhr.send(data);


    }

    function payele (dist,mn,mt,ma,cp,dist1) {
    

var data="action=payele&dist="+dist+"&mn="+mn+'&mt='+mt+'&ma='+ma+'&cp='+cp+'&dist1='+dist1;

     document.getElementById('elh').disabled=true;
     document.getElementById('elh').innerHTML='Loading...';
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
  
      if (xhr.responseText=="good") {
        Swal.fire({title:"Good job!",text:"Your Electricity Bill Subscription has been paid!<br>Please Check transaction history for your token",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else if (xhr.responseText==""){
        document.getElementById('elh').disabled=false;
     document.getElementById('elh').innerHTML='Proceed';
     console.log(xhr.responseText); 
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else{
         document.getElementById('elh').disabled=false;
     document.getElementById('elh').innerHTML='Proceed';
     console.log(xhr.responseText); 
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      
      }
     }
    
  xhr.send(data);


    }




    function payairtime (net,ph,amt) {
    

var data="action=payairtime&net="+net+"&phone="+ph+'&amt='+amt;

     document.getElementById('payair').disabled=true;
     document.getElementById('payair').innerHTML='Loading...';
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
  
      if (!xhr.responseText) {
        Swal.fire({title:"Good job!",text:"Your Airtime Top up has been paid!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else if (xhr.responseText==""){
        document.getElementById('payair').disabled=false;
     document.getElementById('payair').innerHTML='Proceed';
     console.log(xhr.responseText); 
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else{
         document.getElementById('payair').disabled=false;
     document.getElementById('payair').innerHTML='Proceed';
     console.log(xhr.responseText); 
         document.getElementById('payair').disabled=false;
     document.getElementById('payair').innerHTML='Proceed';
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      
      }
     }
    
  xhr.send(data);


    }





    function paydata (cp1,cp,net,amt,netn,plann) {
    

var data="action=paydata&dphone="+cp1+"&plan="+cp+'&net='+net+'&price='+amt+'&netn='+netn+'&plann='+plann;

     document.getElementById('c'+net+'btn').disabled=true;
     document.getElementById('c'+net+'btn').innerHTML='Loading...';
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
  
      if (xhr.responseText=="good") {
        Swal.fire({title:"Good job!",text:"Your Data Subscription has been paid!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else if (xhr.responseText==""){
        document.getElementById('c'+net+'btn').disabled=false;
     document.getElementById('c'+net+'btn').innerHTML='Proceed';
     console.log(xhr.responseText); 
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      }
      else{
         document.getElementById('c'+net+'btn').disabled=false;
     document.getElementById('c'+net+'btn').innerHTML='Proceed';
     console.log(xhr.responseText); 
        Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
      
      }
     }
    
  xhr.send(data);


    }

    function updd() {
  var bank=document.getElementById('fn').value;
  var number=document.getElementById('ln').value;
  var number1=document.getElementById('kj').value;

var data="action=updd&fname="+bank+"&phone="+number+'&email='+number1;

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {

     document.getElementById('widt').innerHTML='Updated';
          console.log(xhr.responseText);

     }
    
  xhr.send(data);
}
function pass() {
 if(document.getElementById('pass5').value == document.getElementById('pass').value){
  document.getElementById('pass').style.borderColor='green';
  if (document.getElementById('pass1').value != "") {
if(document.getElementById('pass1').value == document.getElementById('pass2').value){
document.getElementById('widthh').disabled=false;
document.getElementById('pass1').style.borderColor='green';
document.getElementById('pass2').style.borderColor='green';



}
else{
  document.getElementById('widthh').disabled=true;
  document.getElementById('pass1').style.borderColor='red';
document.getElementById('pass2').style.borderColor='red';
 }
  }


}
else{
  document.getElementById('pass').style.borderColor='red';
}

}



function pass3() {
 if(document.getElementById('pass5').value == document.getElementById('ppass').value){
  document.getElementById('ppass').style.borderColor='green';
  if (document.getElementById('ppin').value != "") {
if(document.getElementById('ppin').value == document.getElementById('ppin1').value){
document.getElementById('widthhh').disabled=false;
document.getElementById('ppin').style.borderColor='green';
document.getElementById('ppin1').style.borderColor='green';



}
else{
  document.getElementById('widthhh').disabled=true;
  document.getElementById('ppin1').style.borderColor='red';
document.getElementById('ppin').style.borderColor='red';
 }
  }


}
else{
  document.getElementById('ppass').style.borderColor='red';
}

}
function pass1() {
 var data="action=upddd&fname="+document.getElementById('pass1').value;

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {


     }
    
  xhr.send(data);
}

function pass10() {
 var data="action=updpin&fname="+document.getElementById('ppin').value;

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
if (xhr.responseText=="true") {
 Swal.fire({title:"Good job!",text:"Pin Changed Succesfully",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    
}
else{
   Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    
}
     }
    if (document.getElementById('ppin').value.length == 4) {
       xhr.send(data);
    }
    else{
         Swal.fire({title:"Error",text:"Must Be 4 Digits",icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
     document.getElementById('widthhh').innerHTML='Change Pin';
    }
 
}

  function acctv() {
    
var data="action=verifyacct&bank="+document.getElementById('bank').value+"&acct="+document.getElementById('number').value;

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
      if (xhr.responseText !='kk') {

          document.getElementById('aname').value=xhr.responseText;
          document.getElementById('with2').style.display='block';
               document.getElementById('widt').innerHTML='Verify';
      }
      else{

          document.getElementById('aname').value='Account Doesnt Match Name';
           document.getElementById('with2').style.display='none';
           document.getElementById('widt').innerHTML='Verify';
           document.getElementById('widt').disabled=false;
      }
console.log(xhr.responseText);
     }
    
  xhr.send(data);
 
 }


 function sendw(g,g1) {
  var bank=document.getElementById('bank').options[document.getElementById('bank').selectedIndex].text;
  var number=document.getElementById('number').value;

var data="action=sendw&bank="+bank+"&num="+number+"&amt="+g1;

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {

     document.getElementById('kjh').innerHTML='Request Sent';
     document.getElementById('kjh').disabled=true;
     console.log(xhr.responseText);

     }
    
  xhr.send(data);
}



function logout(argument) {
 var data="action=logout";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
window.location='../login.html';

     }
    
  xhr.send(data);
}



function loan(amt,reason,address,bvn,rp) {
 var data="action=loan&amt="+amt+"&reason="+reason+"&address="+address+"&bvn="+bvn+"&rp="+rp;

     document.getElementById('loanbtn').disabled=true;
     document.getElementById('loanbtn').innerHTML='loading...';
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
if (xhr.responseText=="success") {
 Swal.fire({title:"Good job!",text:"Your Loan Request has been Submitted!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
    
}   
else{
  Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
       
     }
     document.getElementById('loanbtn').disabled=false;
     document.getElementById('loanbtn').innerHTML='Apply';
     }
     
    
  xhr.send(data);
}

function save (plan,amt,dur,int,btn,mm){

 var data="action=save&plan="+plan+"&amt="+amt+"&dur="+dur+"&int="+int+"&when="+mm;

     btn.disabled=true;
     btn.innerHTML='Loading...';
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
if (xhr.responseText=="true") {
Swal.fire({title:"Good job!",text:"Your Saving Plan has started!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
 

}

else{
 Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
       
     btn.disabled=false;
     btn.innerHTML='Start Savings Plan';
}

     }
    
  xhr.send(data);
}






function cablec(val,cab,zzz,btn) {
  btn.disabled=true;
  btn.innerHTML='Verifying....';
 var data="action=cablec&val="+val+"&cab="+cab;

     document.getElementById('c'+zzz+'btn').true=false;
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {

if (xhr.responseText !=="error" && xhr.responseText !=="" ) {
    btn.disabled=false;
  btn.innerHTML='Verified';
document.getElementById('c'+zzz+'btn').disabled=false;

document.getElementById('f'+zzz).innerHTML=xhr.responseText;
}

else{
    btn.disabled=false;
  btn.innerHTML='Verify';
  document.getElementById('f'+zzz).innerHTML="Smartcard/ICU Validation failed";
}
     }
    
  xhr.send(data);
}




function elec(val,cab,btn,zzz) {
  btn.disabled=true;
  btn.innerHTML='Verifying....';
 var data="action=elec&val="+val+"&cab="+cab+"&tt="+zzz;

     document.getElementById('elh').true=false;
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {

if (xhr.responseText !=="error" && xhr.responseText !=="" ) {
    btn.disabled=false;
  btn.innerHTML='Verified';
document.getElementById('elh').disabled=false;

document.getElementById('f11').innerHTML=xhr.responseText;
}

else{
    btn.disabled=false;
  btn.innerHTML='Verify';
  document.getElementById('f11').innerHTML="Meter Number Validation failed";
}
     }
    
  xhr.send(data);
}






function group(argument) {
 var data="action=group";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
document.getElementById('wag').href=xhr.responseText;
document.getElementById('wag').target="_blank";

     }
    
  xhr.send(data);
}
group();

function ve(argument) {


 var data="action=ve";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
if (xhr.responseText.length > 3) {

document.getElementById('vam3').click();
  console.log(xhr.responseText.length);
document.getElementById('verbtn').disabled=false;
document.getElementById('realc').value=xhr.responseText;
}
else{



 va();
}

     }
    
  xhr.send(data);
}




function dre(dre) {



 var data="action=dre&amt="+dre;

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
if (xhr.responseText=="true") {
Swal.fire({title:"Good job!",text:"Your Deposit Request Has Been Recorded!",icon:"success",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
 

}

else{
 Swal.fire({title:"Error",text:xhr.responseText,icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
       
    
}


     }

     if (dre > 1000) {
      xhr.send(data);
     }
    else{
      Swal.fire({title:"Error",text:"Minimum deposit is N 1,000",icon:"error",showCancelButton:!0,confirmButtonColor:"#5664d2",cancelButtonColor:"#ff3d60"});
  
    }
  
}


function not(argument) {
 var data="action=not";

     
     
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '../custom/php/master.php', true);
     xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
     xhr.onload = function () {
if (xhr.responseText !=="") {
  document.getElementById('not').click();
  document.getElementById('notm').innerHTML=xhr.responseText;
}

     }
    
  xhr.send(data);
}