<template>
    <div class="pos">
        <div>
            <el-row>
                <el-col :span="7" class="pos-order" id="order-list">

                    <el-tabs>
                        <el-tab-pane label="点餐">
                            <el-table :data="tableData" border style="width: 100%">

                                <el-table-column prop="goodsName" label="商品"></el-table-column>
                                <el-table-column prop="count" label="量" width="50"></el-table-column>
                                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                                <el-table-column label="操作" width="100" fixed="right">
                                    <template slot-scope="scope">
                                        <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>

                                    </template>
                                </el-table-column>
                            </el-table>

                            <div class="totalDiv">
                                <small>数量：</small>
                                <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                                <small>总计：</small>
                                <strong>{{totalMoney}}</strong> 元
                            </div>

                            <div class="order-btn">

                                <el-button type="warning">挂单</el-button>
                                <el-button type="danger" @click="delAllGoods()">删除</el-button>
                                <el-button type="success" @click="checkout()"> 结账</el-button>

                            </div>

                            <div>slfjs</div>
                            <div>
                                <input type="text" class="phoneMember" v-model="phoneValue">
                                <button @click="phoneSubmit">点击</button>
                                <hr>
                              <div class="top_btn" @click="changeLangEvent">中文</div>
                              <span v-text="$t('lang .homeOverview')"></span>
                              <span>{{$t('lang.homeOverview')}}</span>
                              <hr>
                              <span class="el-dropdown-link">{{navCompany}}</span>

                              <div>{{ $t('header1') }}</div>
                                <hr>
                            </div>
                            <div>
                                <!-- <el-steps :active="active" :finish-status="finish" :align-center="true"> -->
      <!-- <el-step title="已申请" class="step1"></el-step>
      <el-step title="正在审核"></el-step>
      <el-step title="申请成功"></el-step> -->
      <!-- <el-step v-for="item in steps" :title="item.title" :key="item.id"></el-step>
    </el-steps> -->
                            </div>
                            <div>
                                <select name="" id="" v-model="laowangSelect">
                                    <option value="1" >laowang1</option>
                                    <option value="2" >laowang2</option>
                                </select>
                                {{laowangSelect}}
                            </div>
                        </el-tab-pane>

                        <el-tab-pane label="挂单">
                            挂单
                        </el-tab-pane>
                        <el-tab-pane label="外卖">
                            外卖
                        </el-tab-pane>

                    </el-tabs>

                </el-col>

                <!--商品展示-->
                <el-col :span="17">
                    <div class="often-goods">
                        <div class="title">常用商品</div>
                        <div class="often-goods-list">

                            <ul>
                                <li v-for="goods in oftenGoods" @click="addOrderList(goods)">
                                    <span>{{goods.goodsName}}</span>
                                    <span class="o-price">￥{{goods.price}}元</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div class="goods-type">

                        <el-tabs>
                            <el-tab-pane label="汉堡">
                                <ul class='cookList'>

                                    <li v-for="goods in type0Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>

                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="小食">
                                <ul class='cookList'>
                                    <li v-for="goods in type1Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="饮料">
                                <ul class='cookList'>
                                    <li v-for="goods in type2Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>
                            <el-tab-pane label="套餐">
                                <ul class='cookList'>
                                    <li v-for="goods in type3Goods" @click="addOrderList(goods)">
                                        <span class="foodImg">
                                            <img :src="goods.goodsImg" width="100%">
                                        </span>
                                        <span class="foodName">{{goods.goodsName}}</span>
                                        <span class="foodPrice">￥{{goods.price}}元</span>
                                    </li>
                                </ul>
                            </el-tab-pane>

                        </el-tabs>
                    </div>
                    
                    <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一0807</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import goo from 'google-libphonenumber'
export default {
    name: 'Pos',
    mounted: function () {
        var orderHeight = document.body.clientHeight;
        document.getElementById("order-list").style.height = orderHeight + 'px';
    },
    created() {
        //读取常用商品列表
        axios.get('http://jspang.com/DemoApi/oftenGoods.php')
            .then(response => {
                //console.log(response);
                this.oftenGoods = response.data;
            })
            .catch(error => {
                console.log(error);
                alert('网络错误，不能访问');
            })
        //读取分类商品列表
        axios.get('http://jspang.com/DemoApi/typeGoods.php')
            .then(response => {
                //console.log(response);
                //this.oftenGoods=response.data;
                this.type0Goods = response.data[0];
                this.type1Goods = response.data[1];
                this.type2Goods = response.data[2];
                this.type3Goods = response.data[3];

            })
            .catch(error => {
                console.log(error);
                alert('网络错误，不能访问');
            })
          
    },
    data() {
        const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
        return {
             tableData: Array(20).fill(item),
            tableData: [], //订单列表的值
            oftenGoods: [],
            type0Goods: [],
            type1Goods: [],
            type2Goods: [],
            type3Goods: [],
            totalMoney: 0, //订单总价格
            totalCount: 0, //订单商品总数量
            phoneValue: '',
            steps: [{title: '已申请'}, {title: '正在审核'}, {title: '申请成功'}],
            laowangSelect: '',
        }
    },
  computed:{
    navCompany:function(){
      if(this.nav_company){
        let str = 'lang'+this.nav_company;
        return this.$t(str);
      }
    }
  },
    methods: {
      getTitle(title){
        let str = 'lang.'+title;
        return this.$t(str);
      },
      changeLangEvent() {
        console.log('changeLangEvent');
        this.$confirm('确定切换语言吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'success'
        }).then(() => {
          if ( this.$i18n.locale === 'zh-CN' ) {
            this.$i18n.locale = 'en';//关键语句
            console.log('en-US')
          }else {
            this.$i18n.locale = 'zh-CN';//关键语句
            console.log('zh-CN')
          }
        }).catch(() => {
          console.log('catch');
          this.$message({
            type: 'info',
          });
        });
      },
        //添加订单列表的方法
        addOrderList(goods) {
            //console.log(goods);
            this.totalCount = 0; //汇总数量清0
            this.totalMoney = 0;
            let isHave = false;
            //判断是否这个商品已经存在于订单列表
            for (let i = 0; i < this.tableData.length; i++) {
                console.log(this.tableData[i].goodsId);
                if (this.tableData[i].goodsId == goods.goodsId) {

                    isHave = true; //存在

                }
            }
            //根据isHave的值判断订单列表中是否已经有此商品
            if (isHave) {
                //存在就进行数量添加
                let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
                arr[0].count++;
                //console.log(arr);
            } else {
                //不存在就推入数组
                let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 };
                this.tableData.push(newGoods);

            }

            this.getAllMoney();
        },
        //删除单个商品
        delSingleGoods(goods) {
            console.log(goods);
            this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            this.getAllMoney();

        },
        //删除所有商品
        delAllGoods() {
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;
        },
        //汇总数量和金额
        getAllMoney() {
            this.totalCount = 0;
            this.totalMoney = 0;
            if (this.tableData) {
                this.tableData.forEach((element) => {
                    this.totalCount += element.count;
                    this.totalMoney = this.totalMoney + (element.price * element.count);
                });
            }
        },
        //结账方法模拟
        checkout() {
            if (this.totalCount!=0) {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
                this.$message({
                    message: '结账成功，感谢你又为店里出了一份力!',
                    type: 'success'
                });

            }else{
                this.$message.error('不能空结。老板了解你急切的心情！');

            }

        },

        phoneSubmit(){
            var PNF = goo.PhoneNumberFormat;

            // Get an instance of `PhoneNumberUtil`.
            var phoneUtil = goo.PhoneNumberUtil.getInstance();

            // Parse number with country code.
            // var phoneNumber = phoneUtil.parse('202-456-1414', 'US');
            var phoneNumber = phoneUtil.parse(this.phoneValue, 'CN');

            // Print number in the international format.
            let filterPhone = phoneUtil.format(phoneNumber, PNF.INTERNATIONAL)
            console.log(filterPhone)
            // console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL))
        }


    }
}

// var PNF = require('google-libphonenumber').PhoneNumberFormat;

// // Get an instance of `PhoneNumberUtil`.
// var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

// // Parse number with country code.
// // var phoneNumber = phoneUtil.parse('202-456-1414', 'US');
// var phoneNumber = phoneUtil.parse('132*1569*3218', 'CN');

// // Print number in the international format.
// console.log(phoneUtil.format(phoneNumber, PNF.INTERNATIONAL))
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
.pos {
    font-size: 12px;
}

.pos-order {

    background-color: #F9FAFC;
    border-right: 1px solid #C0CCDA;
}

.order-btn {
    margin-top: 10px;
    text-align: center;
}

.title {
    height: 20px;
    border-bottom: 1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding: 10px;
}

.often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    cursor: pointer;
}

.goods-type {
    clear: both;
}

.o-price {
    color: #58B7FF;
}

.often-goods-list {
    border-bottom: 1px solid #C0CCDA;
    height: auto;
    overflow: hidden;
    padding-bottom: 10px;
    background-color: #F9FAFC;
}

.cookList li {
    list-style: none;
    width: 23%;
    border: 1px solid #E5E9F2;
    height: auot;
    overflow: hidden;
    background-color: #fff;
    padding: 2px;
    float: left;
    margin: 2px;
    cursor: pointer;
}

.cookList li span {

    display: block;
    float: left;
}

.foodImg {
    width: 40%;
}

.foodName {
    font-size: 18px;
    padding-left: 10px;
    color: brown;
}

.foodPrice {
    font-size: 16px;
    padding-left: 10px;
    padding-top: 10px;
}

.totalDiv {
    height: auot;
    overflow: hidden;
    text-align: right;
    font-size: 16px;
    background-color: #fff;
    border-bottom: 1px solid #E5E9F2;
    padding: 10px;
}
</style>
