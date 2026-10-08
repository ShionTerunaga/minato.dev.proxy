<PageTitle title="React verの簡単なまとめ"/>

<BigText class="react-summary">
<v-clicks depth="2" animation="fade-in">

- ハンドラー関数には`get`のみが宣言されている
- `Map`をキャッシュをとして利用することで、不要なコンポーネントの再生成を防いでいる
- `motion.create`が関数宣言と同じような役割を担う
    - 昔は`motion(Component)`という宣言方法だった
    - ただ、`apply`は宣言されていない
    - 宣言方法が変わった理由のヒントはPR[#2778](https://github.com/motiondivision/motion/pull/2778), [#2787](https://github.com/motiondivision/motion/pull/2787)

</v-clicks>
</BigText>

[https://github.com/motiondivision/motion/blob/main/packages/framer-motion/src/render/components/create-proxy.ts#L61](https://github.com/motiondivision/motion/blob/main/packages/framer-motion/src/render/components/create-proxy.ts#L61)

<style>
.react-summary {
  font-size: 1.55rem !important;
}
</style>
