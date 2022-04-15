import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="React-Form">
    <Container>
      <Title>
        Zomato-Clone<Badge> Nov-2021</Badge>
      </Title>
      <P>
      Zomato-Clone using React Js.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mayank2001/zomato-main">
          https://github.com/mayank2001/zomato-main <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, React-carousel, live location tracking, Styled Components</span>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>

      <WorkImage src="/images/works/zomato1.png" alt="zomato-clone" />
      <WorkImage src="/images/works/zomato3.png" alt="zomato-clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'