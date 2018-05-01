$(function(){
  function buildHTML(message){
    var image = (message.image !== null) ? `<img src="${message.image}" class="message__bottom--image">` : "";
    var html = `<div class="message">
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
});
