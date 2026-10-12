---
class: vue-explain-slide
---

<PageTitle title="reactiveの簡単なまとめ" />

<BigText>

- `reactive`APIは**JavaScript プロキシ**であり...(以下略
- `state.count++`のような記法で値を変更するだけでUIの変更ができる👍
- `Proxy`だからこそ実現しているのでは🤔

</BigText>

[https://ja.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive](https://ja.vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive)

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300](https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300)

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137)

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L49](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L49)

<style>
.vue-explain-slide {
  padding-top: 2rem;
}
</style>
