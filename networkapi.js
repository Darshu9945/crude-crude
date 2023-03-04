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
        axios.post("https://crudcrud.com/api/34ba1a7f54314ee4b16f68e239f5f044/appoitmentdata",obj).then((responce)=>{
        }
        ).catch((err)=>{
            console.log(err)
        })
        
 }

    axios.get("https://crudcrud.com/api/34ba1a7f54314ee4b16f68e239f5f044/appoitmentdata")
    .then((response)=>{
        console.log(response.data[0].name)
        for (let i=0; i<response.data.length; i++){
            shownewuseronscreen(response.data[i])
        }
    })
function shownewuseronscreen(user){
    console.log("darshankb")
    const li=document.createElement('li')
    li.textContent=user.name+'-'+ user.email
    console.log(li)
    userlist.appendChild(li)
  }