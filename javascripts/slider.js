var SliderShow={initialize:function(){this.speed=3,console.log(-(parseInt(Element.getStyle($("slides"),"width"))-parseInt(Element.getStyle($("slider"),"width"))-this.speed)),$A($("slides").getElementsByTagName("li")).each(function(e){Event.observe(e,"mouseover",SliderShow.fadeIn.bindAsEventListener(this)),Event.observe(e,"mouseout",SliderShow.fadeOut.bindAsEventListener(this))}),Event.observe($("slider"),"mouseout",function(){this.stop()}.bind(this)),Event.observe($("sliderLeft"),"mouseover",function(){this.cleanFades(),this.moveRight()}.bind(this)),Event.observe($("sliderRight"),"mouseover",function(){this.cleanFades(),this.moveLeft()}.bind(this)),this.timer=null},fadeIn:function(e){mask=Event.findElement(e,"li").firstChild,SliderShow.cleanFades(),Effect.Fade(mask,{duration:.3,afterFinish:function(){"none"==Element.getStyle(mask,"display")&&Element.setStyle(mask,{display:"block",opacity:"0.0001"})}}),Event.stop(e)},fadeOut:function(e){mask=Event.findElement(e,"li").firstChild,SliderShow.cleanFades(),Effect.Appear(mask,{duration:.3,to:"0.7",afterFinish:function(){Element.setStyle(mask,{display:"block"}),Element.setOpacity(mask,"0.7"),console.log("gg")}}),"none"==Element.getStyle(mask,"display")&&(Element.setStyle(mask,{display:"block"}),Element.setOpacity(mask,"0.7")),Event.stop(e)},cleanFades:function(){$A($("slides").getElementsByTagName("li")).each(function(e){"none"==Element.getStyle(e.firstChild,"display")&&(Element.setStyle(e.firstChild,{display:"block"}),Element.setOpacity(e.firstChild,"0.7"))})},move1pxLeft:function(){parseInt(Element.getStyle($("slides"),"left"))>=-(parseInt(Element.getStyle($("slides"),"width"))-parseInt(Element.getStyle($("slider"),"width"))-this.speed)?Element.setStyle($("slides"),{left:parseInt(Element.getStyle($("slides"),"left"))-this.speed+"px"}):this.stop()},move1pxRight:function(){parseInt(Element.getStyle($("slides"),"left"))<=-this.speed?Element.setStyle($("slides"),{left:parseInt(Element.getStyle($("slides"),"left"))+this.speed+"px"}):this.stop()},moveLeft:function(){this.stop(),this.timer=setInterval(this.move1pxLeft.bind(this),1)},moveRight:function(){this.stop(),this.timer=setInterval(this.move1pxRight.bind(this),1)},stop:function(){null!=this.timer&&clearInterval(this.timer)}};Event.observe(window,"load",function(e){SliderShow.initialize()});