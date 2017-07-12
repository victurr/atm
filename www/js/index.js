document.addEventListener("deviceready", onDeviceReady, false);}
    function onDeviceReady() {
      var date = new Date(), minutes = date.getMinutes(), seconds = date.getSeconds(), hours = date.getHours(),
      clock, count = 0;

      let strt = document.getElementById('strt'),
      name = document.getElementById('nm'),
      form = document.getElementById("fm"),
      tm = document.getElementById("tm");

      strt.addEventListener("click", function() {
        if(count < 1){
          if(name.value.length > 1){
            count++;
            stop();
            start(name.value);
          }
        }
        else {
          // restart the time  by clearing the tag

        }
      });

      function ap() {
        if (hours > 11) {
          return " pm";
        }
        else {
          return  " am";
        }
      }

      function start(name) {
        // create the clock.
        var clock = setInterval(function(){
          tm.innerHTML = name + ", the time is " + hours + " : " + minutes + " : " + seconds++ + ap();

          // increase the minutes.
          if(seconds == 60){
            minutes++;
            seconds = 0;
          }

          if(minutes == 60){
            hours++;
            minutes = 0;
          }

          if(hours == 24){
            hours = 0;
            minutes = 0;
            seconds = 0;
          }
        }, 1000);
      }

      function stop(){
        var btn = document.getElementById("btn");
        btn.addEventListener("click", function() {
          clearInterval(clock);
        })
      }
      stop();
  }
