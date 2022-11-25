class App
{
    runApplication()
    {
        console.log("hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(300,100);
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle ="grey";
        g.lineTo(700,200);
        g.lineTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(800,300);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(800,300);
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
        
        console.log(canvas);
    }
}

let app = new App();
app.runApplication();
