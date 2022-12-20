var picture = [];
let inputPics;

$(".add").click(function(){
    $(".gallery").text("");
    inputPics = $(".picture-url").val();
    picture.push(inputPics);
    for (var photos of picture){
        $(".gallery").append("<img src=" + photos +">");
    }
});