(function(){
  var clock, count = 0;
  let strt = document.getElementById('strt'),
      name = document.getElementById('nm');

    strt.addEventListener("click", function() {
      if(count < 1){
          if(name.value.length > 1){
            count++;
            stop();
            start(name.value);
          }
      }
      else {

      }
    })

  function start(name) {
        var minutes = 0, seconds = 0, hours = 0;

        // create a text saying Digital clock plugin.
        var p = document.createElement("p");
        // create the clock.
        clock = setInterval(function(){
          p.textContent = name + ", the time is " + hours + " : " + minutes + " : " + seconds++;
          p.className = "large";
          document.body.appendChild(p);

          // increase the minutes.
          if(seconds == 60){
            minutes++;
            seconds = 0;
          }

          if(minutes == 60){
            hours++;
            minutes = 0;
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
})();
