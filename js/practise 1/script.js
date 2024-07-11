var rec = document.getElementById("center");
rec.addEventListener("mousemove", (details) => {
  var location = rec.getBoundingClientRect();
  var insideleft = details.clientX - location.left;
  if (insideleft < location.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,
      location.width / 2,
      255,
      0,
      insideleft
    )
    gsap.to(rec, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease:Power4,
    })
  } else {
    var bluecolor = gsap.utils.mapRange(
        location.width / 2,
        location.width,
        0,
        255,
        insideleft
      );
      gsap.to(rec, {
        backgroundColor: `rgb(0,0,(${bluecolor})`,
        ease:Power4,
      });
  }
});
rec.addEventListener("mouseleave",function(){
    gsap.to(rec, {
        backgroundColor : "white"
    })
})
