$(document).ready(function () {

    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function () {
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function () {
      $("#myCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function () {
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function () {
      $("#myCarousel").carousel("next");
    });



    $('#view-certificate').on('click', function () {
      $('#certificate').show();
    })

    $('#add-complaint').on('click', function () {
      window.location.href='../views/complaint-form.html';
    })

    // $('#search-show').click(function(){
    //   $('#search-show').hide();
    //   $('.faq-content-container').show();
    //   $('.read-more').show();
    // })

    
});

// function showSearch(){
//   document.getElementById("search-show").style.display = "none";
//   document.getElementsById('search-hide').style.display = "block";
// }

function turnon() {
  document.getElementById("certificate").style.display = "block";
}

function turnoff() {
  document.getElementById("certificate").style.display = "none";
}
// ....faq-seach-form...............
function topic() {
  if (document.getElementById("search-hide").style.display === "block") {
      document.getElementById("search-hide").style.display = "block"
      document.getElementById("search-show").style.display = "none"
  }
  else {
      document.getElementById("search-hide").style.display = "none"
      document.getElementById("search-show").style.display = "block"
  }

}
function search() {
if (document.getElementById("hide").style.display === "block") {
    document.getElementById("hide").style.display = "block"
    document.getElementById("show").style.display = "none"
}
else {
    document.getElementById("hide").style.display = "none"
    document.getElementById("show").style.display = "block"
}

}

function load() {
  if (document.getElementById("popup1").style.display === "block") {
      document.getElementById("popup1").style.display = "block"
      document.getElementById("popup2").style.display = "none"
  }
  else {
      document.getElementById("popup1").style.display = "none"
      document.getElementById("popup2").style.display = "block"
  }
}

function popup() {
  if (document.getElementById("fail-msg").style.display === "block") {
      document.getElementById("fail-msg").style.display = "block"
      document.getElementById("success-msg").style.display = "none"
  }
  else {
      document.getElementById("fail-msg").style.display = "none"
      document.getElementById("success-msg").style.display = "block"
  }
}

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}




// add-charge-alert
function addchargealert(){
  document.getElementById('add-charge-alert').style.display='block';
  document.getElementById('content-card-container').style.position = "fixed";
}
function addchargealertcancel(){
  document.getElementById('add-charge-alert').style.display='none';
  document.getElementById('content-card-container').style.position = "static";
}
// delete-alert
function deleteyesorno(){
  document.getElementById('delete-alert').style.display='block'
  document.getElementById('content-card-container').style.position='fixed';
}
function deletealertcalcel(){
  document.getElementById('delete-alert').style.display='none';
  document.getElementById('content-card-container').style.position='static';
}

// witness-alert

function witnessformdetails(){
  document.getElementById('witness-alert').style.display='block';
  document.getElementById('content-card-container').style.position='fixed';
}
function witnesseditalert(){
  document.getElementById('witness-form-overlay').style.display='block';
  document.getElementById('content-card-container').style.position='fixed';

}
function witnessdetailsalert(){
  document.getElementById('witness-form-overlay').style.display='none';
  document.getElementById('content-card-container').style.position='static';
}

function witnessalertcancel(){
  document.getElementById('witness-alert').style.display='none';
  document.getElementById('content-card-container').style.position='static';
}
// hide and show
function next(){
  document.getElementById('form-1').style.display='none';
  document.getElementById('form-2').style.display='block';
  document.getElementById('page-2').style.fill='#32BDD2';
  document.getElementById('page-1').style.fill='#FFFFFF';
  document.getElementById('text-1-web').style.fill='#D3D3D3';
  document.getElementById('text-2-web').style.fill='FFFFFF';
  document.getElementById('text-1-mobile').style.fill='#D3D3D3';
  document.getElementById('text-2-mobile').style.fill='#FFFFFF';
}
function nextform(){
  document.getElementById('form-2').style.display='none';
  document.getElementById('form-3').style.display='block';
  document.getElementById('page-3').style.fill='#32BDD2';
  document.getElementById('page-2').style.fill='#FFFFFF';
  document.getElementById('text-2-web').style.fill='#D3D3D3';
  document.getElementById('text-3-web').style.fill='#FFFFFF';
  document.getElementById('text-2-mobile').style.fill='#D3D3D3';
  document.getElementById('text-3-mobile').style.fill='#FFFFFF';
}

// save draft
function savedraft(){
  document.getElementById('acknowledgement').style.display='block'
  document.getElementById('form-1').style.display='none';
}
function savedraftas(){
  document.getElementById('acknowledgement').style.display='block'
  document.getElementById('form-2').style.display='none';
}
function savedraftasform3(){
  document.getElementById('acknowledgement').style.display='block'
  document.getElementById('form-3').style.display='none';
}
function submit(){
  document.getElementById('acknowledgement').style.display='block'
  document.getElementById('form-3').style.display='none';
}

// back

function backformone(){
  document.getElementById('form-1').style.display='block'
  document.getElementById('form-2').style.display='none';
  document.getElementById('form-3').style.display='none';
  document.getElementById('page-1').style.fill='#32BDD2';
  document.getElementById('page-2').style.fill='#FFFFFF';
  document.getElementById('page-3').style.fill='#FFFFFF';
  document.getElementById('text-2-web').style.fill='#D3D3D3';
  document.getElementById('text-1-web').style.fill='#FFFFFF';
  document.getElementById('text-3-web').style.fill='#D3D3D3';
}

function backformtwo(){
  document.getElementById('form-2').style.display='block';
  document.getElementById('form-3').style.display='none';
  document.getElementById('page-2').style.fill='#32BDD2';
  document.getElementById('page-3').style.fill='#FFFFFF';
  document.getElementById('text-3-web').style.fill='#D3D3D3';
  document.getElementById('text-2-web').style.fill='#FFFFFF';
  
}

// circle onclick hide and show
function circleone(){
  document.getElementById('form-1').style.display='block';
  document.getElementById('form-2').style.display='none';
  document.getElementById('acknowledgement').style.display='none';
  document.getElementById('form-3').style.display='none';
  document.getElementById('page-2').style.fill='#FFFFFF';
  document.getElementById('page-1').style.fill='#32BDD2';
  document.getElementById('page-3').style.fill='#FFFFFF';
  document.getElementById('text-1-web').style.fill='#FFFFFF';
  document.getElementById('text-2-web').style.fill='#D3D3D3';
  document.getElementById('text-1-mobile').style.fill='#FFFFFF';
  document.getElementById('text-2-mobile').style.fill='#D3D3D3';
}
function circletwo(){
  document.getElementById('form-1').style.display='none';
  document.getElementById('form-3').style.display='none';
  document.getElementById('form-2').style.display='block';
  document.getElementById('page-2').style.fill='#32BDD2';
  document.getElementById('page-1').style.fill='#FFFFFF';
  document.getElementById('page-3').style.fill='#FFFFFF';
  document.getElementById('text-1-web').style.fill='#D3D3D3';
  document.getElementById('text-2-web').style.fill='FFFFFF';
  document.getElementById('text-3-web').style.fill='#D3D3D3';
  document.getElementById('text-1-mobile').style.fill='#D3D3D3';
  document.getElementById('text-2-mobile').style.fill='#FFFFFF';
  document.getElementById('text-3-mobile').style.fill='#D3D3D3';
  document.getElementById('acknowledgement').style.display='none';
}
function circlethree(){
  document.getElementById('form-1').style.display='none';
  document.getElementById('form-2').style.display='none';
  document.getElementById('acknowledgement').style.display='none';
  document.getElementById('form-3').style.display='block';
  document.getElementById('page-3').style.fill='#32BDD2';
  document.getElementById('page-2').style.fill='#FFFFFF';
  document.getElementById('page-1').style.fill='#FFFFFF';
  document.getElementById('text-1-web').style.fill='#D3D3D3';
  document.getElementById('text-2-web').style.fill='#D3D3D3';
  document.getElementById('text-3-web').style.fill='#FFFFFF';
  document.getElementById('text-2-mobile').style.fill='#D3D3D3';
  document.getElementById('text-3-mobile').style.fill='#FFFFFF';
  document.getElementById('text-1-mobile').style.fill='#D3D3D3';
  
}