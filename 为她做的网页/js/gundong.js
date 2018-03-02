    function gallery(){
this.inti.apply(this,arguments);
}
gallery.prototype={
inti:function(id,divWidth,divHeight,imgWidth,imgHeight,speed){
var that=this;
this.img=document.getElementById(id).getElementsByTagName("img");
this.count=this.img.length;
this.time=0;
this.rate=speed||0.25;
this.divWidth=divWidth||800;
this.divHeight=divHeight||300;
this.imgWidth=imgWidth||150;
this.imgHeight=imgHeight||100;
this.each(function(index){
    this.style.width=that.imgWidth+"px";
    this.style.height=that.imgHeight+"px";
    this.style.position="absolute";
})
document.onmousemove=function(event){
var event=event||window.event,positionX;
var positionX=that.getPageX(event);
that.rate=(positionX-document.body.clientWidth/2)/(document.body.clientWidth/2)*0.25;
}
this.play();
},
play:function(){
    var that=this;
    setInterval(function(){
    that.time+=that.rate*40/1000;
    that.each(function(index){
    this.style.left=(Math.sin(2*Math.PI*that.time+2*Math.PI/that.count*index)+1)*(that.divWidth-that.imgWidth)/2.5+"px";
    this.style.top=(Math.cos(2*Math.PI*that.time+2*Math.PI/that.count*index)+1)*(that.divHeight-that.imgHeight)/2+"px";
    this.style.width=(Math.cos(2*Math.PI*that.time+2*Math.PI/that.count*index)+1)*that.imgWidth/2+that.imgWidth/2+"px";
    this.style.height=(Math.cos(2*Math.PI*that.time+2*Math.PI/that.count*index)+1)*that.imgHeight/2+that.imgHeight/2+"px";
    this.style.zIndex=Math.floor((Math.cos(2*Math.PI*that.time+2*Math.PI/that.count*index)+1)*10);
    })
    },40);
},

getPageX:function(event){
if(event.pageX){
    return event.pageX;
}else{
    return event.clientX + document.documentElement.scrollLeft - document.documentElement.clientLeft;
}
},
each:function(fn){
for(var i=0;i<this.count;i++)
    fn.call(this.img[i],i);
}
}
new gallery("container");