$(document).ready(function() {
  $("#sentence").submit(function(event) {
    event.preventDefault();
    let shoutingInput = $("input#inputSentence").val();
    const uppercaseShoutingInput = shoutingInput.toUpperCase();
    $(".output").text(uppercaseShoutingInput);
  });
});

