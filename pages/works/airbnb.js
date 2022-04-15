import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Airbnb">
    <Container>
      <Title>
        AirBnb-Clone <Badge>Dec-2021</Badge>
      </Title>
      <P>
      AirBnb-clone using React Js.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/mayank2001/airbnb">
          https://github.com/mayank2001/airbnb <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, React Hooks, Styled Components</span>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>

      <WorkImage src="/images/works/airbnb2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/airbnb4.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'