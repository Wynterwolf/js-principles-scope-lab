// Write your solution in this file!
//global variable with var
var customerName = 'bob'

//change to uppercase with function
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

//change global inside the function
function setBestCustomer() {
    bestCustomer = 'not bob'
}

//change bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Karen'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Ted'
}
