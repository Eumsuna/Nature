function clock (){
    var d_t = new Date();

    var month = d_t.getMonth();
    var date = d_t.getDate();

    var hour = d_t.getHours();
    var min = d_t.getMinutes();
    var sec = d_t.getSeconds();
    
    document.querySelector('.today').innerHTML =
    (month+1) + '.' + date

    document.querySelector('.time').innerHTML =
    hour +':'+ min +':'+ sec
}

setInterval(clock,1000);