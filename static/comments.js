let showTime = 500;
let fadeOutTime = 4000;

$(document).ready(function () {
    // Making sure the elements are not visible even while loading the page using a temporary class hidden.
    $('#success').removeClass('hidden').hide();
    $('#failure').removeClass('hidden').hide();
    $('#post').submit(function (e) {
        e.preventDefault();
        $.ajax({
        type: 'POST',
        url: window.location.href,
        data: {
        comments_content: $("#post_content").val(),
    },
    success: (result) => {
        $('#success').hide();
        $('#failure').hide();
        let comments_content = $("#comments_content").val();
        if (result === "success") {
            let successString = `Successfully submitted ${ comments_content } `;
            $('#success').html(successString).show(showTime).fadeOut(fadeOutTime);
        }
        else {
            let failString = `Failed to submit: ${ result }`;
            $('#failure').text(failString).show(showTime).fadeOut(fadeOutTime);
        }
    },
    error: function(error) {
        console.log("Error: " + JSON.stringify(error));
        }
    })
    });
});