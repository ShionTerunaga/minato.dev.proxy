<PageTitle title="factory関数の簡単なまとめ"/>

<BigText>
<v-clicks depth="2" animation="fade-in">

- ハンドラー関数には`get`と`apply`が宣言されている
  - 関数呼び出しされたときは`apply`が発火する
  - プロパティにアクセスされたときは`get`が発火
- `apply`はスタイルシステムをそのまま付与する
- `get`ではキャッシュにプロパティ（HTMLタグ）が存在しないときはスタイルシステムを付与したコンポーネントを生成し、存在する場合にはキャッシュしてある値を返している

</v-clicks>
</BigText>

[https://github.com/yamada-ui/yamada-ui/blob/main/packages/react/src/core/system/factory.ts#L27](https://github.com/yamada-ui/yamada-ui/blob/main/packages/react/src/core/system/factory.ts#L27)
