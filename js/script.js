/* <span class="tt-text">💖 💖 💖</span> */

(function($) {
     $(document).ready(function() {
          var $love = $('#love');
          var lPosX = $love.offset().left, lPosY = $love.offset().top;
          var $peace = $('#peace');
          var pPosX = $peace.offset().left, pPosY = $peace.offset().top;
          var isT = false;
          var isP = false;
          $love.on('mousemove', function(e) {
               if(isT) return true;
               var posX = e.clientX, posY = e.clientY, top = Math.abs(lPosY - posY), left = Math.abs(lPosX - posX);
               var max = 6;
               for(var i = 0; i < max; i++){
                    var html =  '<span class="tt-text">💖</span>';
                    var $html = $(html);
                    isT = true;
                    TweenMax.set($html, {autoAlpha: 1, top: top, left: left, x: 0, y: 0});
                    var xDir = Math.random() < 0.5 ? 1 : -1, yDir = Math.random() < 0.5 ? 1 : -1;
                    var xEnd = Math.round(Math.random() * 100) * xDir, yEnd = Math.round(Math.random() * 100) * -1;
                    TweenMax.to($html, 0.3, {css: {x: xEnd, y: yEnd}, onComplete: function() {
                         TweenMax.to($(this.target), 0.1, {autoAlpha: 0, onComplete: function() {
                              $(this.target).remove();
                         }});
                         if(i === max) isT = false;
                    }})
                    $love.append($html);
               }
          })

          $peace.on('mousemove', function(e) {
               if(isP) return true;
               var posX = e.clientX, posY = e.clientY, top = Math.abs(pPosY - posY), left = Math.abs(pPosX - posX);
               var max = 6;
               for(var i = 0; i < max; i++){
                    var html =  '<span class="tt-text">✌️</span>';
                    var $html = $(html);
                    isP = true;
                    TweenMax.set($html, {autoAlpha: 1, top: top, left: left, x: 0, y: 0});
                    var xDir = Math.random() < 0.5 ? 1 : -1, yDir = Math.random() < 0.5 ? 1 : -1;
                    var xEnd = Math.round(Math.random() * 100) * xDir, yEnd = Math.round(Math.random() * 100) * -1;
                    TweenMax.to($html, 0.3, {css: {x: xEnd, y: yEnd}, onComplete: function() {
                         TweenMax.to($(this.target), 0.1, {autoAlpha: 0, onComplete: function() {
                              $(this.target).remove();
                         }});
                         if(i === max) isP = false;
                    }})
                    $peace.append($html);
               }
          })
     });
})(jQuery);