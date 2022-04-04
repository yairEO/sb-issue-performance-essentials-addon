# Storybook issue report

### Welcome to my issue report, after spending ~10 hours investigating mysterious browser hangs on specific stories.

I knew something was weird after bumping storybook version for my component's repo. Some stories simply hanged the browser.
So I dug and dug... Narrowing things down. Eliminating hypophyses one after the other. Simplifying it to the bare minimum.

Please clone, install dependencies and run *storybook*

There are two stories (in a single story file), and some explenations in the sourcecode.
Once live, click to switch between the stories and you'll notive the performance issue on the "slow" story.

I've narrowed it down to `@storybook/addon-essentials`, which is a common addon collection, and within it
to the `docs` & `controls` addons. When both are disabled, this issue does not occur. 

For some reason, this **only** happens for stories which are wrapped with:

```js
const storyWrap = storyFn => (_, storyArgs) => storyFn(storyArgs)

storiesOf(...).add('Render slow', storyWrap(() => ...
```
