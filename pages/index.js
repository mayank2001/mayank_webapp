import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    Link,
    List,
    ListItem,
    Icon,
    useColorModeValue,
    Button
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import Layout from "../components/layouts/article"



const Page = () => {
    return(
      <Layout>
        <Container >
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center"> 
                Hello, I&apos;m a Frontend and React developer based in Pune, Maharashtra!
            </Box>

            <Box display={{md: 'flex'}}>
               <Box flexGrow={1}>
               
                <Heading as="h2" variant="page-title" >
                    Mayank Joshi
                </Heading>
                <p>Developer (React / Frontend / UI/UX designer)</p>
                
               </Box> 
               <Box 
               flexShrink={0} 
               mt={{base: 4, md: 0}} 
               ml={{md: 6}} 
               align="center">
               <Image
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/mayank.jpg"
                    alt="Profile image"
                    />
               </Box>
            </Box>

            <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          About Me!
        </Heading>
        <Paragraph>
            Hey, I am a React and Frontend developer based in Pune, 
            Maharashtra having an intense passion of developing websites and UI designs.
            My aim is to design all the way to solve real-life problems with code.
            When not coding I usually prefer to Travel and to taste new food. Currently, I developed {''}
        <NextLink href="/works/netflix">
            <Link>Netflix Web Clone(Using React)</Link>
        </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
           <NextLink href="/works">
               <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                   My Work
               </Button>
           </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
              <BioYear>2001</BioYear>
              Born in Akola, Maharashtra.
          </BioSection>
          <BioSection>
              <BioYear>2017</BioYear>
              Completed one of my milestone..<br></br>
              passed Secondary School.
          </BioSection>
          <BioSection>
              <BioYear>2019</BioYear>
              Completed my Higher Secondary Education<br></br>
              and the same year I was introduced to coding.
          </BioSection>
          <BioSection>
              <BioYear>2020 to present</BioYear>
              Took admission in Mitra Mandal&apos;s College of Engineering(MMCOE)
              to study engineering,<br></br>and then the incredible journey of coding started.
          </BioSection>
      </Section>

      <Section>
      <Heading as="h3" variant="section-title">
         My Hobbies
      </Heading>
      <BioSection>
          <BioYear>I love Travelling, Gaming, Photography, Music</BioYear>
      </BioSection>
      </Section>

      <Section>
      <Heading as="h3" variant="section-title">
          My Social&apos;s
      </Heading>
      <List>
          <ListItem>
            <Link href="https://github.com/mayank2001/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @mayank2001
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @MayankJoshi
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/mayank-joshi-34b188194/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @mayank-joshi-34b188194
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
        
        <Box align="center" my={4}>
            <NextLink href="https://docs.google.com/document/d/1o4eYmhBlP9hRQice8HBfDJwfL1KFD7hyGsLKftXblvA/">
               <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                   My Resume
               </Button>
           </NextLink>
           </Box>
        </Container>
        </Layout>
    )
}

export default Page