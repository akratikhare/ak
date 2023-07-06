var tl = gsap.timeline()
tl.from("#nav h3",{
 y:-50,
 duration: 1,
 delay:0.5,
 opacity: 0,
 stagger:0.25,

})
tl.from("#main h1",{
    x:-650,
    duration: 1,
    delay:1,
    opacity: 0,
    stagger:0.25,
   
   })
   tl.from(" img",{
    x:700,
   opacity: 0,
    stagger:0.9,
    rotate:45,
    y:100
   })
   
   tl.from("#img3",{
    rotate:360,
    duration:1,
    repeat:-1,
   })
   
   tl.from("#main p1",{
    x:650,
    duration: 2,
    delay:1,
    opacity:0,
    stagger:0.25
   })
  
  
  
   tl.from("#main button",{
    y:100,
    rotate:45,
    duration:2,
    opacity:0,
    
   })