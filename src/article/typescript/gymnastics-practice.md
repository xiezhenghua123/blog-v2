---
author: 菜鸡小谢
date: 2023-09-10
category: typescript
title: ts体操练习
isOriginal: true
---
### 前言

typescript类型体操练习，用于学习ts。

### 题目

**get-return-type**

```typescript
const fn = (v: boolean,a:string) => {
 if (v)
   return 1
 else
   return 2
}

// inter关键字，表示在extends条件语句中待推断的类型变量
type MyReturnType<T extends Function> = T extends (...arg: any) => infer p ? p :never

type a = MyReturnType<typeof fn>
```

[infer关键字介绍](https://jkchao.github.io/typescript-book-chinese/tips/infer.html#%E4%BB%8B%E7%BB%8D)

**Omit**

```typescript
interface Todo {
 title: string
 description: string
 completed: boolean
}

// 利用as进行类型筛选
type MyOmit<T, R extends keyof T> = {
[Q in keyof T as Q extends R ? never : Q]: T[Q]
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
 completed: false,
}
```

**get-readonly-keys**

```typescript
interface Todo {
 readonly title: string
 readonly description: string
 completed: boolean
}


// Q: equal类型定义作用是什么？
// A: equal类型定义的作用是判断两个类型是否相等，如果相等返回true，否则返回false
type equal<X, Y> = (<T>() => T extends X ? 1 : 2 ) extends <T>() => T extends Y ? 1 : 2 ? true : false

// Q: {[K in keyof T]: T[K]}[keyof T] 和 keyof T 有什么区别？
// A: {[K in keyof T]: T[K]}[keyof T] 是T的所有属性的值的联合类型，keyof T 是T的所有属性的联合类型
type GetReadonlyKeys<T> =  { [K in keyof T]: equal<{ readonly [P in K]: T[K] }, { [P in K]: T[K] }> extends true ? K : never }[keyof T]

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
```

