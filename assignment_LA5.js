// References:
//Introduction to Hash Tables: https://en.wikipedia.org/wiki/Hash_table
// Array Methods in JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//basic Queueing System with Hash Function
//object to store customer information
const customerHashTable = {};

//array to track the order of service
const queue = [];

//hash function to generate a unique identifier for each customer
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i) * (i + 1);
    }
    return hash;
}

//function to add a customer to the queue
function addCustomer(name) {
    const hashKey = hashFunction(name); //creating hash key
    if (!customerHashTable[hashKey]) { //verifying if the key is unique
        customerHashTable[hashKey] = name;
        queue.push(hashKey); //appending hash key to the queue
        alert(`${name} has been successfully added to the queue.`);
        console.log(`Current Customer Hash Table:`, customerHashTable);
    } else {
        alert(`Customer ${name} is already registered in the queue.`);
    }
}

//function to serve a customer based on their position in the queue
function serveCustomer(number) {
    if (number < 1 || number > queue.length) {
        alert(`Invalid selection. Please choose a number between 1 and ${queue.length}.`);
        return;
    }

    const hashKey = queue[number - 1]; //getting the hash key using the index
    const customerName = customerHashTable[hashKey]; //finding the customer by hash key

    if (customerName) {
        alert(`Currently serving: ${customerName}`);
        console.log(`Now serving: ${customerName}`);
        delete customerHashTable[hashKey]; //removing customer from the hash table
        queue.splice(number - 1, 1); //removing the hash key from the queue
        console.log(`Updated Customer Hash Table:`, customerHashTable);
    } else {
        alert(`No customer found for the selected number ${number}.`);
    }
}

//function for displaying all customers currently in the queue
function displayAllCustomers() {
    if (queue.length === 0) {
        alert("All customers have been served.");
        console.log("Queue is empty.");
        return;
    }

    const customersInQueue = queue.map(hashKey => customerHashTable[hashKey]);
    alert(`Customers currently in the queue: ${customersInQueue.join(", ")}`);
    console.log(`Queue of Customers:`, customersInQueue);
}

// main prog
(function main() {
    alert("Welcome to the Queueing System for Customer Service!");

    //given list of customers
    const customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
    customers.forEach((customer) => addCustomer(customer)); //adding it one by one

    let isRunning = true;
    while (isRunning) {
        const action = prompt("Select an option: \n1. Add a Customer \n2. Serve a Customer \n3. Show All Customers \n4. Exit");

        switch (action) {
            case "1":
                const name = prompt("Enter the customer's name:");
                if (name) addCustomer(name);
                break;

            case "2":
                const number = parseInt(prompt(`Enter the position number of the customer to serve (1-${queue.length}):`), 10);
                if (!isNaN(number)) serveCustomer(number);
                break;

            case "3":
                displayAllCustomers();
                break;

            case "4":
                isRunning = false;
                alert("Exiting the program. Thank you and have a nice day!");
                break;

            default:
                alert("Invalid input. Please select a valid option.");
        }
    }
})();
