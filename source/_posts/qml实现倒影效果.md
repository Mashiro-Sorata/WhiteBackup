---

title: qml实现倒影效果
copyright: true
date: 2021-07-28 16:33:24
categories: qml
tags: [qml,特效,代码记录]
top:
password:
description:

---

# 前言

在网上查找qml中实现倒影效果的相关内容时，国内网站有关的内容都是使用ShaderEffect实现的，且代码都是以图片(Image)为例。
在GPbeta的帮助下，找到了另一种使用OpacityMask实现倒影效果的方式，对控件和图片都有效果，在此记录一下。效果图如下。

<div align="center"><img src="https://p.qlogo.cn/zc_icon/0/30d44896cc00d94822029bd0b5224abf16275505938473/0.png"></div>

<!-- more -->

# 代码实现

```qml
import QtQuick 2.4
import QtQuick.Window 2.2
import QtGraphicalEffects 1.0

Rectangle {
    id: main_container
    width: 390
    height: 360

    property int offset: 0

    Rectangle {
        //控件本体
        id: content
        color: "#8e44ad"
        width: 140
        height: 140
        anchors.top: parent.top
        anchors.topMargin: 20
        anchors.left: parent.left
        anchors.leftMargin: 50
    }

    OpacityMask {
        //控件阴影
        width: content.width
        height: content.height
        //阴影定位
        anchors.top: content.bottom
        anchors.topMargin: content.height + offset
        anchors.left: content.left

        source: content
        maskSource: Rectangle {
            width: content.width
            height: content.height
            gradient: Gradient {
                GradientStop { position: 0.0; color: Qt.rgba(0,0,0,0) }
                GradientStop { position: 1.0; color: Qt.rgba(0,0,0,0.9) }
            }
        }

        transform: Scale { yScale: -1}
    }

    Image {
        //图片本体
        id: img
        width: 140
        height: 140
        source: "test.png"
        anchors.top: parent.top
        anchors.topMargin: 20
        anchors.left: content.right
        anchors.leftMargin: 20
    }

    OpacityMask {
        //图片阴影
        width: img.width
        height: img.height
        //阴影定位
        anchors.top: img.bottom
        anchors.topMargin: img.height + offset
        anchors.left: img.left

        source: img
        maskSource: Rectangle {
            width: img.width
            height: img.height
            gradient: Gradient {
                GradientStop { position: 0.0; color: Qt.rgba(0,0,0,0) }
                GradientStop { position: 1.0; color: Qt.rgba(0,0,0,0.9) }
            }
        }

        transform: Scale { yScale: -1}
    }
}
```
