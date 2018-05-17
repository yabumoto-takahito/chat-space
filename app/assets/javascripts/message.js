$(function(){

  function buildHTML(message){
    var image = '';
    image = (message.image !== null) ? `<img src="${message.image}" class="message__bottom--image">` : "";
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="message__top">
                    <div class="message__top--name">
                      ${message.user_name}
                    </div>
                    <div class="message__top--date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="message__bottom">
                    <p class="message__bottom--text">
                      ${message.body}
                    </p>
                    <div>
                      ${image}
                    </div>
                  </div>
                </div>`
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.content-messages').append(html)
      $('.form__message').val('')
      $('.hidden').val('')
      $('.form__submit').prop('disabled', false)
      $('.content-messages').animate({scrollTop: $('.content-messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  })

  var interval = setInterval(function(){
    var latest_id = $('.message:last').data('message-id')
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: location.href,
        type: 'GET',
        data: { id : latest_id },
        dataType: 'json'
      })
      .done(function(messages){
        var html = '';
        messages.forEach(function(message){
          if (message.id > latest_id ){
            html = buildHTML(message)
            $('.content-messages').append(html)
            $('.content-messages').animate({scrollTop: $('.content-messages')[0].scrollHeight}, 'fast');
          }
        })
      })
      .fail(function(){
      })
    }
    else {
      clearInterval(interval);
    }
  }, 5000);
});
