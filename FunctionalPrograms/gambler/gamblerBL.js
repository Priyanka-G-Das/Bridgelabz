exports.Gambler = (stake, goal, trials) => {
    let win = 0;
    let loss = 0;
    let total = 0;
    for (let i = 0; i <= trials; i++) {
        if (Math.random() > 0.5) {
            win++;
            total++;
            stake = stake + 1;
            if (stake == goal) {
                console.log("you win");
            }
        }
        else {
            loss++;
            total++;
            stake = stake + 1;
            if (stake == 0) {
                console.log("you loss");
            }
        }
    }
    let w_per = (win / total) * 100;
    let l_per = (loss / total) * 100;
    console.log(win);
    console.log(loss);



}