---
level: 2
---

<PageTitle title="サンプルコード"/>

```js {all|1-5|6-10|12|14|15|16|all}
const foods = {
  yakiniku: "焼肉",
  sashimi: "刺身",
  yakiton: "やきとん"
};
const handler = {
  get(target,prop) {
    return `${target[prop]}が食べたい`
  }
}

const wannerEatASpecificFood = new Proxy(foods, handler)

console.log(wannerEatASpecificFood.yakiton); //焼肉が食べたい
console.log(wannerEatASpecificFood.yakiniku); //刺身が食べたい
console.log(wannerEatASpecificFood.sashimi); //やきとんが食べたい
```

<BigText v-click>
  <code>wannerEatASpecificFood</code>が<code>foods</code>の代理となり、プロパティへのアクセスに割り込んで、返却するデータを加工している。
</BigText>