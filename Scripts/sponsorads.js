//Credit to http://trendmedia.com/
$(window).load(function() { //start after HTML, images have loaded
 
    var InfiniteRotator =
    {
        init: function()
        {
            //initial fade-in time (in milliseconds)
            var initialFadeIn = 1000;
 
            //interval between items (in milliseconds)
            var itemInterval = 5000;
 
            //cross-fade time (in milliseconds)
            var fadeTime = 2500;
 
            //count number of items
            var numberOfItems = $('.sponsorad').length;
 
            //set current item
            var currentItem = 0;
 
            //show first item
            $('.sponsorad').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.sponsorad').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.sponsorad').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});