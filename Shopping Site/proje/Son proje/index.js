// sidebar
var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
      document.getElementById("sepet").onclick = function(){
        document.getElementById("sepet").style.background = "none";
        document.getElementById("sepet").innerHTML ="✅"
        document.getElementById("sepet").style.fontSize = "25px"
        document.getElementById("paragraf1").innerHTML ="Ürün Sepete Eklenmiştir."
        document.getElementById("urunler").style.color ="green"
        document.getElementById("sepet").style.transition= "1s";
    }
      document.getElementById("sepet2").onclick = function(){
        document.getElementById("sepet2").style.background = "none";
        document.getElementById("paragraf2").innerHTML ="Ürün Sepete Eklenmiştir."
        document.getElementById("sepet2").style.fontSize = "25px"
        document.getElementById("sepet2").innerHTML ="✅"
        document.getElementById("urunler").style.color ="green"
        document.getElementById("sepet2").style.transition= "1s";
    }
      document.getElementById("sepet3").onclick = function(){
        document.getElementById("sepet3").style.background = "none";
        document.getElementById("urunler").style.color ="green"
        document.getElementById("paragraf3").innerHTML ="Ürün Sepete Eklenmiştir."
        document.getElementById("sepet3").innerHTML ="✅"
        document.getElementById("sepet3").style.transition= "1s";
        document.getElementById("sepet3").style.fontSize = "25px"
    }
      document.getElementById("sepet4").onclick = function(){
        document.getElementById("sepet4").style.background = "none";
        document.getElementById("urunler").style.color ="green"
        document.getElementById("sepet4").innerHTML ="✅"
        document.getElementById("paragraf4").innerHTML ="Ürün Sepete Eklenmiştir."
        document.getElementById("sepet4").style.fontSize = "25px"
        document.getElementById("sepet4").style.transition= "1s";
    }
      document.getElementById("sepet5").onclick = function(){
        document.getElementById("sepet5").style.background = "none";
        document.getElementById("sepet5").innerHTML ="✅"
        document.getElementById("urunler").style.color ="green"
        document.getElementById("paragraf5").innerHTML ="Ürün Sepete Eklenmiştir."
        document.getElementById("sepet5").style.fontSize = "25px"
        document.getElementById("sepet5").style.transition= "1s";
    }
      document.getElementById("sepet6").onclick = function(){
        document.getElementById("sepet6").style.background = "none";
        document.getElementById("sepet6").innerHTML ="✅"
        document.getElementById("sepet6").style.fontSize = "25px"
        document.getElementById("paragraf6").innerHTML ="Ürün Sepete Eklenmiştir."
        document.getElementById("urunler").style.color ="green"
        document.getElementById("sepet6").style.transition= "1s";
      }