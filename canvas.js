var canvas = document.querySelector('canvas');
var balls = 200;
if(canvas.width <600){
    balls = 100;
}else{
    balls = 300
}
canvas.width = window.innerWidth;
canvas.height = document.body.scrollHeight ;
var c = canvas.getContext('2d');
var mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove', (e)=>{
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('resize', function(){
    canvas.height = 0;
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight ;
    if(canvas.width <600){
        balls = 100;
    }else{
        balls = 300
    }
    init();
})

var maxRadius = 30;

var colorArray = [
    '#0A1747',
    '#0029FA',
    '#8D07F6',
    '#FFFF05',
    '#D4DBF5'
];

function Circle(x, y,dx,dy, radius){
    this.x = x;
    this.y = y;
    this.dx= dx;
    this.dy= dy;
    this.radius = radius;
    this.minradius = this.radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2,false);
        c.fill();
        c.fillStyle = this.color;
    }

    this.update = function(){
        
        if(this.x+ this.radius> window.innerWidth || this.x-this.radius <0 ){
                this.dx = -this.dx;
                    }
                
        if(this.y+ this.radius> document.body.scrollHeight || this.y-this.radius <0 ){
            this.dy = -this.dy;
        }

        //interactivity

        if(window.innerWidth>500){
            if(mouse.x - this.x <50 && mouse.x -this.x >-50 &&
                mouse.y -this.y <50 && mouse.y - this.y >-50 &&this.radius < maxRadius){
                this.radius+=1;
            }else if(this.radius>this.minradius){
                this.radius-=1;
            }
        }
                   
        this.x+=this.dx;
        this.y+=this.dy;
        this.draw();

        
    }
}



var circleArray = [];



function init(){
    circleArray=[];
    for(var i=0; i<balls; i++){
        var radius =Math.random() * 3 +1;
        var x= Math.random() * (window.innerWidth - 2*radius)+radius;
        var y = Math.random() * (document.body.scrollHeight - 2*radius)+radius;
        var velocityFactor = 1;
        var dx=(Math.random()*Math.pow(-1,Math.floor(Math.random()*4)))* velocityFactor;
        var dy=(Math.random()*Math.pow(-1,Math.floor(Math.random()*4)))* velocityFactor;
        circleArray.push( new Circle(x,y,dx, dy,radius) );
    
    }
}

function animate(){
    c.clearRect(0,0,window.innerWidth, document.body.scrollHeight)
    for(i=0;i<circleArray.length; i++){
        circleArray[i].update();
    }
    // circle.update();
    requestAnimationFrame(animate);

}
init();
animate();