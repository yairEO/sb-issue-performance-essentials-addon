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
				docs: true,     // set to false to eliminate the issue
				controls: true, // set to false to eliminate the issue
				actions: true,
				backgrounds: true,
				viewport: true,
			}
		}
    ],
    "framework": "@storybook/react"
}