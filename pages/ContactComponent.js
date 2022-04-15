import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Input,
    useColorModeValue,
    Button,
} from "@chakra-ui/react"
import Section from "../components/section"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ContactSection, ContactYear, ContactInput } from '../components/contactinfo'
import Layout from "../components/layouts/article"


const ContactComponent = () => {


    return(
      <Layout>
        <Container >
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center"> 
                Connect!
            </Box>
            <Section>
            <ContactSection>
              <ContactYear>Email</ContactYear>
              <Input borderColor="whiteAlpha.800" id="email"></Input>
          </ContactSection>
          </Section>
          <Section>
            <ContactSection>
              <ContactYear>Name</ContactYear>
              <Input borderColor="whiteAlpha.800" id="name"></Input>
          </ContactSection>
          </Section>
          <Section>
            <ContactSection>
              <ContactYear>Message</ContactYear>
              <ContactInput borderColor="whiteAlpha.800">
              </ContactInput>
          </ContactSection>
          </Section>
        <Box align="center" my={4}>
               <Button type="submit" rightIcon={<ChevronRightIcon />} colorScheme="teal">
                   Submit
               </Button>
        </Box>

      
        </Container>
        </Layout>
    )
}

export default ContactComponent