// const axios = require('axios');
function getPray(city,time) {
  // console.log("city ",city);
  axios.get('http://api.aladhan.com/v1/timingsByAddress/'+time+'?address='+city)
    .then(function (response) {
      // handle success
      var prayObj = response.data.data.timings;
      console.log(response.data.data.timings);
      // for (var pray in prayObj) {
        // console.log(pray, prayObj[pray]);
        prayTimes[0].textContent="Fajr"
        prayTimes[1].textContent="Dhuhr"
        prayTimes[2].textContent="Asr"
        prayTimes[3].textContent="Maghrib"
        prayTimes[4].textContent = "Isha"
        times[0].textContent=prayObj['Fajr']
        times[1].textContent=prayObj['Dhuhr']
        times[2].textContent=prayObj['Asr']
        times[3].textContent=prayObj['Maghrib']
        times[4].textContent=prayObj['Isha']
      // }
    })

}
// var date = new Date()
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
var prayTimes = document.querySelectorAll(".prayTime")
var times=document.querySelectorAll(".time")
document.querySelector('form').addEventListener("submit", function (e) {
  e.preventDefault()
  getPray(e.target[0].value,e.target[1].value)
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);

})







































//  fetch('http://api.aladhan.com/v1/hijriCalendar/1437/4?latitude=51.508515&longitude=-0.1254872&method=2')
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           console.log("hello");
//           // reject("error to call users")
//         }
//       })
//    .then(users => {
//         console.log(users.data);
//           for (user of users.data) {
//             var div = document.createElement("div")
//             div.textContent = user.name;
//             console.log(user.timings);
//             // div.classList.add("user");
//             // div.setAttribute("onclick",`clickable(${user.id},this)`)
//             // contentUser.appendChild(div)
//           }
//           // resolve()
//         })