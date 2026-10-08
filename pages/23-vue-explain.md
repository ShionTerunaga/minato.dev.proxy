<PageTitle title="Vue verの簡単なまとめ"/>

<BigText class="vue-summary">
<v-clicks depth="2" animation="fade-in">

- React verとほぼ同じ
- `createMotionComponent`内でキャッシュ処理をしている
- `motion.create`も宣言できる
- `Proxy`を使う理由としては、動的にプロパティ名からコンポーネントを生成したいからなのではと考えている
- 第一引数がオブジェクトなのは現在のReact verに合わせるためだと考えている(関数として呼ぶAPIを持たせない)
</v-clicks>
</BigText>

[https://github.com/motiondivision/motion-vue/blob/master/packages/motion/src/components/motion/utils.ts#L161](https://github.com/motiondivision/motion-vue/blob/master/packages/motion/src/components/motion/utils.ts#L161)

<style>
.vue-summary {
  font-size: 1.55rem !important;
}
</style>