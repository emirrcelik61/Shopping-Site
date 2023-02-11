document.getElementById("#odemebuton").onclick = function(){
    document.getElementById("#odemebuton").innerHTML ="^^ Ödemeye Geçiliyor..."
    document.getElementById("#odemebuton").style.fontSize = "15px"
    document.getElementById("#odemebuton").style.transition= "1s";
    document.getElementById("#odemebuton").style.color= "white";
    document.getElementById("#odemebuton").style.background= "none";
    document.getElementById("urun15").style.display = "none"
    document.getElementById("urun6").style.display = "none"
    document.getElementById("urun5").style.display = "none"
    document.getElementById("odemeyazi").innerHTML= "Sepetiniz oluşturulmuştur . . . " 
  }
  document.getElementById("sil1").onclick = function(){
    document.getElementById("urun5").style.display = "none"
  }
  document.getElementById("sil2").onclick = function(){
    document.getElementById("urun6").style.display = "none"
  }
  document.getElementById("sil3").onclick = function(){
    document.getElementById("urun15").style.display = "none"
  }
  deger=1500
  deger2=1899
  deger3=1999
  document.getElementById("emir").onclick = function(){
    document.getElementById("a1").value = deger+document.getElementById("a1").value++;
    document.getElementById("adet1").value ++;
     if (document.getElementById("adet1").value == 9){
      document.getElementById("yanyazi").innerHTML = "Sepete En Fazla 8 Adet Ürün Ekleyebilirsiniz."
      document.getElementById("adet1").value = 8
      document.getElementById("a1").value = 1500
      
    }
  }

  document.getElementById("button2azalt").onclick = function(){
    document.getElementById("a1").value -= deger;
    document.getElementById("adet1").value --;
    if (document.getElementById("adet1").value == -1){
      document.getElementById("adet1").value = 0
      document.getElementById("a1").value = 0
    }
  }
  document.getElementById("buton2").onclick = function(){
    document.getElementById("a2").value = deger2+document.getElementById("a2").value++;
    document.getElementById("adet22").value ++;
     if (document.getElementById("adet22").value == 9){
      document.getElementById("yanyazi2").innerHTML = "Sepete En Fazla 8 Adet Ürün Ekleyebilirsiniz."
      document.getElementById("adet22").value = 8
      document.getElementById("a2").value = 1899
      
    }
  }
  document.getElementById("buton3").onclick = function(){
    document.getElementById("a2").value -= deger2;
    document.getElementById("adet22").value --;
    if (document.getElementById("adet22").value == -1){
      document.getElementById("adet22").value = 0
      document.getElementById("a2").value = 0
    }
  }
  document.getElementById("buton4").onclick = function(){
    document.getElementById("a3").value = deger3+document.getElementById("a3").value++;
    document.getElementById("adet3").value ++;
     if (document.getElementById("adet3").value == 9){
      document.getElementById("yanyazi3").innerHTML = "Sepete En Fazla 8 Ürün Ekleyebilirsiniz."
      document.getElementById("adet3").value = 8
      document.getElementById("a3").value = 1999
      
    }
  }
  document.getElementById("buton5").onclick = function(){
    document.getElementById("a3").value -= deger3;
    document.getElementById("adet3").value --;
    if (document.getElementById("adet3").value == -1){
      document.getElementById("adet3").value = 0
      document.getElementById("a3").value = 0
    }
  }