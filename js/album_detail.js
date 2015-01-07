 $(document).ready(function(){
     // 初始化時,將所有的子元素的存在抹滅
     $(".wrapper_off").addClass("off");
     
     
     // 點專輯圖 -> 顯現專輯詳細資料
     $(".album_normal").click(function(){
         $(".wrapper_off").toggleClass("wrapper",true);
         $(".album_form_off").toggleClass("album_form",false);
     });
     $(".album_fin").click(function(){
         $(".wrapper_off").toggleClass("wrapper",true);
         $(".album_form_off").toggleClass("album_form",false);
     });
     
     // 點右上角X -> 關閉專輯詳細資料
     $(".close").click(function(){
         $(".wrapper_off").toggleClass("wrapper",false);
     });
});