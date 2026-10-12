<PageTitle title="reactiveの簡単なまとめ" />

<BigText>

- `reactive`APIは**JavaScript プロキシ**である
- `state.count++`のような記法で値を変更するだけでUIの変更ができる👍
- `Proxy`だからこそ実現しているのでは🤔

</BigText>

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300](https://github.com/vuejs/core/blob/main/packages/reactivity/src/reactive.ts#L300)

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L137)

[https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L49](https://github.com/vuejs/core/blob/main/packages/reactivity/src/baseHandlers.ts#L49)
