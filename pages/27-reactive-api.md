<PageTitle title="reactive" />


<BigText>

<v-click animation="fade-in">

オブジェクト自体をリアクティブする`reactive`というAPIが存在する。

</v-click>

</BigText>


<v-click animation="fade-in">

```ts
import { reactive } from 'vue'

const state = reactive({ count: 0 })
```

</v-click>
<br>
<v-click animation="fade-in">

```vue
<button @click="state.count++">
  {{ state.count }}
</button>
```

</v-click>

<BigText>

<v-click animation="fade-in">

よく考えてみると`state.count++`としただけでUIに変更された状態が反映されるのって不思議🤔

</v-click>

</BigText>

