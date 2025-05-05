$(document).ready(function () {
  $('button').click(function () {
    $('#content').html('<div class="spinner-border text-primary"></div>');
    $.get("../html/ajax/ajax" + $(this).attr('data-ajax') + ".html")
      .done(function (data) {
        $('#content').html(data);
      })
      .fail(function () {
        $('#content').html('<div class="alert alert-danger">Ошибка загрузки!</div>');
      });
  });
});