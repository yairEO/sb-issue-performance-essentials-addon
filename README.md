# [Storybook issue report](https://github.com/storybookjs/storybook/issues/17877)

### Welcome to my issue report, after spending ~10 hours investigating mysterious browser hangs on specific stories.

I knew something was weird after bumping storybook version for my component's repo. Some stories simply hanged the browser.
So I dug and dug... Narrowing things down. Eliminating hypophyses one after the other. Simplifying it to the bare minimum.

Please clone, install dependencies and run *storybook*

---

There are two stories (in a single story file), and some explanations in the source-code.
Once live, click to switch between the stories and you'll notice the performance issue on the "slow" story.

I've narrowed it down to `@storybook/addon-essentials`, which is a common addon collection, and within it
to the `docs` & `controls` addons. When both are disabled, this issue does not occur. 

For some reason, this **only** happens for stories which are wrapped with:

```js
const storyWrap = storyFn => (_, storyArgs) => storyFn(storyArgs)

storiesOf(...).add('Render slow', storyWrap(() => ...
```



https://user-images.githubusercontent.com/845031/161569112-096c2ebf-316d-47a2-88ef-29a3afad272e.mp4

