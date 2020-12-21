class Form{
    constructor(){

        this.input = createInput("name");
        this.button = createButton("play");
        this.title = createElement("h1");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset");

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }

    display(){

        this.title.html("Car racing game");
        this.title.position(displayWidth/2 - 50, 0);
        this.input.position(displayWidth/2 - 40, displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.reset.position(displayWidth - 100, 30);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.updateCount(playerCount);
            player.update();

            this.greeting.html("welcome " + player.name);
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        }); 

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            database.ref('/').update({
                players: null,
                finishedPlayers: 0
            });
        });


    }

}