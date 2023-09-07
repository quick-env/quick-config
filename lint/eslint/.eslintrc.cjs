/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-essential',
		// 'plugin:prettier/recommended',
		'@vue/eslint-config-typescript/recommended',
		'@vue/eslint-config-prettier',
	],
	ignorePatterns: ['*.cjs', '*.d.ts', '*.config.ts', '*.config.js'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		project: 'tsconfig.app.json',
		allowAutomaticSingleRunInference: true,
		tsconfigRootDir: __dirname,
		parser: '@typescript-eslint/parser'
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
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
			},
		],
		'no-debugger': 'error',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'never',
				functions: 'never',
			},
		],
		'vue/no-use-v-if-with-v-for': [
			'error',
			{
				allowUsingIterationVar: true,
			},
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		// 函数和类方法显式的返回类型
		'@typescript-eslint/explicit-function-return-type': 'off',
		// 导出的函数和类的公共类方法上要求显式返回和参数类型
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		// 任何返回Promise的函数或方法标记为async
		'@typescript-eslint/promise-function-async': 'off',
		// 不允许在布尔表达式中使用某些类型
		'@typescript-eslint/strict-boolean-expressions': 'off',
		// 禁止记录类型？
		'@typescript-eslint/consistent-indexed-object-style': 'off',
		// 不允许使用不必要的构造函数
		'@typescript-eslint/no-useless-constructor': 'off',
		// 强制使用点表示法
		'@typescript-eslint/dot-notation': 'off',
		// 不允许类成员之间有空行
		'@typescript-eslint/lines-between-class-members': 'off',
		// 不允许声明空接口
		'@typescript-eslint/no-empty-interface': 'error',
		// 使用T[] 或 Array<T>
		'@typescript-eslint/array-type': 1,
		// 不允许使用any
		'@typescript-eslint/no-explicit-any': 2,
		// 不允许泛型或返回类型之外的void类型
		'@typescript-eslint/no-invalid-void-type': 1,
		// 要求对类似Promise的声明进行适当处理
		'@typescript-eslint/no-floating-promises': 1,
		// 强制使用类型导入
		'@typescript-eslint/consistent-type-imports': 1,
		// 从未在构造函数外修改过私有成员，则要求将其标记为只读
		'@typescript-eslint/prefer-readonly': 0,
		// 要求void类型的表达式出现在语句位置
		'@typescript-eslint/no-confusing-void-expression': 1,
		// 空函数警告
		'@typescript-eslint/no-empty-function': 1,
		// 不允许某些三斜杠指令而支持ES6风格的导入声明
		'@typescript-eslint/triple-slash-reference': 0,
		// 不允许将类用作命名空间
		'@typescript-eslint/no-extraneous-class': 2,
		//必须使用全等
		eqeqeq: 2,
		//限制行数
		'max-lines': ['error', 1000],
		// 限制单个函数复杂度
		complexity: ['error', 6],
		// 强制 getter 函数中出现 return 语句
		'getter-return': 1,
		// await必须使用async
		'require-await': 'error',
		// 定义未使用的变量
		'no-unused-vars': 1,
		// 建议使用let或const
		'no-var': 2,
		'vue/no-deprecated-slot-attribute': 0,
		// 混合使用空格和制表符
		'no-mixed-spaces-and-tabs': 1,
		// 使用不推荐的装饰符号警告
		'vue/no-deprecated-v-on-native-modifier': 1,
		// 关闭自定义组件使用v-model
		'vue/no-v-model-argument': 0,
		// 在v-bind指令上使用不推荐使用的.sync修饰符警告
		'vue/no-deprecated-v-bind-sync': 1,
		// 自定义组件强制使用name命名
		'vue/attribute-hyphenation': 2,
		// for循环中不能使用await
		'no-await-in-loop': 0,
		// 回调不超过3层
		'max-nested-callbacks': ['error', 3],
		// 使用 Error 对象作为 Promise 拒绝原因
		'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
	},
}
