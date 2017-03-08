<template>
    <div id="home">
        <div id="city">
            <span>{{cityname}}</span>
            <span id="change-city" @click="changCity">切换</span>
            <cityList></cityList>
        </div>
        <mt-search id="search" v-model="value" cancel-text="取消" placeholder="搜索">
        </mt-search>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">option A</mt-tab-item>
            <mt-tab-item id="2">option B</mt-tab-item>
            <mt-tab-item id="3">option C</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :title="'content ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
var cityList = require('./cityList.vue');
export default {
    name: 'home',
    components: {
        'cityList': cityList
    },
    data() {
        return {
            value: "",
            selected: "1",
            cityname: "上海"
        }
    },
    methods: {
        //去详情页
        toWork: function(event) {
            this.$router.push('/detail')
        },

        //定位
        getLocation: function() {
            var self = this;
            navigator.geolocation.getCurrentPosition(function(position) {
                var lat = position.coords.latitude;
                var lon = position.coords.longitude;
                var point = new BMap.Point(lon, lat); // 创建坐标点
                // 根据坐标得到地址描述
                var myGeo = new BMap.Geocoder();
                myGeo.getLocation(point, function(result) {
                    var address = result.addressComponents.province + "/" + result.addressComponents.city + "/" + result.addressComponents.district;
                    console.log(JSON.stringify(result.addressComponents));
                    self.cityname = address;
                });
            });
        },

        //切换城市
        changCity: function() {
            //this.$router.push('/cityList');
        }

    },
    mounted: function() {
        this.getLocation();
    }
}
</script>
<style lang="scss">
#home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#search {
    margin-top: 10px;
    height: 20%
}

#city {}

#change-city {
    float: right;
}
</style>
