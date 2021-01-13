$("ul").on("click", "li", function(){
    // // check if li is gray
    // if($(this).css('color') === "rgb(128, 128, 128)"){
    // // turn the li to black
    // $(this).css({
    //     color: "black",
    //     textDecoration: "none"
    // });
    // } 
    // // else turn it gray
    // else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed")
});
// click on delete sysmbol to delete a list
$("ul").on("click", "span", function(event){
    event.stopPropagation(); // this is to stop bubble phenomenon
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
});
// add new todo list 
$("input[type='text']").keypress(function(event){
    // get the new todo text after input when 'enter' key is pressed
    if (event.which === 13){
    let newText = $(this).val();
    $(this).val("");
    // add the new todo to the ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " +newText+ "</li>");
    }
})


