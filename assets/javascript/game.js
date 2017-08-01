$(function() {
    $("#goal").data("goal", Math.round(Math.random()*101)+19);
    $("#scoreboard").data("wins", 0);
    $("#scoreboard").data("losses", 0);
    $("#green").data("value", Math.ceil(Math.random()*12));
    $("#orange").data("value", Math.ceil(Math.random()*12));
    $("#yellow").data("value", Math.ceil(Math.random()*12));
    $("#red").data("value", Math.ceil(Math.random()*12));
    $("#points").data("points", 0);
    $("#goal").text($("#goal").data("goal"));

    function reset() {
        $("#goal").data("goal", Math.round(Math.random()*101)+19);
        $("#wins").text($("#scoreboard").data("wins"));
        $("#losses").text($("#scoreboard").data("losses"));
        $("#green").data("value", Math.ceil(Math.random()*12));
        $("#orange").data("value", Math.ceil(Math.random()*12));
        $("#yellow").data("value", Math.ceil(Math.random()*12));
        $("#red").data("value", Math.ceil(Math.random()*12));
        $("#points").data("points", 0);
        $("#points").text("0");
        $("#goal").text($("#goal").data("goal"));
    }

    function updateScore() {
        if ($("#points").data("points") < $("#goal").data("goal")) {
            $("#points").text($("#points").data("points"));
        } else if ($("#points").data("points") == $("#goal").data("goal")) {
            $("#scoreboard").data("wins", $("#scoreboard").data("wins")+1);
            reset();

        } else {
            $("#scoreboard").data("losses", $("#scoreboard").data("losses")+1);
            reset();

        }
    }

    $("#green").click(function(){
        $("#points").data("points", $("#points").data("points")+$("#green").data("value"));
        updateScore();
    });
    $("#orange").click(function(){
        $("#points").data("points", $("#points").data("points")+$("#orange").data("value"));
        updateScore();
    });
    $("#yellow").click(function(){
        $("#points").data("points", $("#points").data("points")+$("#yellow").data("value"));
        updateScore();
    });
    $("#red").click(function(){
        $("#points").data("points", $("#points").data("points")+$("#red").data("value"));
        updateScore();
    });

});
