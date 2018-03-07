# cash

> RDD and CDD

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Introduction](#introduction)
- [Objective](#objective)
- [Installation](#installation)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction 

 Describe how to use Cash

## Objective 

* Currency Converter




## Installation
1. Install the packages : 
    ```sh
    > npm install
    ```


## Usage
Execution : 
    ```sh
    > node index.js 
    ```
Overview : 
![overview1](./img/md1.png)

When you execute this, you will arrive to the helpers page 

* Command to try the given exemples : 

1. Convert 1eur to the currency saved by default (USD & GBP)
```sh
> node index.js $cash 1 eur
```
Overview : 

![overview2](./img/md2.png)

2. Convert 1 usd to Euro, Polish Zloty and Australian Dollar (EUR & PLN)
```sh
> node index.js $cash 1 usd eur pln aud 
```
Overview : 

![overview3](./img/md3.png)

3. Change the default currencies 
```sh
> node index.js $cash --save usd eur pln aud
```
This command allow you to saved defaults currencies to Euro, PLN and Aud

Overview : 
![overview4](./img/md4.png)





