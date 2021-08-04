const div = dom.find('#test>.red')[0] //获取对应的元素
dom.style(div, 'color', 'red') //设置div.style.color
const divList = dom.find('.red') //获取多个div.red元素
dom.each(divList, (n) => console.log(n)) //遍历divList里的所有元素