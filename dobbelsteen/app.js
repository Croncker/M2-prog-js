class App{
    runApplication(){
        console.log("hello world");
        
        let stat1 = this.rollStat();
        console.log(stat1);
        let headerEl1 = document.getElementById("s1")
        headerEl1.innerHTML = stat1;
    }

    rollDice(){
        return Math.floor(Math.random() * 6 +1);
    }

    rollStat(){
        let d1 = this.rollDice();
        let d2 = this.rollDice();
        let d3 = this.rollDice();
        let d4 = this.rollDice();
        let diceArray =[d1, d2, d3, d4];
        diceArray.sort();
        let som = diceArray[1] +diceArray[2] +diceArray[3];
        return som;
    }
}

let app = new App();
app.runApplication();