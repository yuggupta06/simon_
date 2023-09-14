const mediaQuery=window.matchMedia('(max-width:390px)');
if(mediaQuery.matches){
    $("h1").html("Press <button>Start</button>Button To Start");
    $("h1 button").addClass("start-button");
    $("h1 button").click(function(){
        $("body").addClass("body-padding");
        $("#level-title").text("Level 1");
        level_1();
    })
    
}


$(document).keypress(function(event){
    if(event.key==="s"||event.key==="r")
    {
    $("#level-title").text("Level 1");
    level_1();

}})   

function wrong(){
    $("#level-title").text("Game Over,Press R key to restart"); 
    const mediaQuery=window.matchMedia('(max-width:390px)');
    if(mediaQuery.matches){
        $("body").removeClass("body-padding");
        $("#level-title").html("Game Over,Press <button>Restart</button> key to restart"); 
        $("h1 button").addClass("start-button");
        $("h1 button").click(function(){
            $("body").css("padding-top","200px");
            $("#level-title").text("Level 1");
            level_1();
        })
    }
    var wrong=new Audio("sounds/wrong.mp3")
    wrong.play();
    $("body").addClass("red");
     setTimeout(function(){
    $("body").removeClass("red")
    },500) 
    $(".btn").off();
}

function song(key){
    var song=new Audio("sounds/"+key+".mp3");
    song.play();
}

function light(key,value1,value2){
    setTimeout(function(){
        $("#"+key).addClass("pressed");
    
        setTimeout(function(){
            song(key);
            $("#"+key).removeClass("pressed")
        },value1)
    
        },value2)
}


function level_1(){
    var a= Math.floor(Math.random()*4);
    $("#"+a).addClass("pressed");
        song(a);
        setTimeout(function(){
            $("#"+a).removeClass("pressed")
        
    },400)
    $(".btn").click(function(){
        var buttonInnerHtml=this.getAttribute("id");
        song(buttonInnerHtml);
        if(buttonInnerHtml==a){
          $("#level-title").text("Level 2");
          $(".btn").off();
          Level_2();
          
        }
        else{
          wrong();
        }
    
    })
}

function Level_2(){
    var a= Math.floor(Math.random()*4);
    var b=Math.floor(Math.random()*4);
    $("#"+a).addClass("pressed");

    setTimeout(function(){
        song(a);
        $("#"+a).removeClass("pressed")
    },300)

    light(b,100,400);

    $(".btn").click(function(){
        var buttonInnerHtml=this.getAttribute("id");
        song(buttonInnerHtml);
        if(buttonInnerHtml==a){
            $(".btn").off();
            $(".btn").click(function(){
                var buttonInnerHtml1=this.getAttribute("id");
                song(buttonInnerHtml1);
                if(buttonInnerHtml1==b){
                    $("h1").text("Level 3");
                    $(".btn").off();
                    level_3();
                }
                else
                {
                    wrong();
                }
                    })
            }
            else{
                wrong();
            }
                
    })

}

function level_3(){
    var a= Math.floor(Math.random()*4);
    var b=Math.floor(Math.random()*4);
    var c=Math.floor(Math.random()*4);
    $("#"+a).addClass("pressed");
    setTimeout(function(){
        song(a);
        $("#"+a).removeClass("pressed")
    },300)

    light(b,200,500);

    light(c,200,1000);

    $(".btn").click(function(){
        var buttonInnerHtml=this.getAttribute("id");
        song(buttonInnerHtml);
        if(buttonInnerHtml==a){

            $(".btn").off();
            $(".btn").click(function(){
                var buttonInnerHtml1=this.getAttribute("id");
                song(buttonInnerHtml1);
                if(buttonInnerHtml1==b){
                    $(".btn").off();
                    $(".btn").click(function(){
                        var buttonInnerHtml2=this.getAttribute("id");
                        song(buttonInnerHtml2);
                        if(buttonInnerHtml2==c){
                            $("h1").text("Level 4");
                            $(".btn").off();
                            level_4();
                        }
                        else{
                            wrong();
                        }
                    })
                }
                else{
                    wrong();
                }
            })
        }
        else{
            wrong();
        }
    })
    

}

function level_4(){
    var a= Math.floor(Math.random()*4);
    var b=Math.floor(Math.random()*4);
    var c=Math.floor(Math.random()*4);
    var d=Math.floor(Math.random()*4);
    $("#"+a).addClass("pressed");
    setTimeout(function(){
        song(a);
        $("#"+a).removeClass("pressed"); 
    },300)
    light(b,200,500);
    light(c,200,1000);
    light(d,200,1300);

    $(".btn").click(function(){
        var buttonInnerHtml=this.getAttribute("id");
        song(buttonInnerHtml);
        if(buttonInnerHtml==a){

            $(".btn").off();
            $(".btn").click(function(){
                var buttonInnerHtml1=this.getAttribute("id");
                song(buttonInnerHtml1);
                if(buttonInnerHtml1==b){
                    $(".btn").off();
                    $(".btn").click(function(){
                        var buttonInnerHtml2=this.getAttribute("id");
                        song(buttonInnerHtml2);
                        if(buttonInnerHtml2==c){
                            $(".btn").off();
                            $(".btn").click(function(){
                                var buttonInnerHtml3=this.getAttribute("id");
                                song(buttonInnerHtml3);
                                if(buttonInnerHtml3==d){
                                    $("h1").text("Level 5");
                                    $(".btn").off();
                                    level_5();
                                }
                                else{
                                    wrong();
                                }
                            })
                        }
                        else{
                            wrong();
                        }
                    })
                }
                else{
                    wrong();
                }
            })
        }
        else{
            wrong();
        }
    })

}


function level_5(){

    var a= Math.floor(Math.random()*4);
    var b=Math.floor(Math.random()*4);
    var c=Math.floor(Math.random()*4);
    var d=Math.floor(Math.random()*4);
    var e=Math.floor(Math.random()*4);
    $("#"+a).addClass("pressed");
    setTimeout(function(){
        song(a);
        $("#"+a).removeClass("pressed"); 
    },300)
    light(b,150,400);
    light(c,150,800);
    light(d,150,1000);
    light(e,150,1200);
 
    $(".btn").click(function(){
        var buttonInnerHtml=this.getAttribute("id");
        song(buttonInnerHtml);
        if(buttonInnerHtml==a){

            $(".btn").off();
            $(".btn").click(function(){
                var buttonInnerHtml1=this.getAttribute("id");
                song(buttonInnerHtml1);
                if(buttonInnerHtml1==b){
                    $(".btn").off();
                    $(".btn").click(function(){
                        var buttonInnerHtml2=this.getAttribute("id");
                        song(buttonInnerHtml2);
                        if(buttonInnerHtml2==c){
                            $(".btn").off();
                            $(".btn").click(function(){
                                var buttonInnerHtml3=this.getAttribute("id");
                                song(buttonInnerHtml3);
                                if(buttonInnerHtml3==d){
                                    $(".btn").off();
                                    $(".btn").click(function(){
                                        var buttonInnerHtml4=this.getAttribute("id");
                                        song(buttonInnerHtml4);
                                        if(buttonInnerHtml4==e){
                                            $("h1").text("Level 6");
                                            $(".btn").off();
                                            level_6();
                                        }
                                        else{
                                            wrong();
                                        }
                                    })
                                }
                                else{
                                    wrong();
                                }
                            })
                        }
                        else{
                            wrong();
                        }
                    })
                }
                else{
                    wrong();
                }
            })
        }
        else{
            wrong();
        }
    })
}


function level_6(){
    var a= Math.floor(Math.random()*4);
    var b=Math.floor(Math.random()*4);
    var c=Math.floor(Math.random()*4);
    var d=Math.floor(Math.random()*4);
    var e=Math.floor(Math.random()*4);
    var f=Math.floor(Math.random()*4);
    $("#"+a).addClass("pressed");
    setTimeout(function(){
        $("#"+a).removeClass("pressed");
    },300)
        
    light(b,100,500);
    light(c,100,900);
    light(d,100,1100);
    light(e,100,1300);
    light(f,100,1500);

    $(".btn").click(function(){
        var buttonInnerHtml=this.getAttribute("id");
        song(buttonInnerHtml);
        if(buttonInnerHtml==a){

            $(".btn").off();
            $(".btn").click(function(){
                var buttonInnerHtml1=this.getAttribute("id");
                song(buttonInnerHtml1);
                if(buttonInnerHtml1==b){
                    $(".btn").off();
                    $(".btn").click(function(){
                        var buttonInnerHtml2=this.getAttribute("id");
                        song(buttonInnerHtml2);
                        if(buttonInnerHtml2==c){
                            $(".btn").off();
                            $(".btn").click(function(){
                                var buttonInnerHtml3=this.getAttribute("id");
                                song(buttonInnerHtml3);
                                if(buttonInnerHtml3==d){
                                    $(".btn").off();
                                    $(".btn").click(function(){
                                        var buttonInnerHtml4=this.getAttribute("id");
                                        song(buttonInnerHtml4);
                                        if(buttonInnerHtml4==e){
                                            $(".btn").off();
                                            $(".btn").click(function(){
                                                var buttonInnerHtml5=this.getAttribute("id");
                                                song(buttonInnerHtml5);
                                                if(buttonInnerHtml5==f){
                                                    $("h1").text("Game Finished");
                                                    $(".btn").off();
                                                    level_7();
                                                }
                                                else{
                                                    wrong();
                                                }
                                            })
                                        }
                                        else{
                                            wrong();
                                        }
                                    })
                                }
                                else{
                                    wrong();
                                }
                            })
                        }
                        else{
                            wrong();
                        }
                    })
                }
                else{
                    wrong();
                }
            })
        }
        else{
            wrong();
        }
    })

}