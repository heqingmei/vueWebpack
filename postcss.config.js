//后期优化我们的CSS
const autoprefixer = require("autoprefixer");

module.exports = {
	plugins: [
		autoprefixer() //加上浏览器前缀
	]
}