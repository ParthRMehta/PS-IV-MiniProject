let list = document.getElementById('list');
let random = document.getElementById('random');
let btn = document.getElementById('btn');


btn.addEventListener('click', getDeatils);
list.innerHTML = `<div class="main">Click "Get info" to fetch data</div>`;



async function getDeatils() {
    let str = ""
    let url = `https://randomuser.me/api/`;
    let Obj = await fetch(url);
    let data = await Obj.json();
    let results = data.results;

    for (const key in results) {
    str = `<li class="items 2">
                Name : ${results[key].name.title} ${results[key].name.first}  ${results[key].name.last} <br/>
                Gender : ${results[key].gender}  <br>
                Id : ${results[key].id.name} ${results[key].id.value}
            </li>
            <li class="items imgs-item">
                <img src=${results[key].picture.large} alt="" id="imgs">
            </li>
            <li class="items 3">
            Address : ${results[key].location.street.number} , ${results[key].location.street.name} , 
            ${results[key].location.city} , ${results[key].location.state} , ${results[key].location.country} , ${results[key].location.postcode} <br>
            Co-ordinates : ${results[key].location.coordinates.latitude}" ${results[key].location.coordinates.longitude} <br>
            Time-zone : ${results[key].location.timezone.offset} ${results[key].location.timezone.description} <br>
            </li>
            <li class="items 4">
                Email : ${results[key].email}
            </li>
            <li class="items 5">
            Phone : ${results[key].phone} <br>
            Cell : ${results[key].cell}
            </li>
            <li class="items 6">
            DOB : ${results[key].dob.date} <br>
            Age : ${results[key].dob.age} <br>
            </li>
            <li class="items 7">
            Conutry : ${results[key].nat}
            </li>
            <li class="items 8">
            Login Details : ${results[key].login.uuid} <br>
            userName : ${results[key].login.username} <br>
            Password : ${results[key].login.password} <br>
            </li>
            <li class="items 9">
            ${results[key].registered.date} <br>
            ${results[key].registered.age} <br>
            </li>`;
    }
    list.innerHTML = str;
}

// ${results[key].login.salt} <br>
//             ${results[key].login.md5} <br>
//             ${results[key].login.sha1} <br>
//             ${results[key].login.sha256} <br></br>
//             in class 8
