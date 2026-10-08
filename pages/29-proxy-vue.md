<PageTitle title="reactiveとProxy"/>

本体のソースの`reactive`の関数から追っていくと以下のコードに到達する。

```ts {all|10-15}
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>,
) {
  //なんかもろもろ処理が書いてある

  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers,
  );
  proxyMap.set(target, proxy);
  return proxy;
}
```

<BigText>

`target`は`reactive`の引数で与えたオブジェクト。

</BigText>
