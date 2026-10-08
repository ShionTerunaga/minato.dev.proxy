<PageTitle title="Vue verの簡単なまとめ"/>

<BigText class="vue-summary">
<v-clicks depth="2" animation="fade-in">

- こちらも`get`のみ
- 第一引数はオブジェクト(現在のReact版に合わせるため?)
- `createMotionComponent`内でキャッシュ処理をしている
- `motion.create`も宣言できる
- `Proxy`を使う理由としては、動的にプロパティ名からコンポーネントを生成したいからなのではと考えている

</v-clicks>

</BigText>

[https://github.com/motiondivision/motion-vue/blob/master/packages/motion/src/components/motion/utils.ts#L161](https://github.com/motiondivision/motion-vue/blob/master/packages/motion/src/components/motion/utils.ts#L161)

<style>
.vue-summary {
  font-size: 1.55rem !important;
}
</style>
