import _ from 'lodash'
import  './style.css'
import image from './image.jpg'
import csvData from './data.csv'
import xmlData from './data.xml'

import tomlData from './data.toml'
import yamlData from './data.yaml'
import json5Data from './data.json5'

console.log('[ tomlData ] >', tomlData.title,tomlData.owner.name)
console.log('[ yamlData ] >', yamlData.title,yamlData.owner.name)
console.log('[ json5Data ] >', json5Data.title,json5Data.owner.name)

function component() {
  const element = document.createElement('div');

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 将图像添加到我们已经存在的 div 中。
  const myImage = new Image()
  myImage.src = image

  element.appendChild(myImage)

  console.log('[ csvData ] >', csvData)
  console.log('[ xmlData ] >', xmlData)
  

  return element;
}

document.body.appendChild(component());
