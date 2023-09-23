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

**Pick**

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}
// type MyPick<T, R extends keyof T> = {
//   [Q in keyof T as Q extends R ? Q : never]: T[Q]
// }

// in 可以取联合类型的值， keyof可以获得联合类型
type MyPick<T, R extends keyof T> = {
 [Q in R]: T[Q]
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false
}
```

