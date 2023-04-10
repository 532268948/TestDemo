<template>
    <div
        style="display: flex;height: 130px;margin-left: 12px;margin-top: 10px;margin-right: 12px; background-color: #FFFFFF;border-radius: 10px;padding:12px">
        <div style="width: 130px;height: 130px;">
            <img :src="data.cover" style="width: 130px;height: 130px;border-radius: 4px;" />
        </div>
        <div style="display:flex;flex:auto;padding-left:10px;height: 130px;flex-direction: column;">
            <div style="font-size: 14px;color: #333333;line-height: 19px;text-overflow: ellipsis;">
                {{ data.title }}
            </div>
            <div style="flex:auto">
                <div
                    style="width: fit-content;background-color:#00B34D14;border-radius: 2px;font-size: 10px;color: #00B34D;flex:auto;padding-left: 3px;padding-right: 3px;padding-top: 2px;padding-bottom: 2px;margin-top: 6px;">
                    {{ data.advanceStr }}
                </div>
            </div>
            <div>
                <div style="display: flex;align-items:flex-end;font-size: 15px;color: #333333;">
                    <div style="font-size: 12px;color: #333333;padding-bottom: 1px;">$</div>
                    {{ data.price }}
                </div>
                <div style="display: flex;">
                    <div style="display:flex;width: 31px;height: 31px;align-items: center;">
                        <van-icon name="shopping-cart-o" size="24px" />
                    </div>
                    <div style="display: flex;flex:auto;flex-direction: row-reverse;">
                        <div
                            style=";width: 147px;height: 31px;background: url('https://cdn.webuy.ai/static/lib/resource/2023/04/10/1681108442536_5662.png') no-repeat bottom right;background-size: contain;">
                            <div style="display: flex;width: 86px;height: 31px;justify-content: center;">
                                <div
                                    style="display: flex;align-items: end;color: #FFFFFFFF;font-size: 16px;align-self: center;">
                                    <div style="color: #FFFFFFFF;font-size: 11px;">
                                        最多赚
                                    </div>
                                    {{ data.commission }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
    },
    methods: {
        /**
         * 加入购物车
         */
        async addCart() {

        },
        /**
         * 分享
         */
        share() {

        }
    }

}
</script>