<PageTitle title="chakra UIでのProxy" />

```ts {all|2-5|6-11|14|all}
const chakraImpl = new Proxy(styledFn, {
  apply(_, __, args) {
    // @ts-ignore
    return styledFn(...args)
  },
  get(_, el) {
    if (!cache.has(el)) {
      cache.set(el, styledFn(el as any))
    }
    return cache.get(el)
  },
})

export const chakra = chakraImpl as unknown as StyledFactoryFn
```
<BigText v-click>

`as unknown as`が使われていて`Proxy`はTypeScriptとの相性がイマイチなのかしら？

</BigText>


<BigText v-click>
    その他の詳細はYamadaUIとほぼ同じなので詳細は割愛する。
</BigText>