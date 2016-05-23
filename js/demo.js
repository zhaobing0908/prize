/// <reference path="_references.js" />


var raNum = 0;
var i = 0;
$(function () {
    $("#zp").click(function () {//当点击转盘的时候发生了什么事件
        i++;
        if (i >= 4)
        {
            alert("只有三次抽奖机会");
            return;
        }
        raNum = Math.random() * 360;//产生0~360之间的随机数作为旋转的度数
        if ((202.5 < raNum && raNum <= 247.5) || (292.5 < raNum && raNum <= 337.5) || (247.5 < raNum && raNum <= 292.5))
        {
            raNum = Math.random() * 22.5;
        }
        $(this).rotate({
            duration: 3000,//表示旋转所需的时间，单位是毫秒
            angle: 0,//开始的度数
            animateTo: raNum+1440,//旋转的度数
            callback: function () {
                A();
            }
        });
    });
});

function A() {
    if (0 < raNum && raNum <= 22.5) {
        alert("谢谢参与，您木有中奖");
        return;
    }
    else if (22.5 < raNum && raNum <= 67.5) {
        alert("恭喜，您中了5元代金券");
        return;
    }
    else if (67.5 < raNum && raNum <= 112.5) {
        alert("恭喜，您中了1元代金券");
        return;
    }
    else if (112.5 < raNum && raNum <= 157.5) {
        alert("恭喜，您中了10元代金券");
        return;
    }
    else if (157.5 < raNum && raNum <= 202.5) {
        alert("谢谢参与，您木有中奖");
        return;
    }
    else if (202.5 < raNum && raNum <= 247.5) {
        alert("恭喜，您中了20元代金券");
        return;
    }
    else if (247.5 < raNum && raNum <= 292.5) {
        alert("恭喜，您中了50元代金券");
        return;
    }
    else if (292.5 < raNum && raNum <= 337.5) {
        alert("恭喜，您中了30元代金券");
        return;
    }
    else {
        alert("谢谢参与，您木有中奖");
        return;
    }
}