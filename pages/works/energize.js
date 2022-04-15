import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Energize.Earth">
    <Container>
      <Title>
        Energize.Earth<Badge>Dec-2021</Badge>
      </Title>
      <P>
      Simple website using html css javascript.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="http://energize.earth/">
          http://energize.earth/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, OpenStreetMaps integration</span>
        </ListItem>
        <ListItem>
        </ListItem>
      </List>

      <WorkImage src="/images/works/energize1.png" alt="zomato-clone" />
      <WorkImage src="/images/works/energize2.png" alt="zomato-clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'