setInterval(()=> {
  const colorName = document.getElementById("color").value;
  const colorValue = document.getElementById("colorValue");
  colorValue.innerText = colorName;
  colorValue.style.color = colorName;
},1)
