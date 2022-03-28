function myvalue()
{
   var a = parseInt(document.getElementById('num1').value);
   var b = parseInt(document.getElementById('num2').value);
   document.getElementById('result').innerHTML=a+b;
   console.log("result");
}
myvalue();

function myvalue1()
{
   var a = parseInt(document.getElementById('num1').value);
   var b = parseInt(document.getElementById('num2').value);
   document.getElementById('result').innerHTML=a-b;
   console.log("result")
}

myvalue1();

function myvalue2()
{
   var a = parseInt(document.getElementById('num1').value);
   var b = parseInt(document.getElementById('num2').value);
   document.getElementById('result').innerHTML=a*b;
   console.log("result")
}
myvalue2();

function myvalue3()
{
   var a = parseInt(document.getElementById('num1').value);
   var b = parseInt(document.getElementById('num2').value);
   document.getElementById('result').innerHTML=a/b;
   console.log("result")
}

myvalue3();