function canVote(age) {
    if(age>=18){
        console.log("You are eligible to vote ");
    }
    else{
        age=18-age;
        console.log("You are not eligible to vote\n Wait for "+age+" years");

    }

}


canVote(25);
canVote(18); 
canVote(10); 
