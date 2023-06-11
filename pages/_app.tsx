import 'sample/styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState,useEffect } from 'react'
import {ChakraProvider} from '@chakra-ui/react'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
    <ChakraProvider>
   
  <Component {...pageProps} />
  </ChakraProvider>
  </div>
  )
}
