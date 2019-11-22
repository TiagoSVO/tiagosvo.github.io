$(document.body).ready(function () {
  var today = new Date()
  var age = today.getFullYear() - 1991
  $('#calc-age').html(age)
})
