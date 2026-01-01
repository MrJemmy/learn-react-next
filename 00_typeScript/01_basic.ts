// ========= 1. Primitive Types==========

let myString: string = "Hello TypeScript";
let myNumber: number = 42;
let myBoolean: boolean = true;
let myBigInt: bigint = 9007199254740991n;
let mySymbol: symbol = Symbol("unique");
let myNull: null = null;
let myUndefined: undefined = undefined;

/*
let username = "jaimin";
username = 20; :- onces value assign with any DataType, then we can't assign any other type of value
*/

// ========= 2. Any vs Unknown ==========

let anything: any = "could be anything";
anything = 123; // allowed
anything = { foo: "bar" }; // also allowed

let value: unknown = "hello";
// value.length ❌ not allowed
if (typeof value === "string") {
  console.log(value.length); // ✅ works
}

// ========= 3. Union Types ==========

let id: string | number;
id = 101;
id = "abc";

/* Combine with type narrowing */
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// ========= 4. Literal Types ==========

let direction: "up" | "down" | "left" | "right";
direction = "up";

/* Use for constants instead of plain string. */
type StatusString = "success" | "error" | "loading";
let currentStatus: StatusString = "loading";

// ========= 5. Array ==========

let nums: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let mixed: (string | number)[] = [1, "two"];
let anyArr: any[] = [1, "hi", true];

/*
Use T[] (e.g., number[]) for readability.
Avoid any[].
*/

// ========= 6. Tuple ==========

let userInfo: [string, number] = ["Alice", 25];
let optional: [string, number?] = ["OnlyName"];

// ========= 7. Object ==========
let person: {
  id: number;
  name: string;
  email?: string;
};

person = { id: 1, name: "Bob" };

/* Index Signatures */
let dict: { [key: string]: number };
dict = { apples: 10, bananas: 20 };

/*
Use ? for optional fields.
Prefer readonly for immutability.
below :- userData.id = 2; ❌ not allowed
*/
let userData: { readonly id: number; name: string } = { id: 1, name: "Alice" };

// ========= 8. Type Aliases ==========
type UserID = string | number;

type UserObj = {
  id: UserID;
  name: string;
  email?: string;
};

let u: UserObj = { id: 1, name: "Alice" };
/* Cannot merge like interfaces. */

// ========= 9. Interfaces ==========
interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

let p: Product = { id: 1, name: "Pen", price: 20 };
/*
interface Animal { name: string }
interface Dog extends Animal { breed: string }
-> interface can extend another interface but type can not.
*/

// ========= 10. Functions ==========
let log: (msg: string) => void;

let register = (user: { name: string; age: number }): void => {
  console.log(user);
};

type registerUserType = {
    username: string,
    DOB: Date
    getAge: ()=>{
      // logic to get age
    } // # how dose this work?
}

let register2 = (user: registerUserType): void => {
  console.log(user);
};

type addFun = (val1: number, val2: number) => number;
const add: addFun = (val1, val2) => {
  return val1 + val2;
};

// ========= 11*. Type Assertions ==========
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;
// or
let strLength2: number = (<string>someValue).length;

// ========= 12. Enums ==========
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;

/* best practice */
enum StatusEnum {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}

// ========= 13. Intersection Types ==========
type Admin = {
  name: string;
  id: number;
  role: string;
};
type Employee = {
  name: string;
  id: number;
  department: string;
};
type ElevatedEmployee = Admin & Employee;

// ========= 14*. Type Guards ==========
function isString(value: any): value is string {
  return typeof value === "string";
}

// ========= 15. Never Type ==========
function throwError(message: string): never {
  throw new Error(message);
}

// ========= 16*. Non-Null Assertion Operator ==========
function processElement(id: string) {
  const element = document.getElementById(id);
  console.log(element!.innerHTML); // Assert element is not null
}

// ========== 17. generic Types ==========
function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(10);
let str = identity<string>("hi");

/* Use when creating reusable utilities (e.g., array wrappers, API responses). */
function wrapArray<T>(val: T): T[] {
  return [val];
}
let wraperArray = wrapArray<string[]>(["jaimin", "harash", "patel"]);

interface Box<T> {
  value: T;
}
let box: Box<string> = { value: "test" };

// ========= 18. Conditional Types ==========
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false
/* Use for advanced type transformations and utilities. */

// ========= 19*. Mapped Types ==========
/* it can be with readonly or without readonly also */
type ReadonlyData<T> = {
  readonly [P in keyof T]: T[P];
};

type UserMap = { id: number; name: string };

type ReadonlyUserData = ReadonlyData<UserMap>;
/* Use for creating variations of existing types (e.g., making all properties optional or readonly). */
type ReadonlyUserIdObj = {
  readonly id: number;
  name: string;
};
let userx: ReadonlyUserIdObj = { id: 1, name: "John" };
/* u.id = 2; ❌ not allowed */

/* ReadonlyArray is in buit in type script */
let usery: ReadonlyArray<number> = [1, 2, 3];
/* arr.push(4); ❌ */

// ========= 20. Utility Types ==========
type UserUtility = { id: number; name: string; email?: string };

type PartialUser = Partial<UserUtility>; // { id?: number; name?: string }
type RequiredUser = Required<PartialUser>; // { id: number; name: string }
type ReadonlyUser = Readonly<UserUtility>; // cannot modify
type PickUser = Pick<UserUtility, "id" | "name">;
type OmitUser = Omit<UserUtility, "email">;

let usersRecords: Record<number, User> = {
  1: { id: 1, name: "Alice", email: "a@a.com" },
};

/*
Use built-in utility types to simplify common type transformations.
https://www.typescriptlang.org/docs/handbook/utility-types.html
*/

// ========= 21*. Template Literal Types ==========
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">; // "onClick"
type HoverEvent = EventName<"hover">; // "onHover"
/* Use for creating string-based types with specific patterns. */

// ========= 22*. Recursive Types ==========
type NestedArray<T> = T | NestedArray<T>[];
let arr: NestedArray<number> = [1, [2, [3, 4]], 5];
/* Use for defining types that can contain nested structures. */

// ========= 23*. Variadic Tuple Types ==========
type Prepend<Tuple extends any[], Element> = [Element, ...Tuple];
type StringNumberTuple = Prepend<[number, number], string>; // [string, number, number]
/* Use for manipulating tuple types in a flexible way. */

// ========= 24*. Import Types ==========
// Assuming there's a module 'moduleA' exporting a type 'TypeA'
// import type { TypeA } from './moduleA';
// let valueA: TypeA;
/* Use for importing types without including the actual module code. */

// ========= 25*. Type-Only Imports and Exports ==========
// import type { TypeB } from './moduleB';
// export type { TypeB };
/* Use for cleaner code and avoiding circular dependencies. */

// ========= 26*. Const Assertions ==========
let directions = ["up", "down", "left", "right"] as const;
type DirectionLiteral = (typeof directions)[number]; // "up" | "down" | "left" | "right"

enum StatusConst {
  Success = "SUCCESS",
  Error = "ERROR",
  Loading = "LOADING",
}
/* Use for creating immutable arrays or objects with literal types. */

// ======== x.Advanced Types ========

/* Keyof */

type User = { id: number; name: string; email?: string };
type UserKeys = keyof User; // "id" | "name"

/* Lookup Types */

type NameType = User["name"]; // string
type IdType = User["id"]; // number
type IdOrNameType = User["id" | "name"]; // string | number

/* Template Literal Types */

type HTTPMethod = "GET" | "POST";
type Endpoint = `${HTTPMethod} /users`;

/*  Infer Keyword */
type FooReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function foo() {
  return 42;
}

type FooReturn = FooReturnType<typeof foo>; // number

// ======= class typeing =======

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let p1: Person = new Person("Alice", 30);

// Special Types: any, unknown, void, never, `undefine`
