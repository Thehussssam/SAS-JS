let number = +prompt("Enter the number :");
let result = "";

for (let i = 1; i <= number; i++) 
{
    if (number % i == 0) 
    {
        if (i == number) 
        {
            result += i;
        } 
        else 
        {
            result += i + ",";
        }
    }
}
alert("The divisors of " + number + " are: " + result);