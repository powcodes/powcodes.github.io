
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
/*******************************************/
//注入内容到首页 site-info  site-title site-subtitle
(function(){
    var site_info=document.querySelector("#site-info");
    if(site_info){
        var site_img=document.createElement("div");
        site_img.id="site-img";
        site_img.className="is-center";
        site_img.innerHTML="<img class='' src='/static/images/icon/handsome-512x512.png' title='我的帅照h~_~h'/>";
        var site_title=document.querySelector("#site-info #site-title");
        site_title.innerHTML="小小赵の个人博客";
        site_info.insertBefore(site_img,site_title);
        var site_subtitle=document.querySelector("#site-info #site-subtitle");
        site_subtitle.innerHTML="每个不曾起舞的日子 都是对生命的辜负";
        var site_description=document.createElement("div");
        site_description.id="site-description";
        site_description.className="is-center";
        site_description.innerHTML=" <span class='desc learn'>博学之</span> <span class='desc question'>审问之</span> <span class='desc think'>慎思之</span> <span class='desc discern'>明辨之</span> <span class='desc act'>笃行之</span> ";
        site_info.appendChild(site_description);
        var hr=document.createElement("hr");
        site_info.insertBefore(hr,site_subtitle);
        var site_button=document.createElement("button");
        var site_button=document.createElement("div");
        site_button.id="site_button";
        site_button.className="is-center";
        site_button.innerHTML="<button class='border-btn'> 了解我>> </button> ";
        site_info.appendChild(site_button);
    }
})();

/******************************/
//自定义首页页面公告
(function(){
    //判断是否是首页
    if(location.href.endsWith('/')){
        $("#recent-posts").prepend("<div class='recent-post-item announcement'>"+
                                "<i class='fas fa-bullhorn '></i>自定义公告内容</div>"); 
    }
})();