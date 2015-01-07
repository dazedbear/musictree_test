 $(document).ready(function(){
                
        /*--------      這邊整合時要一起複製，用來顯現與消失album_form的機制      --------*/
                // 初始化時,將所有的子元素的存在抹滅
                $(".album_form_off").addClass("off");
     
                // 滑鼠移入果子,顯現form
                $("#fruit").mouseover(function(){
                    $(".album_form_off").removeClass("off");
                    $(".album_form_off").css('left',event.clientX);
                    $(".album_form_off").css('top',event.clientY);
                    $(".album_form_off").toggleClass("album_form",true);
                });
                
                // 滑鼠移出form,form消失 (這邊使用mouseenter/mouseleave)
                $(".album_list").mouseleave(function(){
                    $(".album_form_off").toggleClass("album_form",false);
                    $(".album_form_off").addClass("off");
                });
                
                
               
        /*--------      這邊的jquery只是用來測試換album_normal和album_fin的背景圖      -------*/

                $("#reset").click(function reset_pic_src() {
                        
                    window.alert("reset_pic_src");
                    $(".album_normal").css({
                        background: "url('img/13.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    });
                    
                    $(".album_fin").css({
                        background: "url('img/法蘭黛樂團_sq.jpg')",
                        backgroundSize: "contain",
                        backgroundPosition: "center"
                    });
                        
                });
                
});