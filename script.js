$('#datepicker').datepicker();

function getData() {


    document.getElementById('card-container').innerHTML = '';
    axios.get('https://studentmanagmentbba.000webhostapp.com/getData.php')
        .then(function(res) {
            let x = 0;
            res.data.forEach(element => {
                setTimeout(() => {
                    createStudent(element);
                }, x);
                x += 500;
                console.log(element);

            });
        })
        .catch(function(error) {
            /* error */
            console.log(error);
        });
}

function AddStudent() {
    let data = $('#add').serializeArray();
    console.log(data);

    const fd = new FormData();
    fd.append('number', data[0].value);
    fd.append('first_name', data[1].value);
    fd.append('last_name', data[2].value);
    fd.append('address', data[3].value);
    fd.append('date', data[4].value);
    fd.append('gender', data[5].value);
    fd.append('level', data[6].value);

    console.log(fd);

    axios.post('https://studentmanagmentbba.000webhostapp.com/add.php', fd)
        .then(function(res) {
            /* success */
            console.log(res);
            getData();
        })
        .catch(function(error) {
            /* error */
            console.log(error);

        });

}

function deleteStudent(id, card) {

    axios.get('https://studentmanagmentbba.000webhostapp.com/delete.php?id=' + id)
        .then(function(res) {
            document.getElementById('card-container').removeChild(card);
        })
        .catch(function(error) {
            /* error */
            console.log(error);
        });
}

function UpdateStudent() {

    let data = $('#update').serializeArray();

    console.log(data);

    const fd = new FormData();
    fd.append('number', data[0].value);
    fd.append('first_name', data[1].value);
    fd.append('last_name', data[2].value);
    fd.append('address', data[3].value);
    fd.append('date', data[4].value);
    fd.append('gender', data[5].value);
    fd.append('level', data[6].value);
    fd.append('id', data[7].value);

    console.log(fd);

    axios.post('https://studentmanagmentbba.000webhostapp.com/update.php', fd)
        .then(function(res) {
            /* success */
            console.log(res);
            getData();
        })
        .catch(function(error) {
            /* error */
            console.log(error);

        });

}

function search() {
    let data = $('#search').serializeArray();
    console.log(data);

    const fd = new FormData();
    fd.append('first_name', data[0].value);
    fd.append('last_name', data[1].value);
    fd.append('date', data[2].value);

    axios.post('https://studentmanagmentbba.000webhostapp.com/getData.php', fd)
        .then(function(res) {
            /* success */
            console.log(res);
            document.getElementById('card-container').innerHTML = '';
            res.data.forEach(element => {
                createStudent(element);
                console.log(element);

            });
        })
        .catch(function(error) {
            /* error */
            console.log(error);

        });

}

function createStudent(info) {

    const card = document.createElement("DIV");
    card.className = 'card m-3 shadow d-flex align-items-center justify-content-between ' + ((info.gender === 'm') ? 'card3' : 'card1');
    card.onclick = () => {
        openStudent(info);
    }

    const content = document.createElement("DIV");
    content.className = "content d-flex flex-column justify-content-end align-items-center w-100 text-white mt-4";
    content.id = info.id;

    const name = document.createElement("SPAN");
    name.className = "h4 font-weight-bold";
    name.style.minWidth = "75%";
    name.innerText = info.first_name + ' ' + info.last_name;

    const number = document.createElement("SPAN");
    number.className = "small w-75";
    number.innerText = info.number;

    const icons = document.createElement("DIV");
    icons.className = "icons d-flex w-100 justify-content-end align-items-center";

    const icon = document.createElement("I");
    icon.className = "material-icons delete text-white mr-3";
    icon.innerText = 'delete';
    icon.onclick = (e) => {
        deleteStudent(info.id, card);
        e.stopPropagation();
    }

    card.appendChild(content);
    card.appendChild(icons);
    content.appendChild(name);
    content.appendChild(number);
    icons.appendChild(icon);
    document.getElementById('card-container').appendChild(card);
    card.style.animationDuration = '.4s';
    card.classList.add('animated');
    card.classList.add('fadeIn');
}

function openStudent(info) {

    $("#first_name").val(info.first_name);
    $("#last_name").val(info.last_name);
    $("#level").val(info.level);
    $("#date").val(info.birthday);
    $("#gender").val(info.gender);
    $("#address").val(info.adress);
    $("#number").val(info.number);
    $("#id").val(info.id);

    $('#updateStudent').modal('show');

}

/* Starting function */
getData();