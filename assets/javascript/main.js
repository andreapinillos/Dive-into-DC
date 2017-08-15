 //var for people
var selfRadio = $('#self');
var coupleRadio = $('#couple');
var familyRadio = $('#family');

//var for days
var oneday = $('#oneDay');
var threedays= $('#threeDays');
var fivedays= $('#fiveDays');

//var for busy-ness of days
var easyday = $('#easyDay');
var topday= $('#topDay');
var busyday= $('#busyDay');

//var submitbutton

var submitbutton =$('#submitButton');

var self_oneday_easy = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['Barrel', 38.885138, -76.997825]
];

var self_oneday_top = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 38.889469, -77.050165], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 38.887859, -77.043504], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['The Capitol', 38.890189, -77.009061], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 38.885138, -76.997825]
];

var self_oneday_busy = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 38.889469, -77.050165], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 38.887859, -77.043504], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['George Mason Memorial', 38.879590, -77.039196], //2pm 6 minute walk
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['National World War', 38.887709, -77.043491], //3:15pm 9 minute drive to the capitol
  ['The Capitol', 38.890189, -77.009061], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 38.885138, -76.997825]
 ];

var couple_oneday_easy = [
    ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['Barrel', 38.885138, -76.997825]
];

var couple_oneday_top = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 38.889469, -77.050165], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 38.887859, -77.043504], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['National World War', 38.887709, -77.043491], //3:15pm 9 minute drive to the capitol
  ['The Capitol', 38.890189, -77.009061], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 38.885138, -76.997825] 
 ];
 var couple_oneday_busy = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 38.889469, -77.050165], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 38.887859, -77.043504], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['George Mason Memorial', 38.879590, -77.039196], //2pm 6 minute walk
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['The Capitol', 38.890189, -77.009061], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 38.885138, -76.997825]
 ];
 
var family_oneday_easy = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['Barrel', 38.885138, -76.997825]
];

var family_oneday_top = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 38.889469, -77.050165], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 38.887859, -77.043504], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['The Capitol', 38.890189, -77.009061], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 38.885138, -76.997825]
 ];
 var family_oneday_busy = [
  ['Wicked Waffle', 38.901277, -77.040125], //9:30am, 7 min walk to white house
  ['The White House', 38.897668, -77.036306], //10am, 7 minute walk to lincoln memorial
  ['Lincoln Memorial', 38.889469, -77.050165], //11am, 15 minute walk to Garden cafe
  ['Garden Cafe', 38.897347, -77.047431], //11:45am, 20 minute wal back to war memorial
  ['DC War Memorial', 38.887859, -77.043504], //12:45pm, 4 minute walk to martin
  ['Martin Luther King, Jr. National Memorial', 38.887859, -77.043504], //1pm, 5 minute walk franklin
  ['Franklin Delano Roosevelt Memorial', 38.887859, -77.043504], //1:20pm, 5 minute walk to george mason
  ['George Mason Memorial', 38.879590, -77.039196], //2pm 6 minute walk
  ['Jefferson Memorial', 38.881404, -77.036446], //2:25pm 4 minute wal
  ['Washington Monument', 38.889504, -77.035268], //2:45pm 6 minute walk
  ['National World War', 38.887709, -77.043491], //3:15pm 9 minute drive to the capitol
  ['The Capitol', 38.890189, -77.009061], // 3:45pm 15 minute walk or 4 minute drive to Barrel
  ['Barrel', 38.885138, -76.997825]
 ];


function initMap() {
    var dcHome = {lat: 38.9072, lng: -77.0369};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: dcHome
  });

//for weather api
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 15,cityid: '4140963',appid: 'ef617c8e216b439dbbb1155eb77c2db1',units: 'imperial',containerid: 'openweathermap-widget-15',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator-2.0.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();


submitbutton.on('click',function(){

  //Self One Day Easy Day
  if(selfRadio.prop('checked') && oneday.prop('checked') && easyday.prop('checked')) {

   $("ul.morningList").append("<li> <b>8:30 am</b> Start your day off with a stroll around the White House! </li>");
   $("ul.afternoonList").append("<li> Eat lunch at this spot!</li>");
   $("ul.eveningList").append("<li> Wind down your day here :) </li>");
  for (var i=0;i<self_oneday_easy.length;i++){
      var location = self_oneday_easy[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
// Self One day Top Attractions
 else if(selfRadio.prop('checked') && oneday.prop('checked') && topday.prop('checked')) {
  $("ul.morningList").append("<li> <b>8:30 am</b> Start your day off with a stroll around the White House! </li>");
   $("ul.afternoonList").append("<li> Eat lunch at this spot!</li>");
   $("ul.eveningList").append("<li> Wind down your day here :) </li>");
  for (var i=0;i<self_oneday_top.length;i++){
      var location = self_oneday_top[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
  // Self One day Busy Day
 else if(selfRadio.prop('checked') && oneday.prop('checked') && busyday.prop('checked')) {
  $("ul.morningList").append("<li> <b>8:30 am</b> Start your day off with a stroll around the White House! </li>");
   $("ul.afternoonList").append("<li> Eat lunch at this spot!</li>");
   $("ul.eveningList").append("<li> Wind down your day here :) </li>");
  for (var i=0;i<self_oneday_busy.length;i++){
      var location = self_oneday_busy[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
  // Couple One Day Easy Day
 else if(coupleRadio.prop('checked') && oneday.prop('checked') && easyday.prop('checked')) {
  $("ul.morningList").append("<li> <b>10:00 am</b> Start your day off with breakfast at Wicked Waffle!</li>", "<li>7 minute walk</li>");
   $("ul.morningList").append("<li> <b>11:00 am</b> Visit the White House! </li>");
  $("ul.morningList").append("<li> <b>11:45 am</b> Visit the Martin Luther King, Jr. National Memorial</li>");
   $("ul.afternoonList").append("<li> <b> 12:15 pm</b> Eat lunch at Garden Cafe</li>");
   $("ul.afternoonList").append("<li> <b>2:00 pm </b> After lunch, visit the Franklin Delano Roosevelt Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:45 pm</b>Visit the Jefferson Memorial</li>");
   $("ul.afternoonList").append("<li> <b>3:30 pm</b>Visit the Washington Monument</li>");
   $("ul.eveningList").append("<li> <b>5:00 pm </b> Wind down your day by eating at Barrel </li>");
  for (var i=0;i<couple_oneday_easy.length;i++){
      var location = couple_oneday_easy[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
  // Couple One Day Top Day
   else if(coupleRadio.prop('checked') && oneday.prop('checked') && topday.prop('checked')) {
    $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with breakfast at Wicked Waffle!</li>", "<li>7 minute walk</li>");
    $("ul.morningList").append("<li> <b>10:30 am</b> Visit the White House! </li>");
    $("ul.morningList").append("<li> <b>11:30 am</b> Visit the Lincoln Memorial </li>");
   $("ul.afternoonList").append("<li> <b> 12:00 pm</b> Eat lunch at Garden Cafe</li>");
   $("ul.afternoonList").append("<li> <b>1:15 pm</b> Visit the DC War Memorial</li>");
   $("ul.morningList").append("<li> <b>2:00 pm</b> Visit the Martin Luther King, Jr. National Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:30 pm </b> Visit the Franklin Delano Roosevelt Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:45 pm</b> Visit the Jefferson Memorial</li>");
   $("ul.afternoonList").append("<li> <b>3:30 pm</b> Visit the Washington Monument</li>");
   $("ul.afternoonList").append("<li> <b>4:00 pm</b> Visit the National World War</li>");
   $("ul.afternoonList").append("<li> <b>4:30 pm</b> Visit The Capitol</li>");
   $("ul.eveningList").append("<li> <b>5:45 pm </b> Wind down your day by eating at Barrel </li>");
  for (var i=0;i<couple_oneday_top.length;i++){
      var location = couple_oneday_top[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
  // Couple One Day Busy Day
   else if(coupleRadio.prop('checked') && oneday.prop('checked') && busyday.prop('checked')) {
   $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with breakfast at Wicked Waffle!</li>", "<li>7 minute walk</li>");
   $("ul.morningList").append("<li> <b>10:30 am</b> Visit the White House! </li>");
   $("ul.morningList").append("<li> <b>11:30 am</b> Visit the Lincoln Memorial </li>");
   $("ul.afternoonList").append("<li> <b> 12:00 pm</b> Eat lunch at Garden Cafe</li>");
   $("ul.afternoonList").append("<li> <b>1:15 pm</b> Visit the DC War Memorial</li>");
   $("ul.morningList").append("<li> <b>2:00 pm</b> Visit the Martin Luther King, Jr. National Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:30 pm </b> Visit the Franklin Delano Roosevelt Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:45 pm</b> Visit the Jefferson Memorial</li>");
   $("ul.afternoonList").append("<li> <b>3:30 pm</b> Visit the Washington Monument</li>");
   $("ul.afternoonList").append("<li> <b>4:00 pm</b> Visit the National World War</li>");
   $("ul.afternoonList").append("<li> <b>4:30 pm</b> Visit The Capitol</li>");
   $("ul.eveningList").append("<li> <b>5:45 pm </b> Wind down your day by eating at Barrel </li>");
  for (var i=0;i<couple_oneday_busy.length;i++){
      var location = couple_oneday_busy[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
  //Family One Day Easy Day
else if(familyRadio.prop('checked') && oneday.prop('checked') && easyday.prop('checked')) {
  $("ul.morningList").append("<li> <b>9:30 am</b> Start your day off with breakfast at Wicked Waffle!</li>", "<li>7 minute walk</li>");
   $("ul.morningList").append("<li> <b>10:30 am</b> Visit the White House! </li>");
   $("ul.morningList").append("<li> <b>11:30 am</b> Visit the Lincoln Memorial </li>");
   $("ul.afternoonList").append("<li> <b> 12:00 pm</b> Eat lunch at Garden Cafe</li>");
   $("ul.afternoonList").append("<li> <b>1:15 pm</b> Visit the DC War Memorial</li>");
   $("ul.morningList").append("<li> <b>2:00 pm</b> Visit the Martin Luther King, Jr. National Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:30 pm </b> Visit the Franklin Delano Roosevelt Memorial</li>");
   $("ul.afternoonList").append("<li> <b>2:45 pm</b> Visit the Jefferson Memorial</li>");
   $("ul.afternoonList").append("<li> <b>3:30 pm</b> Visit the Washington Monument</li>");
   $("ul.afternoonList").append("<li> <b>4:00 pm</b> Visit the National World War</li>");
   $("ul.afternoonList").append("<li> <b>4:30 pm</b> Visit The Capitol</li>");
   $("ul.eveningList").append("<li> <b>5:45 pm </b> Wind down your day by eating at Barrel </li>");
  for (var i=0;i<family_oneday_easy.length;i++){
      var location = family_oneday_easy[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
  // Family One day Top Day
 else if(familyRadio.prop('checked') && oneday.prop('checked') && topday.prop('checked')) {
  $("ul.morningList").append("<li> <b>8:30 am</b> Start your day off with a stroll around the White House! </li>");
   $("ul.afternoonList").append("<li> Eat lunch at this spot!</li>");
   $("ul.eveningList").append("<li> Wind down your day here :) </li>");
  for (var i=0;i<family_oneday_top.length;i++){
      var location = family_oneday_top[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
  // Family One Day Busy Day
   else if(familyRadio.prop('checked') && oneday.prop('checked') && busyday.prop('checked')) {
    $("ul.morningList").append("<li> <b>8:30 am</b> Start your day off with a stroll around the White House! </li>");
   $("ul.afternoonList").append("<li> Eat lunch at this spot!</li>");
   $("ul.eveningList").append("<li> Wind down your day here :) </li>");
  for (var i=0;i<family_oneday_busy.length;i++){
      var location = family_oneday_busy[i];
      var marker = new google.maps.Marker({
        position: {lat: location[1], lng: location[2]},
        map: map,
      });
    }//for
  }
});



}//init map
