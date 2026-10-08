<PageTitle title="React ver と Proxy" />

```ts {all|8-18|9-17|all}
export function createMotionProxy(
    preloadedFeatures?: FeaturePackages,
    createVisualElement?: CreateVisualElement<any, any>
): MotionProxy {
    //なんかもろもろ処理してあって。。
    const componentCache = new Map<string, any>()
    // なんかもろもろ処理してあって。。
    return new Proxy(deprecatedFactoryFunction, {
        get: (_target, key: string) => {
            if (key === "create") return factory

            if (!componentCache.has(key)) {
                //キャッシュにアニメーションのコンポーエントを入れて〜
            }

            return componentCache.get(key)!
        },
    }) as MotionProxy
}
```