/*function ping(url){  
  var img = new Image();  
  var start = new Date().getTime();  
  //img.src = "http://" + ip +"?t="+start;  
  img.src = url;
  var flag = false;  
  img.onload = function(){  
    flag = true;  
      console.log('ok:'+url);  
  }  
  img.onerror = function(){
      flag = true;
      console.log('error but got response:'+url)
  }
  var timer = setTimeout(function(){  
      if(!flag){  
        flag = true;
        console.log('failed:'+url);
      }  
  },1500);
}  
  
  
ping('http://www.baidu.com'); 

ping('http://15.12.12.12');
*/



function addURL(url, title, tags){
    /*$.ajaxSetup({
        headers: { 'Authorization': "Basic QWRtaW46"}
    });*/
    
    $.ajax({
        url: "http://localhost:8080/Hello"
        
    }).done(function(data) {
      animateItems();
      console.log(data)
    });
    
    /*
    $.ajax({
        url: "http://16.186.77.120:8081/AssetManagerWebService/rs/aql/amPortal/url, system, tags",
        data: '<Document><Schema><Column Name="URL" Index="0"/><Column Name="System" Index="1"/><Column Name="Tags" Index="2"/></Schema><Result><Row><Column Index="0">'+url+'</Column><Column Index="1">'+title+'</Column><Column Index="2">'+tags+'</Column></Row></Result></Document>', 
        type: 'POST',
        contentType: "application/xml"    
    }).done(function(data) {
      setTimeout(animateItems, 500);
      console.log(data)
    });*/
}

//addURL('http://jsfiddle.net/benspring/VDPXs/6/','jsfiddle, a powerful js playground','js, javascript')

if (!window.jQuery) {
        console.log("aaaaaaaa");
        //console.log(document.createElement('script'));

        script=document.createElement('script');
        script.src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
        script.onload=foo;
        document.body.appendChild(script);
    } else {
      foo();
    }


function foo(){
  // Jquery, CENTER
  jQuery.fn.center = function () {
      this.css("position","absolute");
      this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
      this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
      return this;
  }



  $(window).bind('resize', function() {
      var that = this;

      if (!('balancer' in that)) {
          that.balancer = setTimeout(function() {
              $("div.item").center(true);
              $("div.container").center(true);
              
              delete that.balancer;
          }, 200);
      }
  });

  $("<link/>", {
     rel: "stylesheet",
     type: "text/css",
     href: "bookmark.css"
  }).appendTo("head");

  console.log("added css");
  $('<div class="item1">        <p>Bookmark added!</p>    </div>').appendTo("body");
  console.log("added div");
  //$("div.item1").center(true);
  //console.log("centered");
  //$("div.item1").css("margin-top","-75px");

  addURL(location.href, document.title, "test, to_delete");
}


/*var mydiv = document.createElement( 'div' );
var p = document.createElement( 'p' );
p.
mydiv.appendChild(p);
document.body.appendChild(mydiv);*/



function animateItems(){
    $('.item1').animate({
        opacity: 1,
        //left: '-=100'
    }, 2800);
    $('.item1').animate({
        opacity: 0,
        //left: '-=100'
    }, 800);
}