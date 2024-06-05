import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
  styles: {},
  colors: {
    brand: "#b51e3a",
    brandhot: "#d81035",
  },
  fonts: {
    heading: "Metropolis, sans-serif",
    body: "Metropolis, sans-serif",
  },
  components: {},
})

export default customTheme
