$(function() {

    $(".devour-it").on("click", function(e) {
        const id = $(this).data("id");
        const devoured = $(this).data("devoured");

        const devouredState = {
            devoured: devoured
        };

        $.ajax("/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Changed devoured to", devoured);
            location.reload();
        });
    });

});

$(".create-form").on("submit", function(e) {
    e.preventDefault();

    const newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: false
    };

    $.ajax("/", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("Added a new burger!");
        location.reload();
    });
});