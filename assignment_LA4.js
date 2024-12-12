//creating a simple queueing program
let customQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

function queSystem() {
  while (true) {
    //display the current queue
    console.log("Current Queue: " + (customQueue.length > 0 ? customQueue.join(", ") : "Empty"));

    //displaying the choices
    let choice = prompt("Choose an option:\n(A) Add Customer\n(B) Serve Customer\n(C) Exit");

    if (!choice) {
      alert("Invalid input. Please try again.");
      continue;
    }

    switch (choice.toUpperCase()) {
      case "A":
        //for a new customer
        let customerName = prompt("Enter your name:");
        if (customerName) {
          customQueue.push(customerName);
          alert(`${customerName}, you are number ${customQueue.length} in the queue.`);
        } else {
          alert("Name cannot be empty.");
        }
        break;

      case "B":
        //for serving a customer
        if (customQueue.length > 0) {
          let serviceNumber = parseInt(prompt("Enter the number of the customer to be served:"));
          if (serviceNumber > 0 && serviceNumber <= customQueue.length) {
            let servedCustomer = customQueue[serviceNumber - 1];
            alert(`Serving customer: ${servedCustomer}`);
            customQueue.splice(serviceNumber - 1, 1); //removing the served customer
          } else {
            alert("Invalid number. Please try again.");
          }
        } else {
          alert("All customers have been served.");
        }
        break;

      case "C":
        //exiting the program
        alert("Exiting the program. Thank you!");
        console.log("Final Queue: " + (customQueue.length > 0 ? customQueue.join(", ") : "Empty"));
        return;

      default:
        alert("Invalid choice. Please enter A, B, or C.");
    }
  }
}

//calling 
queSystem();