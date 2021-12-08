# swallow-ui
#### swallow-ui 是一个vue UI 库

## 1. 如何安装
#### yarn :

```bash
 $ yarn add swallow-ui
```

#### npm :

```bash
$ npm install swallow-ui
```

## 2. 如何使用

(1) 在vue main.js 中引入
``` javascript
import Vue from 'vue';
import swallowUi from 'swallow-ui';
Vue.use(swallowUi);
```
(2) 在\<template\>\</template>中插入UI组件即可
```html
<template>
    <div>
      <s-movediv :sLimit="true" :sTop="300" />
    </div>
</template>
```


## 3.组件及其参数


#### (1) loading组件: 屏幕等待加载时画面
- 组件名称: s-loading
- 组件参数:
    - sIsLoading(Boolean) 默认值为 `true` 是否显示loading组件
    - sStyle(Object) 为组件添加新样式
    - sBoxShow(Boolean) 默认值为 `true` 是否显示跳动的球体
- 列式
```html
<template>
    <div>
      <s-loading :sBoxShow="false" :style="{background: 'red'}" />
    </div>
</template>
```


#### (2) avatar组件: 头像框
- 组件名称: s-avatar
- 组件参数:
    - sSrc(String) 头像图片src
    - sWidth(Number) 默认值为 40 头像框宽度
    - sHeight(Number) 默认值为 40 头像框高度
- 列式
```html
<template>
    <div>
      <s-avatar sSrc="https://xxx.xxx.jpg" :sWidth="60" />
    </div>
</template>
```


#### (3) chatbox组件: 聊天框
- 组件名称: s-chatbox
- 组件参数:
    - sAnimation(Boolean) 默认值为 `false` 点击聊天框时出现动画
    - sContent(String) 绑定聊天框中的内容
    - sSelf(Boolean) 默认值为 `false` 设置为 `true` 时显示为我方聊天框
- 列式
```html
<template>
    <div>
      <s-chatbox sContent="Hello World" :sSelf="true" />
    </div>
</template>
```

```html
<template>
    <div>
      <s-chatbox :sAnimation="true">
          <p>Hello World</p>
      </s-chatbox >
    </div>
</template>
```


#### (4) movediv组件: 移动div
- 组件名称: s-movediv
- 组件参数:
    - sLimit(Boolean) 默认值为 `false` 如果设置为 `true` 则movediv移动范围为其父级元素的大小范围
    - sBorder(Boolean) 默认值为`true` 是否显示movediv的边框
    - sWidth(String) 默认值为 200px movdiv的宽度
    - sHeight(String) 默认值为 200px movediv的高度
    - sTop(Number) 设置movdiv初始top(x轴坐标)
    - sLeft(Number) 设置movdiv初始left(y轴坐标)
    - @sCoor(function) 接收 movdiv 传输回来的值({top:xx,left:xx})
- 列式
```html
<template>
    <div>
      <s-movdiv
        :sLimit="true"
        sWidth="400px"
        sHeight="400px"
        :sTop="200"
        :sLeft="600"
        @sCoor="c => console.log(c.top)"
        >
            <div>
                Hello World
            </div>
        </s-movdiv>
    </div>
</template>
```