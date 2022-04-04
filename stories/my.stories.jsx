import React from 'react'
import {storiesOf} from '@storybook/react'

// this is a simplification of my global decorator which is used in hunderds of stories
const storyWrap = storyFn => (_, storyArgs) => storyFn(storyArgs)

// filling an array with JSX syntax manifests the problem
const getMockData = size => [...Array(size)].fill(<></>)

const Foo = ({children}) => children

// not wrapped with "storyWrap"
storiesOf('issue', module).add('Render fast', () => {
	const props = {
        data: getMockData(100),
    }
	
	return <Foo {...props}>fast</Foo>
})

// hangs for about ~5s on my machine 
.add('Render slow', storyWrap(() => {
	const props = {
        data: getMockData(100),
    }
	
	return <Foo {...props}>slow</Foo>
}))