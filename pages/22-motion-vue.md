<PageTitle title="Vue verとProxy"/>

```ts {all|4-18|5-17|all}
export function createMotionComponentWithFeatures(
  featureBundle?: FeatureBundle,
) {
  return new Proxy({} as unknown as MotionNameSpace, {
    get(_, prop) {
      if (prop === 'create') {
        return (component: any, options?: MotionCreateOptions) =>
          createMotionComponent(component, {
            ...options,
            ...featureBundle,
          })
      }

      return createMotionComponent(prop as string, {
        ...featureBundle,
      })
    },
  })
}
```