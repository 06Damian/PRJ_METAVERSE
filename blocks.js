var canvas = document.getElementById('speelveld');
var ctx = canvas.getContext('2d');

var playerX = 10
var playerY = 10
var squareWidth = 20
var sqaureHeight = 20

var player_speed = 5
var enemie_speed = 2.5

var itemWidth = 10
var itemHeight = 10

var enemieX = canvas.width/2
var enemieY = canvas.height/2

var score = 0

var items = []
var enemies = []

window.onload = function(){
    var functions = []
    var scoreTitle = document.getElementById('scoreTitle')
    var scoreCounter = 0
    canvas.width = 1250;
    canvas.height = 500;
    var createEnemey = function(){
        var array = []
        array[0] = Math.floor(Math.random() * canvas.width - itemWidth) +1 
        array[1] = Math.floor(Math.random() * canvas.height - itemHeight) +1 
        array[2] = 2
        enemies.push(array)
    }

    var updateScore = function(){
        scoreCounter++;
        scoreTitle.innerHTML = 'Score: ' + score
    }

    var resetGame = function(){
        enemie_speed = 2.5
        score = 0
        enemies = []
        updateScore()
        createEnemey()
    }

    updateScore()
    /* Draw function */
    functions.push(function(){
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle = 'blue'
        ctx.fillRect(playerX, playerY, squareWidth, sqaureHeight)
        ctx.strokeStyle = 'grey'
        ctx.strokeRect(playerX, playerY, squareWidth, sqaureHeight)

        items.forEach(function(array){
            ctx.drawImage(document.getElementById('coin'),array[0], array[1], squareWidth, sqaureHeight)
        })

        enemies.forEach(function(array){
            ctx.fillStyle = 'red'
            ctx.fillRect(array[0], array[1], squareWidth, sqaureHeight)
        })

    });
    /* Player movement */
    var up = false
    var down = false
    var left = false
    var right = false
    window.addEventListener('keydown', function(e){
        if(e.keyCode == 87){up=true}
        if(e.keyCode == 83){down=true}
        if(e.keyCode == 65){left=true}
        if(e.keyCode == 68){right=true}
    })
    window.addEventListener('keyup', function(e){
        if(e.keyCode == 87){up=false}
        if(e.keyCode == 83){down=false}
        if(e.keyCode == 65){left=false}
        if(e.keyCode == 68){right=false}
    })
    functions.push(function(){
        // if (up){
        //     playerY -= player_speed
        // }
        // if(down){
        //     playerY += player_speed
        // }
        if(left){
            playerX -= player_speed
        }
        if(right){
            playerX += player_speed
        }
    })
    /* Item collision */
    var createItem  = function(){
        let itemX = Math.floor(Math.random() * canvas.width-itemWidth) +1
        let itemY = Math.floor(Math.random() * canvas.height-itemHeight) +1
        var array = [itemX, itemY]
        items.push(array)
    }
    for (let i = 0; i < 30; i++) {
        createItem()
    }
    /* Collisions */
    items.forEach(function(array){
        if (playerX + sqaureHeight >= array[0] && playerX <= array[0] + squareWidth && playerY + squareWidth >= array[1] && playerY <= array[1] + sqaureHeight){
            array[0] = Math.floor(Math.random() * canvas.width - itemWidth) +1 
            array[1] = Math.floor(Math.random() * canvas.height - itemHeight) +1 
            score += 1
            scoreCounter +=1
            updateScore()
        }
    })
    
    /* Function loop */
    functions.forEach(function(func){
        setInterval(func, 30)
    })

    setInterval(function(){
        createEnemey()
    }, 30000)
}