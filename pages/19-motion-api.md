<PageTitle title="motionのcomponent" />

motionには`motion`というコンポーネントが存在する。

<v-click>
  
## React ver

```tsx
import { motion } from "motion/react"
  
function Component() {
  return <motion.button animate={{ opacity: 1 }} />
}
```


</v-click>

<br>

<v-click>
  
## Vue ver

```vue
<motion.button :animate="{ opacity: 1 }" />
```

</v-click>

<BigText>
<v-click>

この宣言の仕方はもしや？？

</v-click>
</BigText>



