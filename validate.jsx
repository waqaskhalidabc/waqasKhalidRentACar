
$(function() {
 
   $("[id=check1]").click(handleCheck1);
   $("[id=check2]").click(handleCheck2);
   $( "[id=input1]" ).change(function() {
      if(this.value<0 || this.value>100){
         alert("input between 1 - 100");
         this.value='';
      }
    });
    


    


    $( "[id=input2]" ).change(function() {
      if(this.value<0){
         alert("Enter positive amount");
         this.value='';
      }
    });
      
  });

function handleCheck1(){
$("[id=input2]").prop('disabled', true);
$("[id=input1]").prop('disabled', false);
$( "[id=check2]" ).prop( "checked", false );
}
function handleCheck2(){

   $("[id=input2]").prop('disabled', false);
   $("[id=input1]").prop('disabled', true);
   $( "[id=check1]" ).prop( "checked", false );
   
   }

function checkMe(){

alert("clicked");


}
