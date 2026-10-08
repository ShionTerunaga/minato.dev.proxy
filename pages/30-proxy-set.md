<PageTitle title="ハンドラーの部分１" />
`state.count++`とかしたら発火する部分

```ts {all|5-20|13-17}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow = false) {
    super(false, isShallow);
  }
  set(
    target: Record<string | symbol, unknown>,
    key: string | symbol,
    value: unknown,
    receiver: object,
  ): boolean {
    //これ以降にたくさんゴニョゴニョ書いているよぉ〜
    if (target === toRaw(receiver) && result) {
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value); // UI更新などのリアクティブな処理を発火する入り口
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue);
      }
    }
    return result;
  }
  //なんか色々書いてある
}
```
