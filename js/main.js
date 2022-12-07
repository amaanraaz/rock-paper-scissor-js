const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissor = document.getElementById('s');
const user_score = document.getElementById('userScoreVal');
const comp_score = document.getElementById('compScoreVal');
const winner = document.getElementById('result-final-stat');
const user_stat = document.getElementById('result-user-stat');
const computer_stat = document.getElementById('result-comp-stat');
const reset = document.getElementById('reset');


let rock_count = 0;
let paper_count = 0;
let scissor_count = 0;
let comp_count = 0;
let user_count = 0;

function computerMove(){
    let choices = ['Rock','Paper','Scissor'];
    return choices[Math.floor(Math.random()*3)]
}

rock.addEventListener('click',function(){
    let comp_choice = computerMove();
    user_stat.innerHTML='User: 🪨';
    if(comp_choice=='Rock'){
        computer_stat.innerHTML='Computer: 🪨';
        winner.innerHTML='Winner: Tie';
    }
    else if(comp_choice=='Paper'){
        computer_stat.innerHTML='Computer: 📃';
        comp_count++;
        comp_score.textContent=comp_count;
        winner.innerHTML='Winner: Comp';
    }
    else{
        computer_stat.innerHTML='Computer: ✂️';
        user_count++;
        user_score.textContent=user_count;
        winner.innerHTML='Winner: User';
    }
});

paper.addEventListener('click',function(){
    let comp_choice = computerMove();
    user_stat.innerHTML='User: 📃';
    if(comp_choice=='Paper'){
        computer_stat.innerHTML='Computer: 📃';
        winner.innerHTML='Winner: Tie';
    }
    else if(comp_choice=='Scissor'){
        computer_stat.innerHTML='Computer: ✂️';
        comp_count++;
        comp_score.textContent=comp_count;
        winner.innerHTML='Winner: Comp';

    }
    else{
        computer_stat.innerHTML='Computer: 🪨';
        user_count++;
        user_score.textContent=user_count;
        winner.innerHTML='Winner: User';
    }
});

scissor.addEventListener('click',function(){
    let comp_choice = computerMove();
    user_stat.innerHTML='User: ✂️';
    if(comp_choice=='Scissor'){
        computer_stat.innerHTML='Computer: ✂️';
        winner.innerHTML='Winner: Tie';

    }
    else if(comp_choice=='Rock'){
        computer_stat.innerHTML='Computer: 🪨';
        comp_count++;
        comp_score.textContent=comp_count;
        winner.innerHTML='Winner: Comp';

    }
    else{
        computer_stat.innerHTML='Computer: 📃';
        user_count++;
        user_score.textContent=user_count;
        winner.innerHTML='Winner: User';
    }
});

reset.addEventListener('click',function(){
    // user_stat.innerHTML='User:';
    // computer_stat.innerHTML='Computer:';
    window.location.reload();
})