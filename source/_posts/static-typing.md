---
title: static typing
---
## What's static typing ?

Typing in programming languages (PL) can be defined along two axes :

- Strong vs Weak
- Static vs Dynamic

### Strong vs Weak

The more strongly typed a PL is, the less implicit conversions from one type to another there are. A simple example to that is with string and integer conversion : In a strongly typed PL, it will be impossible to directly concatenate a string with an integer, you will first have to convert the integer into a string.

Even in a weakly typed language there are limitations : The computer cannot invent the way you could want to concatenate an object and an integer for example. So while this difference exists, it's mainly limited to scalar types, and as such is of limited interest beyond the ease of use when trying to concatenate values into a string.

### Static vs Dynamic

Static and dynamic typing however have deep implications for the way the language is used. In a statically typed language, type checking happens before runtime, which is, most of the time, the compilation step. Dynamic typing however checks at runtime, meaning that there is no waiting time before running a program.

Note that every language is typed, though some allow you not to specify a variable's type, leading to the impression that the language is not typed.

## What's the point of it ?

Now, you may wonder, if all languages are typed, and if all of them type check anyway, why bother with a pre-runtime step when it could all be done seamlessly in one go ?

The whole point of static typing is specifically that : Add a step before runtime where the computer makes sure that the types are valid. While it may be a bother when developing, the added security it provides in production is worth the wait. Indeed, type errors won't even reach production ever, since they will be preventing the building of the program.

Static typing, even when it's weak, prevents from making all kind of mistakes, like passing wrong parameters to a function. It even leads to a specific kind of programming, called type level programming, which helps reduce even more runtime problems.

Types are also pretty great at providing documentation. Functions parameters behind typed means another layer of information when reading code and same goes for variables. Type declaration make the Hungarian notation pretty obsolete, since the type is already specified. It also helps with autocompletion in IDEs.

## Why don't everybody use it then ?

Static typing being so useful, everybody should use them right ? Well, no. A first barrier to its adoption comes from the legacy systems : If your program is written in a non statically typed language, it can be hard to just throw everything away and start anew. 

Statically typed languages are also often seen as complex languages, with the typing getting in the way, which leads many developers to prefer dynamic languages. The complexity of statically typed languages can come from different parts, such as compilation error messages behind cryptic, or the concepts behind the language being hard to grasp (Which is essentially true for functional programming).

While this remains true, it also mainly comes from a lack of experience in using type systems and static type languages. Still, old habits die hard, and if you're used to dynamic types, it can be hard to switch to static ones. 

## Should I use it ?

It really depends on your needs. A project will be faster to develop using a dynamically typed language, because you won't have as much boilerplate to specify types, including the edge cases. Inheritance can especially get in the way with static typing in some languages. The lack of a compilation step also enable shorter feedback loops when testing out new features.

However, nowadays, even dynamic languages sometimes use a compilation, or build, step. And since the language itself has not been thought to be used this way, those steps are often slower than their equivalent in statically typed languages, who've had years of refining and optimization.

If your project has to be maintained and upgraded over a long period of time, by multiple developers, some of which arriving after the start of the development, then it could be a really good idea to use a statically typed language. The safety provided and the implicit documentation provides straight forward benefits that will greatly help easing in newcomers, and will support long term maintenance.