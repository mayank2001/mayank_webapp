import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body:{
            bg: mode('#e5e4e2' , '#002147')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title':{
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
          color: mode('#3d7aed', '#227eef')(props),
          textUnderlineOffset: 3
        })
      }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
  }
  
  const colors = {
    grassTeal: '#9FD6D4'
  }
  
  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }
  
  const theme = extendTheme({ 
    config, 
    styles, 
    components, 
    fonts, 
    colors 
  })

  export default theme