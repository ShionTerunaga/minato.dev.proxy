
<PageTitle title="styledの中身" />


```ts {all|1-20|5-19|6-12|14-19|21|all}
function factory() {
  const cache = new Map<DOMElement, FC>()
  const target: ProxyTarget = (el, options) => createStyled(el, options)

  return new Proxy(target, {
    apply: function (
      _target,
      _thisArg,
      [el, options]: [DOMElement, StyledOptions],
    ) {
      return createStyled(el, options)
    },

    get: function (_target, el: DOMElement): FC | undefined {
      if (!cache.has(el)) cache.set(el, createStyled(el))

      return cache.get(el)
    },
  }) as Factory
}
export const styled = factory()
```

[https://github.com/yamada-ui/yamada-ui/blob/main/packages/react/src/core/system/factory.ts#L31](https://github.com/yamada-ui/yamada-ui/blob/main/packages/react/src/core/system/factory.ts#L31)