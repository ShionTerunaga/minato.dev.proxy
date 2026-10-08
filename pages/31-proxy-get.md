<PageTitle title="ハンドラーの部分２" />

`{{ state.count }}`などの部分

```ts {all|7-18|11-12}
class BaseReactiveHandler implements ProxyHandler<Target> {
  constructor(
    protected readonly _isReadonly = false,
    protected readonly _isShallow = false,
  ) {}

  get(target: Target, key: string | symbol, receiver: object): any {
    //なんか色々書いてあるわよ〜

    if (!isReadonly) {
      // プロパティと、それを参照するeffectの依存関係を登録・管理する
      track(target, TrackOpTypes.GET, key);
    }

    //なんかもろもろ書いてあるね〜

    return res;
  }
}
```
