    function f1(){
        return fun_t() && fun_r() && fun_y();
    }
    function fun(){
        var ave=document.getElementById("in1").value;
        var reg = /^[董亚倩]+$/
        if(reg.test(ave) == false){
            document.getElementById("d1").innerHTML="脑残孩子连自己名字都忘了啊！！！"
            return false;
        }else{
            document.getElementById("d1").innerHTML="√"
        }
    }
    function fun_r(){
        var ave1 = document.getElementById("in2").value;
        var reg1 = /^18330929033$/
        if(reg1.test(ave1)==false){ 
            document.getElementById("d2").innerHTML="如果忘了可以问问我哦 笨蛋！";
            return false;
        }else{
            document.getElementById("d2").innerHTML="√";
        }
    }
    function fun_t(){
        var ave2 = document.getElementById("in3").value;
        var reg2 = /^[吴萌]+$/
        if(reg2.test(ave2)==false){
            document.getElementById("d3").innerHTML="记住  不要玩火！！！！！！！";
            return false;
        }else{
            document.getElementById("d3").innerHTML="这才乖嘛 么么";
        }
    }
    function fun_y(){
        var ave3 = document.getElementById("in4").value;
        var reg3= /^5.20$/
        if(reg3.test(ave3)==false){
            document.getElementById("d4").innerHTML="格式是几月几日，例如：1.12";
            return false;
        }else{
            document.getElementById("d4").innerHTML="嘻嘻  要一直记得哦！";
        }
    }
    function stop(){ 
    alert('董亚倩宝贝，我爱你！');
    return false; 
    } 
    document.oncontextmenu=stop; 