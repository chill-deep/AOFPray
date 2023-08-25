
function playMusic() {
    var name = document.getElementById("yourName").value.trim();
    var pray = document.getElementById("areaText").value.trim();

    if (name != "" && pray != "") {
        var audio = document.getElementById("myAudio");
        audio.play();
        document.getElementById("msg").textContent = "Mong ước " + pray + " của " + name + " đã được gửi!"
        var image = document.getElementById("nhangImg");
        var smoke = document.getElementById("smokeId");
        if (window.innerWidth <= 600) {
            image.style.width = "2%";
            image.style.top = "10.5%";
        }
        else if(window.innerWidth > 600 && window.innerWidth <= 899){
            image.style.width = "1%";
            image.style.top = "12%";
        }
        else{
            image.style.width = "0.5%";
            image.style.top = "17.5%";
        }
        smoke.style.opacity = "1";
        //flower
        var sakura = new Sakura('body', {
            colors: [
              {
                gradientColorStart: 'rgba(255, 183, 197, 0.9)',
                gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
                gradientColorDegree: 120,
              },
              {
                gradientColorStart: 'rgba(255,189,189)',
                gradientColorEnd: 'rgba(227,170,181)',
                gradientColorDegree: 120,
              },
              {
                gradientColorStart: 'rgba(212,152,163)',
                gradientColorEnd: 'rgba(242,185,196)',
                gradientColorDegree: 120,
              },
            ],
            delay: 200,
          });
    } else {
        document.getElementById("borderError").style.display = "block";
        document.getElementById("error").style.display = "block";
    }
}

function CloseError() {
    document.getElementById("borderError").style.display = "none";
    document.getElementById("error").style.display = "none";
}

