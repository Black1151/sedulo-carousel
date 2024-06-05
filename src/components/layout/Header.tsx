import { Box, HStack, Image } from "@chakra-ui/react"

const Header = () => {
  return (
    <HStack justifyContent="flex-end" bgColor="white" height="4vh" px={5}>
      <Image
        src="/assets/logo/sedulo-main-logo.png"
        alt="Instagram logo"
        height="20px"
      />
    </HStack>
  )
}

export default Header
