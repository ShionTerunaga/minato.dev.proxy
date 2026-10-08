<PageTitle title="事例：Vue.jsのreactive" />

<BigText>

Vue.jsのリアクティビティーシステムの1つであるオブジェクト自体をリアクティブする`reactive`というAPIが存在する。

</BigText>

```ts
import { reactive } from "vue";

const state = reactive({ count: 0 });
```

<br>

```vue
<button @click="state.count++">
  {{ state.count }}
</button>
```

<BigText>

<v-click animation="fade-in">

「リアクティブオブジェクトは JavaScript プロキシであり、通常のオブジェクトと同じように動作します。」by 公式ドキュメント

</v-click>

</BigText>
