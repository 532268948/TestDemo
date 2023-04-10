<template>
    <div style="background-color: #f5f5f5;">
        <van-nav-bar style="height: 44px;background-color: #EDEDED;" title="首页" left-arrow>
            <template #left>
                <van-icon name="cross" size="18" color="#333333" />
            </template>
            <template #right>
                <van-icon name="ellipsis" size="18" color="#333333" />
            </template>
        </van-nav-bar>
        <van-search v-model="searchWords" placeholder="搜索" @click="toSearchPage" shape="round" />
        <van-swipe style="height: 114px ;margin: 12px;" :autoplay="3000" lazy-render>
            <van-swipe-item style="border-radius: 10px;overflow: hidden;" v-for="image in banner_images" :key=image>
                <img style="object-fit: cover;display: inline-block;" :src="image" />
            </van-swipe-item>
        </van-swipe>
        <div style="height: 224px;">
            <div style="float:left;width: 50%;">
                <div
                    style="height:224px;margin-left:12px;margin-right:3px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;background-color: #FFFFFF;">
                    <img style="width: 100%;height:45px ;display: block;" :src="today_recommend_goods.cover" />
                    <div style="height:112px ;margin-left: 12px;margin-right: 12px;">
                        <img style="width: 100%; height: 100%;" :src="today_recommend_goods.cover" />
                    </div>
                    <div
                        style="height: 33px;font-size: 13px;color: #333333;text-align: center;line-height: 33px;text-overflow: ellipsis;">
                        {{ today_recommend_goods.title }}</div>
                    <div style="height: 22px;align-content:baseline;text-align: center;">
                        <span style="font-size: 11px;color: #333333;">$</span>
                        <span style="font-size: 16px;color: #333333;">{{ today_recommend_goods.price }}</span>
                        <span style="margin-left: 4px;font-size: 16px;color: #CC1030;">最多赚</span>
                        <span style="font-size: 16px;color: #CC1030;">{{ today_recommend_goods.commision }}</span>
                    </div>
                </div>
            </div>
            <div style="float: left ;;width: 50%;">
                <div
                    style="height:224px;margin-right:12px;margin-left:3px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;background-color: #FFFFFF;">
                    <img style="width: 100%;height:45px ;display: block;" :src="hot_goods.cover" />
                    <div style="height:112px ;margin-left: 12px;margin-right: 12px;">
                        <img style="width: 100%; height: 100%;" :src="hot_goods.cover" />
                    </div>
                    <div
                        style="height: 33px;font-size: 13px;color: #333333;text-align: center;line-height: 33px;text-overflow: ellipsis;">
                        {{ hot_goods.title }}</div>
                    <div style="height: 22px;align-content:baseline;text-align: center;">
                        <span style="font-size: 11px;color: #333333;">$</span>
                        <span style="font-size: 16px;color: #333333;">{{ hot_goods.price }}</span>
                        <span style="margin-left: 4px;font-size: 16px;color: #CC1030;">最多赚</span>
                        <span style="font-size: 16px;color: #CC1030;">{{ hot_goods.commision }}</span>
                    </div>
                </div>
            </div>
        </div>
        <van-tabs background="#F5F5F5" color="#333333" @change="changeTab" swipeable sticky>
            <van-tab v-for="tab in tabs" :title="tab.title">
                <!-- <GoodsList :type="1" /> -->
                <van-list v-model:loading="tabContent.loading" v-model:error="tabContent.load_error"
                    :finished="tabContent.load_finished" finished-text="没有更多了" @load="getGoodsList">
                    <GoodsCard v-for="item in list" :data="item" />
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

// import GoodsList from './goods_list.vue'
import GoodsCard from '../components/goods_card.vue'

export default {
    components: {
        GoodsCard
    },
    data() {
        return {
            searchWords: "",
            banner_images: [
                'https://t7.baidu.com/it/u=2235283139,2108773862&fm=193&f=GIF',
                'https://t7.baidu.com/it/u=3881051708,1318727812&fm=193&f=GIF',
            ],
            today_recommend_goods: {
                cover: 'https://t7.baidu.com/it/u=2235283139,2108773862&fm=193&f=GIF',
                title: "戴森吹飞机 豪华版5风嘴",
                price: "198",
                commision: "20",
            },
            hot_goods: {
                cover: 'https://t7.baidu.com/it/u=3881051708,1318727812&fm=193&f=GIF',
                title: "时尚爆款百搭实用链条包",
                price: "198",
                commision: "20",
            },
            tabs: [{
                title: "第一"
            },
            {
                title: "第二"
            },
            {
                title: "第三"
            },
            {
                title: "第四"
            },
            {
                title: "第五"
            },
            {
                title: "第六"
            },
            {
                title: "第七"
            },
            {
                title: "第八"
            }],
            list: [],
            tabContent: {
                page: 1,
                pageSize: 10,
                loading: false,
                load_error: false,
                load_finished: false,
                no_more_data: false,
            }
        };
    },
    methods: {
        changeTab() {
            this.list.splice(0,this.list.length)
            this.tabContent = {
                page: 1,
                pageSize: 10,
                loading: false,
                load_error: false,
                load_finish: true,
                no_more_data: false,
            }
        },
        async getGoodsList() {
            this.tabContent.loading = true
            setTimeout(() => {
                try {
                    // const res= await fetch()
                    var item = {
                        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683450902&t=39200f3ef934c08bc22967153c109211',
                        title: '奢步士休闲t恤打底衫女短袖t恤印花圆领女式恤圆领女式恤'+this.tabContent.page,
                        price: '159',
                        commission: '20',
                        // 0 已开售 1预售
                        status: 0
                    }
                    var item2 = {
                        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683450902&t=39200f3ef934c08bc22967153c109211',
                        title: '奢步士休闲t恤打底衫女短袖t恤印花圆领女式恤圆领女式恤'+this.tabContent.page,
                        price: '159',
                        commission: '20',
                        // 0 已开售 1预售
                        status: 1,
                        advanceStr: '03月16日20:00开售'
                    }
                    var items = [item2, item, item, item, item, item, item, item, item, item]
                    this.list = this.list.concat(items)
                    this.tabContent.page++
                } catch (error) {
                    this.tabContent.load_error = true
                } finally {
                    this.tabContent.loading = false
                    if (this.tabContent.page == 4) {
                        this.tabContent.load_finished = true
                    }
                }
            }, 3000)
        },
    },
}
</script>
