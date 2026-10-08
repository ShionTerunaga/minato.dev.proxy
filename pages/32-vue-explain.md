<PageTitle title="reactiveの簡単なまとめ" />

<BigText>

- `reactive`APIは`Proxy`がベースとなっている
- `state.count++`のような記法で値を変更するだけでUIの変更ができる👍
- `reactive`の仕組みは、`Proxy`だからこそ実現しているのでは🤔

</BigText>

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300](https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300)

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137)
