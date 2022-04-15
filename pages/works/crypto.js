import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="cryptobase">
    <Container>
      <Title>
        cryptobase<Badge>Jan-2021</Badge>
      </Title>
      <P>
      crypto website using ReactJs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Under Construction</Meta>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, React-carousel, SignIn-SignUp form, Styled Components</span>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>

      <WorkImage src="/images/works/cryptobase1.png" alt="cryptobase" />
      <WorkImage src="/images/works/cryptobase2.png" alt="cryptobase" />
      <WorkImage src="/images/works/cryptobase3.png" alt="cryptobase" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'