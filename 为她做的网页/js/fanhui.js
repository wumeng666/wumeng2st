        var ave1 = document.getElementById("zhong");
        var ave2 = document.getElementById("num1");
        var ave3 = document.getElementById("num2");
        var ave4 = document.getElementById("num3");
        var ave5 = document.getElementById("num4");
        var ave6 = document.getElementById("num5");
        var ave7 = document.getElementById("num6");
        var li2 = document.getElementById('li2');
        var li3 = document.getElementById('li3');
        var li4 = document.getElementById('li4');
        var li5 = document.getElementById('li5');
        var li6 = document.getElementById('li6');
        var li7 = document.getElementById('li7');
        var li1 = document.getElementById('li1');
        var parent=document.getElementById("div1");
        var child=document.getElementById("p1");

    function dian1(){
        ave1.style.display='none';
        ave2.style.display='block';
        ave3.style.display='none';
        ave4.style.display='none';
        ave5.style.display='none';
        ave6.style.display='none';
        ave7.style.display='none';
    }
    function dian2(){
        ave1.style.display='none';
        ave2.style.display='none';
        ave3.style.display='block';
        ave4.style.display='none';
        ave5.style.display='none';
        ave6.style.display='none';
        ave7.style.display='none';
    }
    function dian3(){
        ave1.style.display='none';
        ave2.style.display='none';
        ave3.style.display='none';
        ave4.style.display='block';
        ave5.style.display='none';
        ave6.style.display='none';
        ave7.style.display='none';
        parent.removeChild(child);
    }
    function dian4(){
        ave1.style.display='none';
        ave2.style.display='none';
        ave3.style.display='none';
        ave4.style.display='none';
        ave5.style.display='block';
        ave6.style.display='none';
        ave7.style.display='none';
    }
    function dian5(){
        ave1.style.display='none';
        ave2.style.display='none';
        ave3.style.display='none';
        ave4.style.display='none';
        ave5.style.display='none';
        ave6.style.display='block';
        ave7.style.display='none';
    }
    function dian6(){
        ave1.style.display='none';
        ave2.style.display='none';
        ave3.style.display='none';
        ave4.style.display='none';
        ave5.style.display='none';
        ave6.style.display='none';
        ave7.style.display='block';
    }

    function ret(){
          li2.className = "stop";
          li3.className = "stop";
          li4.className = "stop";
          li5.className = "stop";
          li6.className = "stop";
          li7.className = "stop";
          li1.className = "stop";
        ave1.style.display="block";
        ave2.style.display="none";
        ave3.style.display="none";
        ave4.style.display="none";
        ave5.style.display="none";
        ave6.style.display="none";
        ave7.style.display="none";
    }


    function thenceThen(timespan){
         var date1=new Date(timespan);
         var totalSecs=(new Date()-date1)/1000;
         var days=Math.floor(totalSecs/3600/24);
         var hours=Math.floor((totalSecs-days*24*3600)/3600);
         var mins=Math.floor((totalSecs-days*24*3600-hours*3600)/60);
         var secs=Math.floor((totalSecs-days*24*3600-hours*3600-mins*60));
         document.getElementById("thenceThen").innerText="我们已经相爱："+days+"天"+hours+"小时"+mins+"分钟"+secs+"秒";
        }
        var clock;
        window.onload=function(){
         clock=self.setInterval("thenceThen('2017/05/20')", 500);
    }