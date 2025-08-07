const item = {type: '👔', size: 'M'};
const detail = {price: 20, made: 'Korea', gender: 'M'};

// item과 detail 객체를 합쳐서 새로운 객체를 만들어보자.
// ❌ Bad Code 💩 - 수동할당은 완전 똥코드.
// item['price'] = detail.price;

// ✅ Good Code 👍
const newitem = Object.assign(item, detail);

// 또는 스프레드 문법!!!  👍 👍
const newitem2 = {...item, ...detail};