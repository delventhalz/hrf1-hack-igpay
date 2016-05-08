var anslatetray = function(string) {
  var vowels = {a:1, e:1, i:1, o:1, u:1};

  return string.split(' ').map(function(word) {
    var isCapitalized = word[0] === word[0].toUpperCase();
    word = word.toLowerCase();

    // Find first vowel
    var start = word.split('').reduce(function(index, letter, i) {
      return index === null && vowels[letter] ? i : index;
    }, null);
    
    var ending = start === 0 ? 'yay' : 'ay';

    // Build pig latin word
    var igpay = word.slice(start) + word.slice(0, start) + ending;

    // Re-capitalize as needed
    return isCapitalized ? igpay[0].toUpperCase() + igpay.slice(1) : igpay; 
  }).join(' ');
};


// Listener for translate button
$('.submit').on('click', function() {
  $('.output').css('display', 'none');

  var igpay = anslatetray( $('.input').val() );
  $('.input').val('');
  $('.output').text( igpay ).fadeIn();

  // Chrome's native text-to-speech
  window.speechSynthesis.speak( new SpeechSynthesisUtterance(igpay) );
});
