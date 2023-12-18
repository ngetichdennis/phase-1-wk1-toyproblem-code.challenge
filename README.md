# Introduction
The main of this code challenge is to familiarise with the different control flows in Javascript example being if...,if...else...,if.....else..if...., and if....else if......

# Code Challenge one:
# Grade Determiner

The main aim of the program  is to determine the grade of a student based on their score. It follows a specific grading scale where each range represents a letter grade.Using the grade below
A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
A function using a control flow if....else if.... is used to determine the grades.

## How to Use

To use this program, you can simply call the `grading` function with the student's score as an argument.

Here's an example of how to call the function:
console.log(grading(59));


# Code Challenge two:
# Speed Detector Calculator
The program determines the number of demerit points for a driver based on their speed in relation to the speed limit.Whereby the driver's license will be suspended incase a threshold demerit pints are exceeded. 
# How to Use
This program is used by  simply calling the speedDetector function the speed being  an argument.

the code has an example of how to call the function:

console.log(speedDetector(100));
From example the driver's speed is 100. The program calculates the number of demerit points and determine if the driver's license should be suspended.

# The logic behind the Calculation
The speedDetector function takes a speed value as input and performs the following steps:

-It defines the speed limit (70 km/h) and the speed at which one demerit point is earned (5 km/h).

-It calculates the number of demerit points by subtracting the speed limit from the driver's speed, dividing the result by the demerit speed, and rounding down to the nearest whole number using Math.floor.

-It checks if the driver's speed is within the speed limit. If the drivers speed is within the speed limit, the function returns will "OK".

-For a case when the driver's speed is way above the speed limit, the function checks if the calculated demerit points are greater than or equal to 12. If the results are above the required, the function returns "licence suspended" and for the speed which returns demerit points lesser than 12,the function will return the calculated demerit points.

NB.The steps above,gives the results and also gives the driver's status incase he or she exceed the demerit points.
# Code Challenge three:
# Net Salary Calculator 
The main of the program is to calculate the net salary of an employee given the deductions to his or her gross salary.
# How the code works
-It starts by initializing the variables, in this case (payee_Percent, nhif_rate, gross_Salary, and the basic and benefit amounts.) 

-Followed by calculating the gross salary.

-It then checks the gross salary range and sets the payee percentage accordingly.

-Thereafter it checks the gross salary range and sets the NHIF rate.

-It calculates the payee deduction by multiplying the gross salary with the payee percentage.

-It calculates the NHIF deduction by subtracting the NHIF rate from the gross salary.

-It calculates the NSSF deduction by applying a 6% rate to the gross salary.

-It finanlly alculates the net salary by subtracting the NHIF deduction, the payee deduction, and the NSSF deduction from the gross salary.
# output of the result

NB.The netSalaryCalculator function returns the calculated net salary, which is then logged to the console.This is achieved by passing (basic salary,benefits) eg (50000,6000).The net salary is then calculated and logged to the console.



# author
the repository does not have a license because I saved it as public.It has free access.

