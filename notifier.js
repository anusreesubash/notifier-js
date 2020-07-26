function ColorBox(options) {
  console.log(options);
  if(options.class){
    $('.' + options.class).css('background-color', options.color);
  }
  if(options.id){
    $('#' + options.id).css('background-color', options.color);
  }
}


function Notification (options){
  this.options = options;
  let popUp = $('<div>');
   popUp.css({
    width: '100%',
    position: 'absolute',
    'text-align': 'center',
    top: 0,
    // background: '#da7b7b',
    'padding-top': '20px',
    'padding-bottom': '20px',
    color: 'white',
    display: 'none'

  });
  
  $('body').append(popUp);
  let self = this;

  this.error = function(options){
    let msg = options.message;
    popUp.text(msg);
    popUp.css('background', 'red');
    popUp.slideDown();
    setTimeout(function() {
      popUp.slideUp();
    }, self.options.timeout);
  }
  this.warning = function(options){
    let msg = options.message;
    popUp.text(msg);
    popUp.css('background', 'orange');
    popUp.slideDown();
    setTimeout(function() {
      popUp.slideUp();
    }, self.options.timeout);
  }
  this.success = function(options){
    let msg = options.message;
    popUp.text(msg);
    popUp.css('background', 'green');
    popUp.slideDown();
    setTimeout(function() {
      popUp.slideUp();
    }, self.options.timeout);
  }
  this.info = function(options){
    let msg = options.message;
    popUp.text(msg);
    popUp.css('background', 'blue');
    popUp.slideDown();
    setTimeout(function() {
      popUp.slideUp();
    }, self.options.timeout);
  }
  
}