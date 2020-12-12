
function myFunction() 
{
  var x = document.getElementById("disp").value;
  document.getElementById("demo").innerHTML ="Hello!"+' '+x;
  document.getElementById("demo1").innerHTML="Do you want to play";
  document.getElementById('second').style.display='block';
  }

function show()
{
	document.getElementById('third').style.display='block';
	document.getElementById('second').style.display='none';
	document.getElementById('first').style.display='none';
	document.getElementById("demo1").style.display='none';
}

function show1()
{	
	document.getElementById('disp').value='';
	document.getElementById('first').style.display='block';
	document.getElementById('third').style.display='none';
	document.getElementById('second').style.display='none';
	document.getElementById('fourth').style.display='none';
}

function exit()
{	
	document.getElementById('disp').value='';
	document.getElementById('first').style.display='block';
	document.getElementById('third').style.display='none';
	document.getElementById('fourth').style.display='none';	
}

function changeFunc() 
{
 	var a = document.getElementById("selectBox");
 	var selectedValue = a.options[a.selectedIndex].value;
 	document.getElementById('fourth').style.display='block';
 	document.getElementById("demo").style.display='none';
 	document.getElementById('b1').style.display='none';
	document.getElementById("b2").style.display='none';
	document.getElementById('second').style.display='none';

 

	a = Math.floor(Math.random() * 8);

	if (a==1)
	{
		console.log('It is certain');
		document.getElementById('print1').innerHTML='It is certain';
	}
	else if(a==2)
	{
		console.log('It is decidedly so');
		document.getElementById('print1').innerHTML='It is decidedly so';
	}
	else if(a==3)
	{
		console.log('Reply hazy try again');
		document.getElementById('print1').innerHTML='Reply hazy try again';
	}
	else if(a==4)
	{
		console.log('Cannot predict now');
		document.getElementById('print1').innerHTML='Cannot predict now';
	}
	else if(a==5)
	{
		console.log('Do not count on it');
		document.getElementById('print1').innerHTML='Do not count on it';
	}
	else if(a==6)
	{
		console.log('My sources say no');
		document.getElementById('print1').innerHTML='My sources say no';
	}
	else if(a==7)
	{
		console.log('Outlook not so good');
		document.getElementById('print1').innerHTML='Outlook not so good';
	}
	else if(a==8)
	{
		console.log('Signs point to yes');
		document.getElementById('print1').innerHTML='Signs point to yes';
	}
	else {
		console.log('something something');
		document.getElementById('print1').innerHTML='something something';
	}
}

