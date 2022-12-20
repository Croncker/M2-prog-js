//class App
//{
//    runApplication()
//    {
//        console.log("Hello World");
//        let appnaam = "Facebook"
//        let versienummer = ("0.9 double")
//        let versiedatum = ("22/11/2022")
//        let autheur = ("Lucca")
//        let copyright = ("Gebruik deze code niet")
//        let distributeur = ("Lucca")
//        let darkmode = (true)
//        console.log(appnaam)
//        console.log(versienummer)
//        console.log(versiedatum)
//        console.log(autheur)
//        console.log(copyright)
//        console.log(distributeur)
//        console.log(darkmode)
//    }
//}

//let app = new App();
//app.runApplication();

class App
{

    runApplication()
    {
        this.callmario();
        console.log(this.returnbwa());
        let stat1 = this.calculator();
        console.log(stat1);

    }


    callmario()
    {
        console.log("Mario!!!")
    }


    returnbwa()
    {
        let delach = "BWAHAHAHA";
        return delach;
    }

    calculator()
    {
        let number1 = 9;
        let number2 = 9;
        let total = number1 + number2;
        return total;
    }

}
let app = new App();
app.runApplication();