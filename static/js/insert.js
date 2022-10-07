
/*********************************/
//在博客标题前面加上图标Home
(function(){
    var site_name=document.querySelector("#site-name");
    //在sitename的前面加上<i class="fas fa-home"></i>
    var old_content=site_name.innerHTML;
    var new_content="<i class='fas fa-home'></i>"+old_content;
    site_name.innerHTML=new_content;
})();

/*********************************/
//修改下拉条的图标
(function(){
    var icon=document.querySelector("#scroll-down > i");
    if(icon!=null){
        icon.className="fas fa-angle-double-down scroll-down-effects";
    }
})();