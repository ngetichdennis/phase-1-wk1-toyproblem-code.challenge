function speedDetector(speed){
    //declaring the variables within the function
const speedLimitInKph=70;
const oneDemeritPointSpeedInKph=5;
const demeritPoints=Math.floor((speed - speedLimitInKph)/oneDemeritPointSpeedInKph);
const result=`Total Demerit points:${demeritPoints}`;
//start of the control flow (if .........else ......if... )
    if (speed <=speedLimitInKph){
        return "OK";
    } else {
        if (demeritPoints>=12){
            return "licence suspended"
        }
        //invocking of all the variables to give the results
        return result;
    }
}
//calling the speed detector results with a value to output results to the console
console.log (speedDetector(100));