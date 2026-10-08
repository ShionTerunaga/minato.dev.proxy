---
level: 2
---

<PageTitle title="Proxyの実装例"/>

```js {all|1-5|6-10|12|14-16}
const foods = {
  yakiniku: "焼肉",
  sashimi: "刺身",
  yakiton: "やきとん",
};
const handler = {
  get(target, prop) {
    return `${target[prop]}が食べたい`;
  },
};

const hoge = new Proxy(foods, handler);

console.log(hoge.yakiniku); //焼肉が食べたい
console.log(hoge.sashimi); //刺身が食べたい
console.log(hoge.yakiton); //やきとんが食べたい
```

<BigText>

`hoge`は`foods`のオブジェクトの代理となって、返却するデータを加工している

</BigText>
