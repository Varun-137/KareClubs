Shery.imageEffect("#back",{style:3,config:{"uFrequencyX":{"value":12,"range":[0,100]},"uFrequencyY":{"value":12,"range":[0,100]},"uFrequencyZ":{"value":10,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9217479997069196},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":4.05,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.37,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.32,"range":[0,2]},"noise_scale":{"value":21.37,"range":[0,100]},"uColor":{"value":false},"uSpeed":{"value":0.56,"range":[0.1,1],"rangep":[1,10]},"uAmplitude":{"value":1.5,"range":[0,5]},"uFrequency":{"value":3.5,"range":[0,10]}},gooey:true});
document
  .querySelector("#right-nav .ri-menu-line")
  .addEventListener("click", function () {
    document.querySelector(".upar-menu").style.top = "0%";
    document.querySelector(".upar-menu .ri-close-fill").style.display =
      "initial";
    document.querySelector("#cntr-nav .ri-menu-line").style.display = "none";
  });

document
  .querySelector(".upar-menu .ri-close-fill")
  .addEventListener("click", function () {
    document.querySelector(".upar-menu").style.top = "-100%";
    document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
    document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
  });