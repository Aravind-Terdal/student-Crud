const cl = console.log;


const StdContainer = document.getElementById('StdContainer');
const stdForm = document.getElementById('stdForm');
const fnameControl = document.getElementById('fname');
const lnameControl = document.getElementById('lname');
const emailControl = document.getElementById('email');
const contactControl = document.getElementById('contact');


let StdsArr = [
    {
        fname : "John",
        lname : "Doe",
        email : "john_doe@gmail.com",
        contact : 9999999990,
        stdId : "1234"
    },
    {
        fname : "May",
        lname : "Doe",
        email : "may_doe@gmail.com",
        contact : 9999999990,
        stdId : "1235"
    },
];

const generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
});
};


const createStdTrs = (arr) => {
    let result = '';

    arr.forEach((std, i) => {
        result += `
                        <tr>
                            <td>${i + 1}</td>
                            <td>${std.fname}</td>
                            <td>${std.lname}</td>
                            <td>${std.email}</td>
                            <td>${std.contact}</td>
                            <td><button class="btn btn-sm btn-block btn-outline-info">Edit</button></td>
                            <td><button class="btn btn-sm btn-block btn-outline-danger">Remove</button></td>
                        </tr>
                    `
    })
    StdContainer.innerHTML = result;
};

createStdTrs(localData());

function localData(){
    if(localStorage.getItem('stdsArr')){
        return JSON.parse(localStorage.getItem('stdsArr'))
    }
    else{
        return StdsArr
    }
};

const onStdAdd = eve => {
     eve.preventDefault()

     let newStd = {
        fname : fnameControl.value,
        lname : lnameControl.value,
        email : emailControl.value,
        contact : contactControl.value,
        stdId : generateUuid()
     }
     let localStdData = localData();

     localStdData.push(newStd);
     localStorage.setItem('stdsArr', JSON.stringify(localStdData));
  
     let tr = document.createElement('tr');

     tr.innerHTML = `
                    <tr>
                            <td>${StdsArr.length}</td>
                            <td>${newStd.fname}</td>
                            <td>${newStd.lname}</td>
                            <td>${newStd.email}</td>
                            <td>${newStd.contact}</td>
                            <td><button class="btn btn-sm btn-block btn-outline-info">Edit</button></td>
                            <td><button class="btn btn-sm btn-block btn-outline-danger">Remove</button></td>
                        </tr>
                    `
    StdContainer.append(tr);

    stdForm.reset();
}

stdForm.addEventListener('submit', onStdAdd);










