!function(){var o=/backToTop_state_visible/;window.addEventListener("scroll",function(){var e=document.querySelector(".backToTop");document.body.scrollTop>200&&!o.test(e.className)?e.className+=" backToTop_state_visible":document.body.scrollTop<=200&&o.test(e.className)&&(e.className="backToTop")})}();