---
author: 菜鸡小谢
date: 2023-09-10
category: typescript
title: ts体操练习
isOriginal: true
---
## 前言

typescript类型体操练习，用于学习ts。

## 题目

### **get-return-type**

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

### **Omit**

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

### **get-readonly-keys**

```typescript
interface Todo {
 readonly title: string
 readonly description: string
 completed?: boolean
 readonly abc: boolean
}

// Q: equal类型定义作用是什么？
// A: equal类型定义的作用是判断两个类型是否相等，如果相等返回true，否则返回false
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2 ) extends <T>() => T extends Y ? 1 : 2 ? true : false

// Q: {[K in keyof T]: T[K]}[keyof T] 和 keyof T 有什么区别？
// A: {[K in keyof T]: T[K]}[keyof T] 是T的所有属性的值的联合类型，keyof T 是T的所有属性的联合类型
type GetReadonlyKeys<T> = keyof {
 [K in keyof T as Equal<
   { readonly [P in K]: T[P] },
   { [P in K]: T[P] }
 > extends true
   ? K
   : never]: T[K]
}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
```

### **simple-vue**

```typescript
type SimpleVueProps<D, M, C> = {
  data: (this: void) => D
  computed: C & ThisType<D>
  methods: M & ThisType<D & GetComputed<C> & M>
}

// ThisType可以控制插入this
type GetComputed<C> = {
  [K in keyof C]: C[K] extends (...args: any) => any ? ReturnType<C[K]> : never
}
declare function SimpleVue<D, M, C>(options: SimpleVueProps<D, M, C>): any

const instance = SimpleVue({
  data() {
    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10
    }
  },
  computed: {
    fullname() {
      return this.firstname + ' ' + this.lastname
    }
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase())
    }
  }
})
```

[ThisType](https://jkchao.github.io/typescript-book-chinese/typings/thisType.html)

### **ReadOnly**

```typescript
interface Todo {
 title: string
 description: string
}

const todo: MyReadonly<Todo> = {
 title: "Hey",
 description: "foobar"
}

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
```

### **pick-to-readonly**

```typescript
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false
}

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [R in K]: T[R]
} & {
  [R in keyof T as R extends K ? never : R]: T[R]
}

todo.title = 'Hello' // Error: cannot reassign a readonly property
todo.description = 'barFoo' // Error: cannot reassign a readonly property
todo.completed = true // OK
```

### **deep-readonly**

```typescript
type X = { 
 x: { 
   a: 1
   b: 'hi'
 }
 y: 'hey',
 z: Date
}

type Expected = { 
 readonly x: { 
   readonly a: 1
   readonly b: 'hi'
 }
 readonly y: 'hey' 
}

type DeepReadonly<T> = {
 readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}

type Todo = DeepReadonly<X> // should be same as `Expected`
```

### **tuple-to-union**

```typescript
type Arr = ['1', '2', '3']

type TupleToUnion<T> = T extends (infer U)[] ? U : never

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```

### **tuple-to-object**

```typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type TupleToObject<T extends readonly (keyof any)[]> = {
    [P in T[number]]: P
}
type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```

### **chainable-option**

```typescript
declare const a: Chainable


// never是所有类型的子类型，never可以赋值给任何类型，但是没有类型可以赋值给never
type Chainable<T = {}> = {
 option: <K extends string, V>(
   key: K extends keyof T ? never : K,
   value: V
 ) => K extends keyof T ? Chainable<Omit<T, K> & Record<K, V>>: Chainable<T & Record<K, V>>
 get: () => T
}

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()
```

### **first**

```typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```

### **last**

```typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1

type Last<T extends any[]> = T extends [...infer rest, infer A] ? A : never
```

### **pop**

```typescript
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type Pop<T extends any[]> = T extends [...infer rest, infer _] ? rest : []

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]
```

### **length-of-tuple**

```typescript
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type Length<T extends readonly any[]> = T["length"]

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```

### **exclude**

```typescript
// 联合类型的遍历，利用三元表达式，所有的类型都会遍历一遍
type MyExclude<T, U> = T extends U ? never : T

type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```

### **awaited**

```typescript
type ExampleType = Promise<string>
type Result = MyAwaited<ExampleType> // string

// answer
type IsLikePromise<T> = {
 then: (onfulfilled: (arg: T) => any) => any
}
type MyAwaited<T extends IsLikePromise<any>> = T extends IsLikePromise<infer R> ? R extends IsLikePromise<any> ? MyAwaited<R> : R : never
```

### **if**

```typescript
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'

// answer
type If<C extends boolean, T, F> = C extends true ? T : F
```

### **concat**

```typescript
type Result = Concat<[1], [2]> // expected to be [1, 2]

// answer
type Concat<T extends  any[], U extends any[]> = [...T, ...U]
```

### **includes**

```typescript
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// answer
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer L] ? Equal<F, U> extends true ? true : Includes<L, U> : false
```

### **push**

```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
// answer
type Push<T extends any[], U> = [...T, U]
```

### **unshift**

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
// answer
type Unshift<T extends any[], U> = [U, ...T]
```

### **parameters**

```typescript
const foo = (arg1: string, arg2: number): void => {}
type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

// answer
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P)=> any ? P :never
```

