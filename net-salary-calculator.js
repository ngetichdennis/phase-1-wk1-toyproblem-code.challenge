function netSalaryCalculator(basic_Salary,benefits){
    //declaring the variables using var since it will be accessed outside the conditions also
    var payee_Percent ;
    var gross_Salary=(basic_Salary + benefits);
    //introduction of the control flow to determine the payee percent to be paid
    if (gross_Salary <24000){
        return payee_Percent=0.1
    } else if (gross_Salary >24000 && gross_Salary <+32333){
        return payee_Percent=0.25
    } else if (gross_Salary >32333 && gross_Salary <=500000){
        return payee_Percent=0.3
    } else if (gross_Salary >500000 && gross_Salary <=800000){
        return payee_Percent=0.32
    } else if (gross_Salary >800000 ){
        return payee_Percent=0.35
    } 
    var payee=(payee_Percent * gross_Salary);
    //introduction of control flow to determine the nhif to be paid for each salary scale
    var nhif_rate
        if (gross_Salary <=5999){
            return nhif_rate=150
        } else if (gross_Salary>5999 && gross_Salary<=7999){
            return nhif_rate=300
        } else if ( gross_Salary>7999 && gross_Salary<=11999){
            return nhif_rate=400
        } else if (gross_Salary>11999 && gross_Salary<=14999){
            return nhif_rate=500
        } else if (gross_Salary>14999 && gross_Salary<=19999){
            return nhif_rate=600
        } else if(gross_Salary>19999 && gross_Salary<=24999){
            return nhif_rate=750
        } else if (gross_Salary>24999 && gross_Salary<=29999){
            return nhif_rate=850
        } else if(gross_Salary>29999 && gross_Salary<=34999){
            return nhif_rate=900
        } else if(gross_Salary>34999 && gross_Salary<=39999){
            return nhif_rate=950
        } else if (gross_Salary>39999 && gross_Salary<=49999){
            return nhif_rate=1000
        } else if (gross_Salary>49999 && gross_Salary<=59999){
            return nhif_rate=1100
        } else if (gross_Salary>59999 && gross_Salary<=69999){
            return nhif_rate=1200
        } else if (gross_Salary>69999 && gross_Salary<=79999){
            return nhif_rate=1300
        } else if (gross_Salary>79999 && gross_Salary<=89999){
            return nhif_rate=1400
        } else if (gross_Salary>89999 && gross_Salary<=99999){
            return nhif_rate=1500
        } else if (gross_Salary>99999){
            return nhif_rate=1600
        }
        // calculation formulae for the different variables
        var nhif_deduction=(gross_Salary-nhif_rate);
        var nssf_deduction=(0.06 * gross_Salary);
        var net_salary=(gross_Salary-nhif_deduction-payee-nssf_deduction);
        // calling of all the declaration within and outside the condition to give net salary
        return net_salary;
    }
    //calling the netsalarycalculator function with the value so as to give the net salary 
console.log(netSalaryCalculator(50000,6000))