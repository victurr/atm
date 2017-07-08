(function(){
   var minutes = 0, seconds = 0, hours = 0;

      // create a text saying Digital clock plugin.
      var p = document.createElement("p");
      // create the clock.
      var clock = setInterval(function(){
        p.textContent = hours + " : " + minutes + " : " + seconds++;
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

      function stop(){
          var btn = document.getElementById("btn");
          btn.addEventListener("click", function() {
                clearInterval(clock);
          })
      }
      stop();
})();
