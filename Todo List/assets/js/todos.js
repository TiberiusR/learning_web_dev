//check off todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//enter new todo to the list
$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        let todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
    };
});

//show and hide form
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})