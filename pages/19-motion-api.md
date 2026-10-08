<PageTitle title="Motionのcomponent" />

<p class="motion-api-description">
  Motionには<code>motion</code>というコンポーネントが存在する。
</p>

<v-click>

<h2 class="motion-api-heading">React ver</h2>

```tsx
import { motion } from "motion/react";

function Component() {
  return <motion.button animate={{ opacity: 1 }} />;
}
```

<br>

```ts
const MotionComponent = motion.create(Component);
```

</v-click>

<br>

<v-click>

<h2 class="motion-api-heading">Vue ver</h2>

```vue
<motion.button :animate="{ opacity: 1 }" />
```

<br>

```ts
const MotionComponent = motion.create(Component);
```

</v-click>

<style scoped>
.motion-api-description {
  margin-bottom: 0;
}

.motion-api-heading {
  margin-top: 0.5rem;
}
</style>
