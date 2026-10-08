<PageTitle title="MotionとProxyの簡単なまとめ"/>

<BigText class="react-summary">
<v-clicks depth="2" animation="fade-in">

- ハンドラー関数には`get`のみが宣言されている
- 第一引数には関数が宣言されている
- `Map`をキャッシュとして利用することで、不要なコンポーネントの再生成を防いでいる
- カスタムコンポーネントなどにMotionのアニメーション機能を付与できる`motion.create`が存在
  - 昔は`motion(Component)`という宣言がメインだった模様
  - 今は推奨されていない(名前が`deprecatedFactoryFunction`)
  - 理由のヒントはPR[#2778](https://github.com/motiondivision/motion/pull/2778), [#2787](https://github.com/motiondivision/motion/pull/2787)

</v-clicks>
</BigText>

[https://github.com/motiondivision/motion/blob/main/packages/framer-motion/src/render/components/create-proxy.ts#L61](https://github.com/motiondivision/motion/blob/main/packages/framer-motion/src/render/components/create-proxy.ts#L61)

<style>
.react-summary {
  font-size: 1.55rem !important;
}
</style>
