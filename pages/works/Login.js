import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="React-Form">
    <Container>
      <Title>
        React Form<Badge> Nov-2021</Badge>
      </Title>
      <P>
      Basic React Form using React Js.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mayank2001/react-form/tree/master">
          https://github.com/mayank2001/react-form/tree/master <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, React Redux, Styled Components</span>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>

      <WorkImage src="/images/basiclogin.png" alt="react-form" />
      <WorkImage src="/images/works/basiclogin1.png" alt="react-form" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'