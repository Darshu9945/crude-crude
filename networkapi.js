const btn = document.getElementById('my-form')
var nameinput=document.getElementById('kb3')
var emailinput=document.getElementById('kb2')
var msg =document.getElementById('kb5')
var userlist=document.getElementById('mylist')

btn.addEventListener('submit',adduser);



 function adduser(e){

    e.preventDefault();
        name=nameinput.value
        email=emailinput.value
        const obj={
            name,
            email
        }
        axios.post("https://crudcrud.com/api/7cda50fa700440ee9515a261ad723318/appoitmentdata",obj).then((responce)=>{
        }
        ).catch((err)=>{
            console.log(err)
        })
        
 }

    axios.get("https://crudcrud.com/api/7cda50fa700440ee9515a261ad723318/appoitmentdata")
    .then((response)=>{
        for (let i=0; i<response.data.length; i++){
            shownewuseronscreen(response.data[i])
        }
    })
function shownewuseronscreen(user){
    const li=document.createElement('li')
    li.textContent=user.name+'-'+ user.email
    console.log(li)
    userlist.appendChild(li)
  }