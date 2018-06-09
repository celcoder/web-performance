# Web-performance optimization tools and guide

# Overview 
- compliation measurement with node / v8 / turbofan
- TBD
- TBD

## Prerequisites
- node v8.11.1
- npm 

## Setup
- clone the repo

## Summary  
- Quick guide as to how to optimize client side bundles using proven measuring metrics.  
- When bundles gets served from s3 to the browser, text initally gets loaded up and goes to the parser. 
- parsing js is slow by nature, can be slow as 1mb a sec on mobile.
- V8 parsing happens in 2 phases: Eager(full parse), Lazy(pre-parse)
- tools like Optimize-js can help you determine what to eager / lazy parse.  Check out https://github.com/nolanlawson/optimize-js
- after it's parsed its turned into an abstract syntax tree (AST).
- the baseline complier (V8) aka ignition, takes the AST and starts to execute our code as we wrote it
- However what makes the js fast is going through optimizing complier aka(turbo-fan)
- 3 things the engine does to help you out, speculative optimizition, hidden classes for dynamic lookups, function inlining.

## In order to run node's native method
- $node --allow-natives-syntax [file.name]

