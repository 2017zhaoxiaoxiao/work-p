$(function(){
   
    window.onhashchange=function(){
        var n=$(".main"),
            strHash=window.location.hash,
            color=strHash.substring(3,strHash.length);
            n.css({"background-color":color});
    }
});