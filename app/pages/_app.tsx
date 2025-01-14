import React from 'react'
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'

const myApp = () => {
  return (
    <ClerkProvider>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    {/* <Component {...pageProps} /> */}
  </ClerkProvider>
  )
}

export default myApp