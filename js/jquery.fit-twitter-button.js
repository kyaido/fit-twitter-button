(function($) {
  
  $.fn.fitTwitterButton = function(options) {
    if (this.length === 0) { return false; }
    
    var conf = $.extend({
        activeClass: 'is-slideNavActive'
    }, options);
    
    $(this).each(function() {
      
      var self = $(this);
      var aaa = self.find('.twitter-share-button');
      var url = aaa.data('url') || location.href;
      // タイミングが厳しいというか、最初にaタグがあって、消えてiframeが出てくるのの、どちらのタイミングも捕捉しないといけないのか
      // setIntervalで監視して幅が変わったらとか…？
      // MutationObserver
      
      function get_twitter_count(url) {
        $.ajax({
          url: 'http://urls.api.twitter.com/1/urls/count.json',
          dataType:'jsonp',
          data:{
            url: url
          },
          success: function(res) {
            console.log(res.count);
            console.debug();
          },
          error: function() {
            console.log('error');
          }
        });
      }
      
      get_twitter_count(url);
      
      $(window).on('load', function() {
        var iframe = self.find('iframe');
        // iframe.width(100);
      });
      
    });
    
  };
  
})(jQuery);