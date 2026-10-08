<PageTitle title="ハンドラーの部分(set)" />

```ts {all|5-22|13-20|all}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow = false) {
    super(false, isShallow)
  }
  set(
    target: Record<string | symbol, unknown>,
    key: string | symbol,
    value: unknown,
    receiver: object,
  ): boolean {
    //これ以降にたくさんゴニョゴニョ書いているよぉ〜

    // UI更新などのリアクティブな処理を発火する入り口
    if (target === toRaw(receiver) && result) {
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
  //なんか色々書いてある
}
```