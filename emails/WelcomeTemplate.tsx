import { Html, Body, Container, Tailwind, Text, Link, Preview } from '@react-email/components'
import React from 'react'

const WelcomeTemplate = ({name}: {name: string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
        <Body className='bg-yellow-300'>
            <Container className='bg-white p-5'>
                <Text className='font-bold text-3xl'>Hello {name}!</Text>
                <Link href='https://www.kevin-portfolio-beta.vercel.com'>Kevin Portfolio</Link>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate
