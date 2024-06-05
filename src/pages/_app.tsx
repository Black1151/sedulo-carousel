import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import customTheme from "../theme/theme"
import "@fontsource/metropolis/400.css"
import "@fontsource/metropolis/500.css"
import "@fontsource/metropolis/600.css"
import "@fontsource/metropolis/700.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
