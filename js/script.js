// Fade Sample ////////////
$( function() {

  $(".fade").fadeTo(0,0.2); // 初期状態 20%

  $(".fade").hover(
    function(){
      $(this).fadeTo("slow", 1.0); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo("slow", 0.2); // マウスが離れたら20%に戻す
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#width").click( function(){
    $('#move').animate( {width: "toggle", opacity: "toggle"} , { 'duration': 1000 } );
    $('#move').attr('src', 'https://images.unsplash.com/photo-1593614256011-77474d145a66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
  });
  $("#height").click( function(){
    $('#move').animate( {height: "toggle", opacity: "toggle"} , { 'duration': 1000 } );
    $('#move').attr('src', 'https://cdn.pixabay.com/photo/2020/07/01/09/54/statue-5359083_960_720.jpg');
  });
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=200px' } , { 'duration': 1000 } );
    $('#move').attr('src', 'https://cdn.pixabay.com/photo/2016/06/17/09/54/woman-1462985_960_720.jpg');
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=200px' } , { 'duration': 1000 } );
    $('#move').attr('src', 'https://cdn.pixabay.com/photo/2016/11/12/20/00/under-water-1819586_960_720.jpg');
  });
});
