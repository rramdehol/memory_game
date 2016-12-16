// AN ARRAY OF CARDS IMAGES
var cards = [
	'<img src="../blackjack/cards/6s.png">',
	'<img src="../blackjack/cards/7s.png">',	
	'<img src="../blackjack/cards/8s.png">',
	'<img src="../blackjack/cards/9s.png">',
	'<img src="../blackjack/cards/10s.png">',
	'<img src="../blackjack/cards/11s.png">',
    '<img src="../blackjack/cards/12s.png">',
    '<img src="../blackjack/cards/13s.png">',
];
// All code will wait until the DOM is ready!
$(document).ready(function(){
    var gridSize = cards.length;    //to make game bigger, increase gridSize,add images to cards array

    // var card = '<img src="../blackjack/cards/12h.png">';

    var mgHTML = '';
    // for(var i = 0; i < gridSize; i++){
    //     if(i < 2){
    //     	card = cards[0];
    //     }
    //     else if(i<4){
    //     	card = cards[1];
    //     }
    //     else if(i<6){
    //     	card = cards[2];
    //     }
    //     else if(i<8){
    //     	card = cards[3];
    //     }
    //     else if(i<10){
    //     	card = cards[4];
    //     }
    //     else{
    //     	card = cards[5];
    //     }
    var randomNumber = Math.floor(Math.random()*cards.length);
		for(let i=0;i<(gridSize);i++){
		  console.log(randomNumber);
			for(let j=0;j<=1;j++){
				card = cards[randomNumber];
				console.log(card);
				mgHTML += '<div class="mg-tile col-sm-2">';
            		mgHTML += '<div class="mg-tile-inner">';
                		mgHTML += '<div class="mg-front">'+card+'</div>';
                		mgHTML += '<div class="mg-back"></div>';
            		mgHTML += '</div>';
        		mgHTML += '</div>';
			}
				cards.splice(randomNumber, 1);
				var randomNumber = Math.floor(Math.random()*cards.length);
			// 	console.log(i);
				console.log(cards);
			}
        // mgHTML += '<div class="mg-tile col-sm-2">';
        //     mgHTML += '<div class="mg-tile-inner">';
        //         mgHTML += '<div class="mg-front">'+card+'</div>';
        //         mgHTML += '<div class="mg-back"></div>';
        //     mgHTML += '</div>';
        // mgHTML += '</div>';
	console.log(mgHTML);
   $('.mg-contents').html(mgHTML);
   $('.mg-tile-inner').click(function(){
       $(this).toggleClass('flip');
   })
   var cardsUp = $(".flip");
   if(cardsUp.length === 2){
   		// CHECK TO SEE IF THEY ARE SAME
   		var cardsUpImages = cardsUp.find(".mg-front img");
   		if(cardsUpImages[0].src === cardsUpImages[0].src){
   			// This is a match!!!!!
   			cardsUp.addClass("matched");
   			cardsUp.removeClass("flip");
   		}
   		else{
   			// THE USER HAS 2 CARDS AND THEY DONT MATCH
   			setTimeOut(function(){
   				cardsUp.removeClass("flip");
   			},2000);
   		}
   }
   else{
   		// DO NOTHING

   }

});
