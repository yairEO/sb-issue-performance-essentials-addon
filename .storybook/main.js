module.exports = {
    "stories": [
		"../stories/**/*.stories.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
		"@storybook/addon-links",
		"@storybook/addon-interactions",
		{
			name: '@storybook/addon-essentials',
			options: {
				docs: false,
				controls: false,
				actions: true,
				backgrounds: true,
				viewport: true,
			}
		}
    ],
    "framework": "@storybook/react"
}