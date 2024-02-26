
gsap.from(".nav>img , .nav>h2",{
  y:-100,
  stagger:0.5,
  duration:0.7
})

gsap.from(".page1>img",{
  opacity:0,
  duration:3,
  delay:0.9
  
})
gsap.from(".right>img , .right>h1 , .right>p , .btn>button",{
  x:100,
  delay:0.7,
  opacity:0,
  duration :1,
  stagger:0.8
})

gsap.from(".page2 > img",{
  x:100,
  duration:1,
  opacity:0,
  scrollTrigger:{
     trigger:".page2>img",
     scroller:"body",
    // markers:true,
    start:"top 30%"
   }
})

gsap.from(".page2>.main-box>h1, .page2>.main-box>p , .page2>.main-box>span",{
  y:-100,
  stagger:0.5,
  duration:0.3,
  opacity:0,
  scrollTrigger:{
    trigger:".page2>.main-box>h1 , .main-box>p , .main-box>span ",
    scroller:"body",
    // markers:true,
    start:"top 30%"

  }
})
