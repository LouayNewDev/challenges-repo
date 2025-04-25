function sendmail () {
    let param = {
        name: document.getElementById("Name").value,
        Email: document.getElementById("Email").value,
        message: document.getElementById("Message").value,
        subject: document.getElementById("Subject").value,
    }
    emailjs.send("service_6ea5y2o", "template_q2xcmpo", param).then(function (res) {
        Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully!",
            icon: "success",
            timer:3000,
            showConfirmButton: false
        })
        document.getElementById("Name").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Message").value = "";
        document.getElementById("Subject").value = "";

    }
    )
}


const root = document.documentElement;
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;


///* :root {
//   /* Light Mode */
//   --light-bg-color: #b6d6d6;
//   --light-bg-color2: #aec7c7; /*not used*/
//   --light-primary-color: rgb(72, 166, 168);
//   --light-text-color: black;

//   /* Dark Mode */
//   --dark-bg-color: #000016;
//   --dark-bg-color2: #101010; /* not used*/
//   --dark-text-color: rgb(242, 239, 231);
//   --dark-primary-color: #004a50; /*not used*/
//} */




// // #1
// function CreateNArray(repeat) {
//     let list = []
//     for (let i = 0; i < repeat; i++) {
//         let number = Number(prompt("Enter a number"))
//         list.push(number)       
//     }
//     return list
// }
// list = CreateNArray(5)
//     console.log(list)
//     let workinglist = [...list]
//     let sortedlist = []
//     for (let j = 0; j < list.length; j++) {
//         let min = Math.min(...workinglist)
//         sortedlist.push(min)
//         workinglist.splice(workinglist.indexOf(min), 1)
//     }
//     console.log(sortedlist)



// // #2
// let list2 = CreateNArray(5)
// let max = Math.max(...list2)
// console.log(max)

// // #3
// let askNumber = Number(prompt("Enter a number"))
// function isEven(num) {
//     if (num % 2 == 0) {
//         return true
//     } else {
//         return false
//     }
// }



// // #4 EZ
// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }




// // #5
// let N = Number(prompt("Enter a number"))
// let sum = 0
// for (let i = 1; i <= N; i++) {
//     sum += i
// }
// console.log(sum)




// // #6
// let evenNumbers = []
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         evenNumbers.push(i)
//     }
// }
// console.log(evenNumbers)



// // #7
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let guess;

// while (true) {
//     guess = Number(prompt("Guess the number (between 1 and 100):"));
//     if (guess === randomNumber) {
//         console.log("Congratulations! You guessed the correct number.");
//         break;
//     } else if (guess < randomNumber) {
//         console.log("Bigger!");
//     } else {
//         console.log("Smaller!");
//     }
// }