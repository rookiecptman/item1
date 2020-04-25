<template>
  <div class="index">
    <div class="header">
      <router-link to="/login">登录</router-link>
    </div>
    <div class="nav">
        <div class="nav_1">
            <div class="logo">logo</div>
            <div class="nav_1_1">一</div>
            <div class="nav_1_2">二</div>
            <div class="nav_1_3">三</div>
            <div class="nav_1_4">四</div>
            <div class="nav_1_5">五</div>
            <div class="nav_1_6">六</div>
        </div>
    </div>

    <div class="focus">
        <div class="focus_1">
            <div class="focus_1_1">主题市场</div>
            <div class="focus_1_2">广告</div>
            <div class="news">淘宝头条</div>
        </div>

        <div class="focus_2">账户</div>
    </div>

    <div class="content">
        <div class="column_1">
            <div class="column_1_1">有好货</div>
            <div class="column_1_2">爱逛街</div>
        </div>

        <div class="column_2">
            <div class="column_2_1">淘抢购</div>
            <div class="column_2_1">广告</div>
        </div>

        <div class="column_3">
            <div class="column_3_1">每日好店</div>
            <div class="column_3_2">淘宝直播</div>
        </div>
    </div>

    <div class="content1">
        <div class="column_4">
            <div class="column_4_1">时尚爆料王</div>
            <div class="column_4_2">今新品</div>
        </div>
        <div class="column_5">
            <div class="column_5_1">品质生活</div>
            <div class="column_5_2">特色玩味控</div>
        </div>
        <div class="column_6">实惠专业户</div>
        <div class="column_7">热卖单品</div>
    </div>

    <div class="content2">猜你喜欢</div>

    <div class="footer">页脚</div>
  </div>
</template>

<style>
*{
    margin:0;
    padding: 0;
}
body{
    background-color: azure;
}
.header{
    margin: 0 auto;
    width: 100%;
    height: 40px;
    background-color: lightpink;
}
.nav{
    margin: 0 auto;
    width: 1150px;
    height: 100px;
    background-color: #333333;
}
.nav_1{
    margin: 0 auto;
    width: 100%;
    height: 100%;
}
.logo{
    float: left;
    width: 250px;
    height: 100%;
    background-color: aquamarine;
}
.nav_1_1{
    float: left;
    width: 150px;
    height: 100%;
    background-color: palegoldenrod;
}
.nav_1_2{
    float: left;
    width: 150px;
    height: 100%;
    background-color: paleturquoise;
}
.nav_1_3{
    float: left;
    width: 150px;
    height: 100%;
    background-color: palegreen;
}

.nav_1_4{
    float: left;
    width: 150px;
    height: 100%;
    background-color: paleturquoise;
}
.nav_1_5{
    float: left;
    width: 150px;
    height: 100%;
    background-color: #999999;
}
.nav_1_6{
     float: left;
     width: 150px;
     height: 100%;
     background-color: palevioletred;
 }



.focus {
    margin: 0 auto;
    width: 1150px;
    height: 770px;
    background-color: white;
}
.focus_1{
    float: left;
    margin: 0 auto;
    width: 850px;
    height: 100%;
    background-color: white;
}
.focus_1_1{
    margin :0 auto;
    float: left;
    width: 250px;
    height: 500px;
    background-color: antiquewhite;
}
.focus_1_2{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    width: 580px;
    height: 490px;
    background-color: aliceblue;
}
.news {
    float: left;
    margin-top: 10px;
    width: 840px;
    height: 260px;
    background-color: lightpink;
}
.focus_2{
    float: left;
    margin: 0 auto;
    margin-top: 10px;

    width: 300px;
    height: 760px;
    background-color: lightskyblue;
 }


.content{
    margin: 0 auto;
    width: 1150px;
    height: 1260px;
    background-color: white;
}

.column_1{
    margin: 0 auto;
    width: 100%;
    height: 500px;
}
.column_1_1{
    float: left;
    margin-top: 10px;
    width: 570px;
    height: 490px;
    background-color: paleturquoise;
}

.column_1_2{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    width: 570px;
    height: 490px;
    background-color: paleturquoise;
}



.column_2{
    margin: 0 auto;
    width: 100%;
    height: 250px;
}
.column_2_1{
    margin-top: 10px;
    width: 100%;
    height: 190px;
    background-color: paleturquoise;
}

.column_2_2{
    float: left;
    margin-top: 10px;
    width: 570px;
    height: 40px;
    background-color: paleturquoise;
}



.column_3{
    margin: 0 auto;
    width: 100%;
    height: 500px;
    background-color: white;
}
.column_3_1{
    float: left;
    margin-top: 10px;
    width: 570px;
    height: 490px;
    background-color: lightcoral;
}
.column_3_2{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    width: 570px;
    height: 490px;
    background-color: pink;
}



.content1{
    margin :0 auto;
    width: 1150px;
    height: 1600px;
    background-color: white;
}

.column_4{
    margin: 0 auto;
    width: 1150px;
    height: 200px;
}
.column_4_1{
    float: left;
    margin-top: 10px;
    width: 740px;
    height: 190px;
    background-color: pink;
}
.column_4_2 {
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    width: 400px;
    height: 190px;
    background-color: pink;
}

.column_5{
    margin:0 auto;
    width: 1150px;
    height: 500px;
}
.column_5_1{
    float: left;
    margin-top: 10px;
    width: 570px;
    height: 490px;
    background-color: lightcyan;
}


.column_5_2{
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    width: 570px;
    height: 490px;
    background-color: lightcyan;
}

.column_6{
    margin: 0 auto;
    margin-top: 10px;
    width: 1150px;
    height: 190px;
    background-color: darkseagreen;
}
.column_7{
    margin: 0 auto;
    margin-top: 10px;
    width: 1150px;
    height: 690px;
    background-color:lightsteelblue;
}


.content2{
    margin: 0 auto;
    margin-top: 10px;
    width: 1150px;
    height: 300px;
    background-color: darkseagreen;

}



.footer{
    margin: 0 auto;
    width: 1150px;
    height: 100px;
    background-color: lightsteelblue;
}

</style>



<script>

export default {
  name: 'Home'
}
</script>
