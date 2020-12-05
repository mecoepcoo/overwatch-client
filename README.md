# 简介

# 命令
## npm run dev <target>
### Usage
```shell
$ npm run dev target=react
```
target用于选择pacakge

### Options
#### format, formats
```shell
$ npm run dev target=react format=umd
# 或者同时传入多个
$ npm run dev target=react formats="umd,esm,cjs"
```
支持的模块类型有umd, esm, cjs
