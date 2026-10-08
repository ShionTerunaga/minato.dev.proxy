---
level: 2
---

<PageTitle title="Proxyが使われているAPI" />


YamadaUIの`styled`というAPIで`Proxy`が使われている。
また、このAPIを駆使して多くのコンポーネントが作られている。

<div v-click class="api-example">

```tsx
<styled.button />
```

</div>

<div v-click class="api-example">

と

```tsx
const Button = styled("button")

const App = () => {
  return <Button>Click me!</Button>
}
```

</div>

<div v-click>
使い分けとしては、<code>styled.button</code>は、その場でスタイルを指定してUIを作りたい場合に使う、<code>styled("button")</code>は、共通のスタイルや振る舞いを持つコンポーネントを定義し、再利用したい場合に使う。
</div>

<div v-click class="api-highlight">
これの面白いところは、<strong>1つのAPIでプロパティアクセスと関数呼び出しできること</strong>だと思っている。
</div>

<style>
.api-example {
  transition: opacity 500ms ease;
}

.api-highlight {
  margin-top: 0.75rem;
  font-size: 1.2rem;
  line-height: 1.5;
  transition: opacity 500ms ease;
}
</style>
