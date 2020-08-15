import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = tw.div`container mx-auto`
const List = styled.ul`
  list-style: disc;
`

const IndexPage = () => (
  <Container>
    <h1>AURORA Digital</h1>
    <h2>Gatsby Starter</h2>
    <div>
      Features:
      <List>
        <li>Eslint</li>
        <li>Prettier</li>
        <li>Stylelint</li>
        <li>Tailwind CSS (and twin.macro)</li>
        <li>PostCSS</li>
        <li>Storybook</li>
        <li>TypeScript</li>
        <li>Styled Components</li>
      </List>
    </div>
  </Container>
)

export default IndexPage
