




$('#close').click(function() {
    $('.sidebar').css('width', '0px');
    $('.content span').animate({left : '0px'});
})

$('.content span').click(function() {
    
    if($('.sidebar').css('width', '250px') ) 
    {
        $('.content span').animate({left : '250px'});
    }
 

})


function countDownConter() {

    //calculate remaining dates to create the coundown timer

    let targetDate = new Date("Aug 22, 2023 23:59:59"); // get target Date
    let currentDate = new Date(); // get current date

    let remainingDays = Math.floor(
        
      (targetDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
    
    );
    
    // calculate remaining days
    let remainingHours = targetDate.getHours() - currentDate.getHours(); 
    let remainingMins = targetDate.getMinutes() - currentDate.getMinutes(); 
    let remainingSec = targetDate.getSeconds() - currentDate.getSeconds(); 

    //append dates in html elements
    $(".remainingDays p").text(`${remainingDays} Days`);
    $(".remainingHours p").text(`${remainingHours} Hours`);
    $(".remainingMins p").text(`${remainingMins} Minutes`);
    $(".remainingSec p").text(`${remainingSec} Seconds`);

    if (
      remainingDays <= 0 &&
      remainingHours <= 0 &&
      remainingMins <= 0 &&
      remainingSec <= 0
    ) {
      // stop the countDown counter
      clearInterval(stopCounter);
      //append zero in html elements
      $(".remainingDays p").html(`0 Days`);
      $(".remainingHours p").html(`0 Hours`);
      $(".remainingMins p").html(`0 Minutes`);
      $(".remainingSec p").html(`0 Seconds`);

     
    }
  }

 // Stop SetInterval 
  let stopCounter = setInterval(countDownConter);



$('detials').click(function() {

  $('summary p').animate({'background-color': 'red'});
   
})

  // textarea  typing 
  $("textarea").on("input", function (eventInfo) {

        let remainingChar = 100 - $(eventInfo.target).val().length;
        $("#chars").html(remainingChar);
   
  });
