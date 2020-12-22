console.log('Client side js file is loaded');

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msg1')
const messageSec = document.querySelector('#msg2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value
    messageOne.textContent = "Loading..."

    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
        } else {
            messageOne.textContent = data.location;
            messageSec.textContent = data.forecast;
        }  
    })
})
    
})