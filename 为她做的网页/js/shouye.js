 function dan(){
        $('#right').ready(function(){
            $('#xin').fadeIn(1000);
        })
    }
    
    var index = 0;
    function thenceThen(timespan){
         var date1=new Date(timespan);
         var totalSecs=(new Date()-date1)/1000;
         var days=Math.floor(totalSecs/3600/24);
         var hours=Math.floor((totalSecs-days*24*3600)/3600);
         var mins=Math.floor((totalSecs-days*24*3600-hours*3600)/60);
         var secs=Math.floor((totalSecs-days*24*3600-hours*3600-mins*60));
         document.getElementById("thenceThen").innerText="亲爱的，这是我们相爱在一起的时光。\n\n"+days+"天"+hours+"小时"+mins+"分钟"+secs+"秒";
    }
    var clock;
    window.onload=function(){
        clock=self.setInterval("thenceThen('2017/05/20')", 100);
    }

    function time(){
        document.getElementById("thenceThen").style.display = "block";
    }

    function luan(){
        document.getElementById("p").style.display = "block";
        document.getElementById("p1").style.display = "block";
    }
    
    var size = document.getElementById("size").innerHTML;
    function type(){
        document.getElementById("sizes").innerText = size.substring(0,index++)+"_";
    }
    setInterval("dan()", 10000);
    setInterval("luan()", 20000);
    setInterval("time()", 15000);
    setInterval(type, 100);

    var pon = document.getElementById("ponser");
    var per_img=document.getElementById("xiala");
    per_img.onmouseover=function(){
        per_img.src="images/xl.png";
        pon.style.display="block";
    }
    per_img.onmouseout=function(){
        per_img.src="images/sl.png";
        pon.style.display="none";
    }