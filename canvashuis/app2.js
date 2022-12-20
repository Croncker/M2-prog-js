class App
{
    runApplication()
    {
        console.log("hello World!");
        let canvas = document.getElementById("canvasId");

        let g = canvas.getContext("2d");
        this.tekenhuis(10,10,g);
        this.tekenhuis(100,10,g);
        this.tekenKerstBoom(300, 130,g);
        this.tekenKerstBoom(300, 190,g);
        this.tekenKerstBoom(300, 240,g);
        this.ballen(430, 210,g);
        this.ballen(470, 110,g);
        this.ballen(370, 220,g);
        this.ballen(357, 173,g);
        this.ballen(420, 155,g);
        this.ballen(320, 128,g);
        this.ballen(330, 188,g);
        this.ballen(365, 80,g);
        this.ballen(400, 100,g);
        this.ballen(430, 60,g);
        
        console.log(canvas);
    }

    tekenhuis(x,y,g){
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30+x,10+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.lineTo(30+x,10+y);
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle ="grey";
        g.lineTo(70+x,20+y);
        g.lineTo(80+x,30+y);
        g.lineTo(80+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.fill();
        g.stroke();
        g.closePath();

        g.beginPath();
        g.fillStyle ="lightblue";
        g.moveTo(35+x,35+y);
        g.lineTo(35+x,45+y);
        g.lineTo(45+x,47+y);
        g.lineTo(45+x,38+y);
        g.moveTo(35+x,35+y);
        g.lineTo(45+x,38+y);
        g.fill();
        g.stroke();
        g.closePath();
    }

    tekenKerstBoom(x,y,g){
        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(100+x,y-100);
        g.lineTo(200+x, 0+y);
        g.fill();
        g.fillStyle = "brown";
        g.fillRect(x+81, y+50, 40, 60);
    }

    ballen(x,y,g){
        for (var i = 0; i < 6; i++)
        g.beginPath();
        if (i%2 == 0)
        g.fillStyle = 'red';
        g.arc(x , y, 10, 0, 2 * Math.PI);
        g.fill();
    }
}

let app = new App();
app.runApplication();
