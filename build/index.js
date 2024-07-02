const form = document.getElementById("myForm");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    console.log(subject.value);
    console.log(message.value);
    window.localStorage.setItem(subject.value, message.value);
    subject.value = "";
    message.value = "";
})
