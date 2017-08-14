var panel = $("#display-itinerary");
var morning = $("#morning-schedule");
var afternoon = $("#afternoon-schedule");
var evening = $("#evening-schedule");

$(document).ready(function(){

}); //end document.ready

  // function AddBorder() { $(this).css('border','3px solid red'); }
$('#one').click(function() {
  $( this ).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#two').click(function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#three').click(function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#four').click(function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#five').click( function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#six').click(function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#seven').click( function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#eight').click(function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});
$('#nine').click(function() {
  $(this).fadeTo( "fast", 0.6 ).css("border","1px solid red");
});


//Question set
var questions = [{
  q1: "1 . How many days will you be staying in DC?",
  options: ["1", ,"3", "5"],
}, {
  q2: "2 . What is the size of your travel group?",
  options: ["Traveling Alone", "Traveling as a couple", "Traveling with a family"],
}, {
  q3: "3 . Choose your itinerary option:",
  options: ["Top Attractions", "Packed Itinerary", "Easy Going"],
}, 
];

var itinerarySelections = {
  q1option1:"Display what it would be like for 1 day, 1 person, and top attractions.",
  q1option2:"Display what it would be like for 3 days, 2 people and top attractions",
  q1option3:"Display what it would be like for 5 days, family and top attractions",
  

displayItinerary: function() {
    $("#display-itinerary").empty();
    for (var i = 0; i < questions.length; i++) {
        panel.append('<h2>' + questions[i] + '</h2>');
      for (var j = 0; j < questions[i].options.length; j++) {
        panel.append('<input type="radio" name="questions' + '-' + i + '" value="' + questions[i].options[j] + '">' + questions[i].options[j]);
    }
}
},

done: function() {
  $.each($('input[name="option-1"]:checked'), function() {
      if ($(this).val() == questions[0].options[0] && questions[1].options[0] && question[2].options[0]){
        panel.morning.append(itinerarySelections.q1option1);
        console.log("#morning-schedule");
      } else {
        alert("Please refresh the page and choose only one option per row");
      }
        });
   $.each($('input[name="option-2"]:checked'), function() {
      if ($(this).val() == questions[0].options[1] && questions[1].options[0] && question[2].options[0]) {
        panel.morning.append(itinerarySelections.q1option2);
    } else {
        alert("Please refresh the page and choose only one option per row");
      }
      });

  this.result();
  },
 result: function() {

    $('#display-itinerary h2').hide();
    panel.append('<h3>Morning Schedule: ' + this.itinerarySelections.q1option1 + '</h3>');
    panel.append('<h3>Afternoon Schedule: ' + this.itinerarySelections.q1option2 + '</h3>');
    panel.append('<h3>Evening Schedule: ' + (questions.length) + '</h3>');
  } 


} //end for the variable for itinerarySelections
