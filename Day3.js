
// POST request demo using fetch API
// let data = fetch('http://5cdd0a92b22718001417c19d.mockapi.io/api/users',{
// 	method : "POST",
// 	body : {
// 		realm : "Kumar Utkarsh"
// 	}
// });

// data.then(resp => resp.json())
// .then(data => console.log(data))
// .catch(err => console.log(error));

// GET Request demo using fetch API

let data = fetch('http://5cdd0a92b22718001417c19d.mockapi.io/api/users');
data.then(res => res.json())
.then(data => {
	data.forEach(element => {
		let dataLi = document.createElement("li");
		dataLi.innerHTML = element.realm;
		document.body.appendChild(dataLi);
	});
})
.catch(err => console.log(err));



