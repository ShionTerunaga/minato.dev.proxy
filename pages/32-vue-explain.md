<PageTitle title="reactiveの簡単なまとめ" />

<BigText>

<v-clicks depth="2" animation="fade-in">

- `reactive`APIは`Proxy`が使われている
- `state.count = 1`のように通常のオブジェクトと同じ記法で値を変更するだけでその変更を検知してUIに変更できる
- この仕組みは、オブジェクトへの操作に介入できるProxyだからこそ実現しやすいものだと考えている

</v-clicks>

</BigText>

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300](https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300)

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137)