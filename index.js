function mailSend(){
  let form = {
    name : document.getElementById('name').value,
    number : document.getElementById('number').value,
    email : document.getElementById('email').value,
    message : document.getElementById('message').value,
  };


const s_id = "service_il1v1qs";
const key_id = "template_c2vq228";

emailjs.send(s_id, key_id, form)
.then(
  res=>{
    name : document.getElementById('name').value = "";
    number : document.getElementById('number').value = "";
    email : document.getElementById('email').value = "";
    message : document.getElementById('message').value = ""; 
    alert("Sent Successfully.");
  })
.catch((err)=>console.log(err));

}








//servicID = service_il1v1qs
//bdxoXThaLsnoivsyl