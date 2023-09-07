/*
 * @Author: liya
 * @Date: 2023-09-07 18:43:54
 * @LastEditors: liya
 * @LastEditTime: 2023-09-07 18:43:54
 * @Description: 
 */
module.exports = {
	// 是否使用尾逗号，有三个可选值"<none|es5|all>"
	trailingComma: 'es5',
	// 一个tab代表几个空格数，默认为2
	tabWidth: 2,
	// 是否使用tab进行缩进，默认为false，表示用空格进行缩减
	useTabs: true,
	// 一行的字符数，如果超过会进行换行，默认为100
	printWidth: 100,
	// 行尾是否使用分号
	semi: false,
	// 字符串是否使用单引号
	singleQuote: true,
	// 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
	bracketSpacing: true,
	// 在唯一的箭头函数参数周围包含括号
	arrowParens: 'always',
	// 多行 JSX 元素放在最后一行的末尾，而不是单独放在下一行
	jsxBracketSameLine: true,
}
