//1.
//1.1

//1.2

//2
// const task = {
//   subject: "Implement authentication feature",
//   createdBy: "Anthony Stark Junior",
//   assignTo: "Happy",
//   dueDate: "2022-10-08T20:00:25+0000",
//   expectedHours: 8,
// };

// var { subject, assignTo, dueDate } = task;

// console.log(subject);
// console.log(assignTo);
// console.log(dueDate);

//4
// let dict = {
//   agile:
//     "Agile is an iterative approach to project management and software development",
//   scrum:
//     "Scrum is a lightweight framework that helps people, teams and organizations generate value through adaptive solutions for complex problems.",
//   aws: "AWS stands for Amazon Web Services, a cloud solution for web development",
//   pm: "The short version of Project Manager, the person in charge of the final result of a project",
//   "ui/ux":
//     "UI means User Interface, UX means User Experience, and they refer to the process of defining how a product looks and feels",
// };
// let word = prompt(" Please input word that u want to search")
//  if (dict[word]===undefined){
//     let meaning = prompt(`input the definition ${word}`)
//     dict[word] = meaning
//     alert("done")
//  }else{
//     alert(dict[word])
//  }
//  console.log(dict)

//5
// let cars = [
//   {
//     Name: "Tesla model 3",
//     Brand: "Tesla",
//     Price: "142800",
//     Color: "White",
//     Category: "SUV",
//     Providers: "ZeroAuto",
//   },
//   {
//     Name: "Audi A8 ",
//     Brand: "Audi",
//     Price: "184870",
//     Color: "Black",
//     Category: "SUV",
//     Providers: "VhStore, HAauto",
//   },
//   {
//     Name: "Vinfast Lux 2.0",
//     Brand: "Vin",
//     Price: "21490",
//     Color: "Gray",
//     Category: "SUV",
//     Providers: "HAauto",
//   },
//   {
//     Name: "Honda CRV",
//     Brand: "Honda",
//     Price: "84900",
//     Color: "Blue",
//     Category: "Hatchback",
//     Providers: "HAauto",
//   },
// ];
//5.1
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i].Name);
//   console.log(cars[i].Price);
// }
//5.2
// let test = +prompt("Nhập vào vị trí của xe");
// let result = cars[test - 1];
// console.log(result);
//5.3
// let input = prompt("Nhập vào Category của xe:");
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].Category === input) {
//     console.log(cars[i]);
//   }
// }
//5.5
// let input = prompt("Nhập vào Providers của xe:");
// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].Providers.includes(input)) {
//     console.log(cars[i]);
//   }else{
//     console.log("Không có Providers này")
//   }
// }

//6
//6.1
let tasks = [
  {
    Name: "HTML",
    Complete: "false",
  },
  {
    Name: "CSS",
    Complete: "false",
  },
  {
    Name: "Basics of JavaScript",
    Complete: "false",
  },
  {
    Name: "Node Package Manager",
    Complete: "false",
  },
  {
    Name: "Git",
    Complete: "false",
  },
];
let command = prompt("Enter your command(New,Delete,Update,Complete)");
//6.2
switch (command) {
  case "New":
    let newTask = prompt("Enter new task");
    tasks.push({ Name: newTask, Complete: false });
    console.log(tasks);
  //6.3
  case "Update":
    for (let i = 0; i < tasks.length; i++) {
      console.log(i, tasks[i].Name);
      console.log("completed:", tasks[i].Complete);
    }
    let updateName = prompt("Enter position");
    let newTaskName = prompt("Enter new title");
    tasks[updateName].Name = newTaskName;
    console.log(tasks);
  case "Complete":
    for (let i = 0; i < tasks.length; i++) {
      console.log(i, tasks[i].Name);
      console.log("completed:", tasks[i].Complete);
    }
    let updateComplete = prompt("Enter position:");
    tasks[updateComplete].Complete = "true";
    console.log(tasks);
  case "Delete":
    for (let i = 0; i < tasks.length; i++) {
      console.log(i, tasks[i].Name);
      console.log("completed:", tasks[i].Complete);
    }
    let Delete = prompt("Enter position:");
    tasks[Delete].Delete = ""
    console.log(tasks);
}
