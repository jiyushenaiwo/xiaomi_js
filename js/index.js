window.onload=function () {
    //层级轮播图声明
    let img=document.querySelectorAll(".banner .loaded .img img");
    let dost=document.querySelectorAll(".banner .loaded .img ul li");
    let banner=document.querySelectorAll(".banner")[0];
    console.log(img,dost,banner);
//内容1声明
    let img1=document.querySelectorAll(".neirong_xb .box");
    let dots1=document.querySelectorAll(".neirongxiaodian");
    let banner1=document.querySelectorAll(".neirong_xb")[0];
    let left1=document.querySelectorAll(".neirong_xb .left")[0];
    let right1=document.querySelectorAll(".neirong_xb .right")[0];
    let widths1=parseInt(getComputedStyle(img1[0],null).width);
//内容2声明
    let img2=document.querySelectorAll(".neirong_xb_xian .box");
    let dots2=document.querySelectorAll(".neirongxiaodian1");
    let banner2=document.querySelectorAll(".neirong_xb_xian")[0];
    let left2=document.querySelectorAll(".neirong_xb_xian .left")[0];
    let right2=document.querySelectorAll(".neirong_xb_xian .right")[0];
    let widths2=parseInt(getComputedStyle(img2[0],null).width);
//内容3声明
    let img3=document.querySelectorAll(".neirong_xb_xian2 .box");
    let dots3=document.querySelectorAll(".neirongxiaodian2");
    let banner3=document.querySelectorAll(".neirong_xb_xian2")[0];
    let left3=document.querySelectorAll(".neirong_xb_xian2 .left")[0];
    let right3=document.querySelectorAll(".neirong_xb_xian2 .right")[0];
    let widths3=parseInt(getComputedStyle(img3[0],null).width);
//内容4声明
    let img4=document.querySelectorAll(".neirong_xb2_xian3 .box");
    let dots4=document.querySelectorAll(".neirongxiaodian3");
    let banner4=document.querySelectorAll(".neirong_xb2_xian3")[0];
    let left4=document.querySelectorAll(".neirong_xb2_xian3 .left")[0];
    let right4=document.querySelectorAll(".neirong_xb2_xian3 .right")[0];
    let widths4=parseInt(getComputedStyle(img4[0],null).width);
//推荐效果声明
    let milist=document.querySelectorAll(".star_bottom .box")[0];
    let w=parseInt(getComputedStyle(milist,null).width)/3;
    let rightt=document.querySelectorAll(".star_btn1");
    let leftt=document.querySelectorAll(".star_btn");
//小米闪购效果声明
    let milist1=document.querySelectorAll(".rush_metter_box")[0];
    let w1=parseInt(getComputedStyle(milist1,null).width)/3;
    let rightt1=document.querySelectorAll(".rush_btn1");
    let leftt1=document.querySelectorAll(".rush_btn");
//购物车
    let car=document.getElementsByClassName("head_box1")[0]
    let carbox=document.getElementsByClassName("head_box")[0]
    car.onmouseenter=function () {
        carbox.style.height="98px";
        carbox.style.boxShadow="0 3px 1px 1px rgba(0,0,0,0.4)";
    }
    car.onmouseleave=function () {
        carbox.style.height=0;
        carbox.style.boxShadow="none";
    }

//侧导航
    let lis=banner.getElementsByClassName("list-box");
    let bannerNav=document.getElementsByClassName("banner_list_box");
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseenter=function () {
            bannerNav[i].style.display="block";
        }
        lis[i].onmouseleave=function () {
            bannerNav[i].style.display="none";
        }
    }
//家电
    function f(name) {
        let span=document.querySelectorAll(".dapei_wenzi span");
        let jiadianhe=document.querySelectorAll(".box_jiadian ");
        jiadianhe[0].style.display="block";
        span[0].className=("xiaoguochumo")
        for(let i=0;i<span.length;i++){
            span[i].onmouseenter=function () {
                for(let j=0;j<span.length;j++){
                    jiadianhe[j].style.display="none";
                    span[j].className=(".dapei_wenzi span");
                }
                jiadianhe[i].style.display="block";
                span[i].className=("xiaoguochumo")
            }
        }
    }
    let jiadian=document.querySelector(".dapei_wenzi");
    f(jiadian);

//导航
    let lis1=document.querySelectorAll(".title_a");
    let bannerNav1=document.querySelectorAll(".nav-hover");
    for(let i=0;i<lis1.length;i++){
        lis1[i].onmouseenter=function () {
            bannerNav1[i].style.height="228px";
        }
        lis1[i].onmouseleave=function () {
            bannerNav1[i].style.height="0";
        }
    }
//视频移入效果
    let bigbox=document.querySelectorAll(".shipin_bottom");
    let sambox=document.querySelectorAll(".shipin_bottom span");
    for (let i=0;i<bigbox.length;i++){
        bigbox[i].onmouseenter=function(){
            sambox[i].style.border="0";
            sambox[i].style.background="orangered";
        }
        bigbox[i].onmouseleave=function(){
            sambox[i].style.border=" 2px solid #fff";
            sambox[i].style.background="rgba(0, 0, 0, 0.6)";
        }
    }
function Recommend(milist,w,right,left) {
    let times=0;
    right[0].onclick=function () {
        times++;
        if (times==3){
            times=2;
        }
        console.log(times);
        milist.style.transform=`translate(${(-w*times)}px)`;
    }
    left[0].onclick=function () {
        times--;
        if (times==-1){
            times=0;
        }
        console.log(times);
        milist.style.transform=`translate(${(-w*times)}px)`;
    }
}    

function center(img,dots,banner,left,right,widths) {
    img[0].style.left=0;
    dots[0].classList.add("spotEffect");
    let now=0;
    let next=0;
    //开关：控制快速点击时图片会快速轮播的现象
    //默认开关是打开的，flag=true，可以点击箭头
    let flag=true;

    // let t=setInterval(move,2000);
    function move() {//自右向左
        next++;
        if (next==img.length){
            next=0;
        }
        img[next].style.left=widths+"px";
        animate(img[now],{left:-widths});
        animate(img[next],{left:0},function() {
            flag=true
        });
        dots[now].classList.remove("spotEffect");
        dots[next].classList.add("spotEffect");
        now=next;
    }

    function movel() {//自左向右
        next--;
        if(next<0){
            next=img.length-1;
        }
        img[next].style.left=-widths+"px";
        animate(img[now],{left:widths});
        animate(img[next],{left:0},function() {
            flag=true
        });
        dots[now].classList.remove("spotEffect");
        dots[next].classList.add("spotEffect");
        now=next;
    }
    //开关关闭的时候不要点击
    left.onclick=function () {//左移
        if(!flag){
            return;
        }
        flag=false;
        movel()
    }
    right.onclick=function () {//右移
        if (!flag){
            return
        }
        flag=false;
        move()
    }
    // banner.onmouseenter=function(){
    //     clearInterval(t);
    // }
    // banner.onmouseout=function(){
    //     t=setInterval(move,2000);
    // }
    //轮播点
    for (let i=0;i<dots.length;i++){
        dots[i].onmouseenter=function(){
            for (let j=0;j<dots.length;j++){
                dots[j].classList.remove("spotEffect");
                // img[j].style.zIndex=1;
                img[j].style.left=-widths+"px";
                // animate(img[j+1],{left:0});
            }
            dots[i].classList.add("spotEffect");
            // img[i].style.zIndex=2;
            // animate(img[i+1],{left:widths});
            animate(img[i],{left:0});
        }
    }
    // window.onblur=function () {
    //     clearInterval(t);
    // }
    // window.onfocus=function () {
    //     t=setInterval(move,2000);
    // }
}

function HierarchicalChart(img,dost,banner) {//层级轮播图
img[0].style.zIndex=2;
dost[0].classList.add("active");
//轮播
for (let i=0;i<dost.length;i++){
    dost[i].onmouseenter=function () {
        for (let j=0;j<dost.length;j++){
            dost[j].classList.remove("active");
            img[j].style.zIndex=1;
        }
        dost[i].classList.add("active");
        img[i].style.zIndex=2;
    }
}
//自动轮播
let t=setInterval(move,2000);//设置时间

    let num=0;
    function move() {

        num++;
        if (num==5){
            num=0;
        }
        for (let j=0;j<dost.length;j++){
            dost[j].classList.remove("active");
            img[j].style.zIndex=1;
        }
        dost[num].classList.add("active");
        img[num].style.zIndex=2;
        // num=j;
    }
banner.onmouseenter=function () {
    clearInterval(t);
}
banner.onmouseleave=function(){
    t=setInterval(move,2000);
}
}

    HierarchicalChart(img,dost,banner);//调用层级轮播图
    center(img1,dots1,banner1,left1,right1,widths1);//内容1
    center(img2,dots2,banner2,left2,right2,widths2);//内容2
    center(img3,dots3,banner3,left3,right3,widths3);//内容3
    center(img4,dots4,banner4,left4,right4,widths4);//内容4
    Recommend(milist,w,rightt,leftt);
    Recommend(milist1,w1,rightt1,leftt1);
    console.log(w1);
    console.log(milist1);
}