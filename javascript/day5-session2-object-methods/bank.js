/* create an object to specify data of a customer in a bank. the data to be stored is: Account number,Name,Balance.
create a method called as transaction which takes two args amount and code (1 for deposit, 0 for withdrawl).
create a method to display the current balance for the customer.
if the withdrawl amount is more than the balance then display "The balance is insufficient for the specified withdrawl" .
*/
const customer = {
    Account_Number: 1234567,
    Name: 'pratik saha',
    Balance: 5000,
    transaction: function (amount, code) {
        if (code) { //1 for deposit, 0 for withdrawl
            this.Balance += amount
        } else {
            if (amount > this.Balance) {
                console.log('The balance is insufficient for the specified withdrawl')
            }
            else {
                this.Balance -= amount
            }
        }
    },
    display: function () {
        return this.Balance
    }
}

customer.transaction(2000, 1)
customer.transaction(9000, 0)
console.log(customer.display())