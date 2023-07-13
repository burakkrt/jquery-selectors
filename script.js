$(function () {
    $("#action1").on("click", function () {
        $("[id=taylorSwift]").css("background-color", "red")
    })
})

$(function () {
    $("#action2").on("click", function () {
        $("#list li[class]").css("background-color", "green")
    })
})

$(function () {
    $("#action3").on("click", function () {
        $("li[id^=t]").css("background-color", "#A076F9")
    })
})

$(function () {
    $("#action4").on("click", function () {
        $("#list li[id][class*=item]").css("background-color", "#FFC95F")
    })
})

$(function () {
    $("#action5").on("click", function () {
        $("#list li[class$=m][id^=r]").css("background-color", "#A78295")
    })
})