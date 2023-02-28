let $title = $('#title');
let $rating = $('#rating');


$('#form').on('submit', function (e) {
  e.preventDefault();
  let titleVal = $title.val();
  let ratingVal = $rating.val();

  function deleteElement() {
    console.log(this);
    $(this).remove();
  }

  console.log('title=', $title.val());
  // $('.movies-container')
  //   .append('<p>').text(`${titleVal} ${ratingVal}`);
  const newMovie = $('<p>').text(`${titleVal} ${ratingVal}`)
    .appendTo('.movies-container');

  $('<button>BTN</button>').appendTo(newMovie);
});

// const title = document.querySelector('#title');;