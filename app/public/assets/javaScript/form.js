$('.submit').on('click', function(event){
    event.preventDefault();

    var newFriend = {
        name: $('#name').val().trim(),
        photo: $('#photo').val().trim(),
        scores: [$('#question1').val(),
                $('#question2').val(),
                $('#question3').val(),
                $('#question4').val(),
                $('#question5').val(),
                $('#question6').val(),
                $('#question7').val(),
                $('#question8').val(),
                $('#question9').val(),
                $('#question10').val()]
    };
    console.log(newFriend);
    console.log('the score: ' + newFriend.scores);

    $.post('/api/friends', newFriend, function(data){
        $('#modal-name').text(data.Name);
        $('#modal-image').attr('src', data.Pic);
        $('#modal-image').attr('width', 460);
        $('#show-modal').modal('toggle');
        console.log(data.photo);
    });
});