$(function () {
  function updateSignUpButton() {
    $btn = $('.btn-signup')

    if ($btn.hasClass('green')) {
      $btn.removeClass('green');
      $btn.text('Sign up to launch awesome games')
      return
    }

    $btn.addClass('green');
    $btn.text('Sign up to play awesome games')
  }

  $('.dev-select').click(function (e) {
    e.preventDefault();
    var $target = $('.dev-select');
    var $playerSelect = $('.player-select');

    if ($target.hasClass('active')) {
      return
    }

    $target.addClass('active');
    $playerSelect.removeClass('active');

    updateSignUpButton();
  })

  $('.player-select').click(function (e) {
    e.preventDefault();
    var $target = $('.player-select');
    var $devSelect = $('.dev-select');

    if ($target.hasClass('active')) {
      return
    }

    $target.addClass('active');
    $devSelect.removeClass('active');

    updateSignUpButton();
  })
})
