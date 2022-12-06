class App
{
    runApplication()
    {
        console.log("hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle ="grey";
        g.lineTo(70,20);
        g.lineTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.fill();
        g.stroke();
        g.closePath();

        g.beginPath();
        g.fillStyle ="lightblue";
        g.moveTo(350,350);
        g.lineTo(350,450);
        g.lineTo(450,475);
        g.lineTo(450,380);
        g.moveTo(350,350);
        g.lineTo(450,380);
        g.fill();
        g.stroke();
        g.closePath();
        

        let title = document.getElementById("newtitle");
        let randomGetal = Math.random();
        console.log (randomGetal)
        if(randomGetal = 0){
            title.style.backgroundColor = "green";
        }

        else if(randomGetal < 0.2){
            title.style.backgroundColor = "red";
        }
        
        else if(randomGetal < 0.6 && randomGetal > 0.2){
            title.style.backgroundColor = "blue";
        }

        else if(randomGetal > 0.6){
            title.style.backgroundColor = "yellow";
        }

        document.getElementById("canvasId")
        console.log(canvas)

    }
}

let app = new App();
app.runApplication();
