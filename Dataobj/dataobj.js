var data1 = [

	{
		"name" :  "Ashwini",
		"phone":  9985911606,
		"Address": "Bowenpally",
		"RelId": 9
	},
	{
		"name" :  "Madhulika",
		"phone":  9299153738,
		"sal": 090909,
		"Address": "Bowenpally",
		"RelId": 8
	},
	{
		"name" :  "Balreddy",
		"phone":  9440570994,
		"Address": "Bowenpally",
		"RelId": 7
	}
]


var myData = {
		"name" :  "",
		"phone":  '',
		"Address": "",
		"RelId": ''
	}

var AddRec = function(){
	
					var userName = document.getElementById('userName').value;
					var phone = document.getElementById('phone').value;
					var Address = document.getElementById('Address').value;
					var RolId = document.getElementById('rolId').value;
					var a=0, i=0;
					if(userName && phone && Address && RolId){
		
		document.getElementById('userName').style.backgroundColor= "white";
		document.getElementById('phone').style.backgroundColor= "white";
		document.getElementById('Address').style.backgroundColor= "white";
		document.getElementById('rolId').style.backgroundColor= "white";
		if(phone.length==10 && !isNaN(phone)){
			document.getElementById('phone').style.backgroundColor= "white";
			
	for (i=0; i < data1.length; i++)
	{
		if(data1[i].RelId==RolId)
		{
			a=a+1;
		}
	}
		if(a==0){
			myData.name = userName;
			myData.phone = phone;
			myData.Address = Address;
			myData.RelId = RolId;
			data1.push(myData);
			datapop();
		}
		else{
			alert("rolid should be unique");
			document.getElementById('rolId').style.backgroundColor= "red";
		}
			

	// alert(userName +" /// "+ phone +" /// "+ Address +" /// "+RolId);
		}
	
		else{
			alert("enter valid phone number");
			document.getElementById('phone').style.backgroundColor= "red";
		}
}
    else{
        alert("All fields requried");
		if(!userName)
		{
			document.getElementById('userName').style.backgroundColor= "red";
		}
		if(!phone)
		{
			document.getElementById('phone').style.backgroundColor= "red";
		}
		if(!Address)
		{
			document.getElementById('Address').style.backgroundColor= "red";
		}
		if(!RolId)
		{
			document.getElementById('rolId').style.backgroundColor= "red";
		}
    }
}
function datapop(){
var TableData="<tr><th>Name</th><th>Phone</th><th>Address</th><th>Rel ID</th></tr>"; 
var rowData = "";
for(var i=0; i < data1.length; i++ ){
	
	
	rowData = rowData +	"<tr>"
			+"<td>"+data1[i].name+"</td>"
			+"<td>"+data1[i].phone+"</td>"
			+"<td>"+data1[i].Address+"</td>"
			+"<td>"+data1[i].RelId+"</td>"
		+"</tr>";
	
}

document.getElementById('tables').innerHTML = TableData + rowData;
};
datapop();