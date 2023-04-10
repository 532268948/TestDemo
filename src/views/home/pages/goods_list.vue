<template>
    <van-list v-model:loading="loading" v-model:error="load_error" :finshed="load_finish" finshed-text="没有更多了"
        @load="getGoodsList">
        <GoodsCard v-for="item in list" :data="item" />
    </van-list>
</template>
<script>

import GoodsCard from '../components/goods_card.vue';

export default {
    components: {
        GoodsCard
    },
    props: [
        'type'
    ],
    data() {
        return {
            page: 0,
            pageSize: 10,
            loading: false,
            load_error: false,
            load_finish: true,
            no_more_data: false,
            list: [],
        }
    },
    methods: {
        async getGoodsList() {
            this.loading = true
            setTimeout(() => {
                try {
                    // const res= await fetch()
                    var item = {
                        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683450902&t=39200f3ef934c08bc22967153c109211',
                        title: '奢步士休闲t恤打底衫女短袖t恤印花圆领女式恤圆领女式恤',
                        price: '159',
                        commission: '20',
                        // 0 已开售 1预售
                        status: 0
                    }
                    var item2 = {
                        cover: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fbf6fe5f0-4e5c-4dd1-9545-f58151164f0c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683450902&t=39200f3ef934c08bc22967153c109211',
                        title: '奢步士休闲t恤打底衫女短袖t恤印花圆领女式恤圆领女式恤',
                        price: '159',
                        commission: '20',
                        // 0 已开售 1预售
                        status: 1,
                        advanceStr: '03月16日20:00开售'
                    }
                    var items = [item, item2, item, item, item, item, item2, item, item, item]
                    this.list = this.list.concat(items)
                    page++
                } catch (error) {
                    this.load_error = true
                } finally {
                    this.loading = false
                    if (this.page == 4) {
                        this.load_finish = true
                    }
                    // this.load_finish = true
                }
            }, 3000)
        },
    },

}
</script>