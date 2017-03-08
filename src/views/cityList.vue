<template id="address-template">
    <div v-show="isShow">
        <select v-model='province'>
            <option value="">请选择</option>
            <option v-for="item in provinces" :value="item">{{item}}</option>
        </select>
        <select v-model='city'>
            <option value="">请选择</option>
            <option v-for="item in citys" :value="item">{{item}}</option>
        </select>
        <select v-model='county'>
            <option value="">请选择</option>
            <option v-for="item in countys" :value="item">{{item}}</option>
        </select>
    </div>
</template>
<script>
export default {
    template: "#address-template",
    props: {

        province: {
            type: String,
            default: ''
        },
        city: {
            type: String,
            default: ''
        },
        county: {
            type: String,
            default: ''
        }
    },
    data: function() {

        return {
            isShow: true,
            addressData: null,
            cityObj: {},
            countyObj: {}
        }
    },

    mounted: function() {
        var _this = this;
        var cityListURL = "http://www.gucunzhaopin.com/address.ashx";
        this.$http.get(cityListURL).then(function(data) {
            //var json = data.body;
            console.log(data.body);
            _this.addressData = data.body;
        }, function(response) {
            console.log(response);
        })
    },
    // var that = this;

    //     this.addressData = {
    //         '湖南': {
    //             '长沙': {
    //                 "开福区": {},
    //                 "岳麓区": {}
    //             },
    //             '怀化': {
    //                 '沅陵': {},
    //                 '溆浦': {}
    //             }
    //         },
    //         '广东': {
    //             '广州': {
    //                 '天河区': {},
    //                 '越秀区': {}
    //             },
    //             '深圳': {
    //                 '宝安': {},
    //                 '南山': {}
    //             }
    //         }
    //     }

    watch: {
        province: function(val, oldval) {
            if (val !== oldval) {
                this.city = ''
            }
        },
        city: function(val, oldval) {
            if (val !== oldval) {
                this.county = ''
            }
        }
    },
    computed: {
        provinces: function() {
            if (!this.addressData) return

            var c = []
            _.each(this.addressData,function(item,index){
                console.log(item);
                c.push(item["name"]);
            });
            return c
        },
        citys: function() {
            var _this = this;
            if (!this.addressData || !this.province)
                return

            var c = []
            this.cityObj = _.find(this.addressData, function(item) {
                return item["name"] == _this.province;
            });
            _.each(this.cityObj["sub"],function(item,index){
                console.log(item);
                c.push(item["name"]);
            });
            
            return c
        },
        countys: function() {
            var _this = this;
            if (!this.addressData || !this.city)
                return

            var c = []
            this.countyObj = _.find(this.cityObj["sub"], function(item) {
                return item["name"] == _this.city;
            });
            _.each(this.countyObj["sub"],function(item,index){
                console.log(item);
                c.push(item["name"]);
            });
           
            return c
        }
    }
}
</script>
