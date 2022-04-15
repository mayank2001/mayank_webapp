import { 
    Container,
    Box,
    Heading,
    SimpleGrid , 
    Divider
} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item"
import netflix from "../public/images/netflix.png"
import basiclogin from "../public/images/basiclogin.png"
import zomato from "../public/images/zomato.png"
import airbnb from "../public/images/airbnb.png"
import energize from "../public/images/energize.png"
import cryptobase from "../public/images/cryptobase.png" 


const Works = () => {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4} > 
            My Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="netflix" title="Netflix Clone" thumbnail={netflix}>
                    Netflix-clone using React Js.
                    </WorkGridItem>
                    </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="airbnb" title="AirBnb-Clone" thumbnail={airbnb}>
                        AirBnb Clone Using React Js.
                    </WorkGridItem>
                    </Section>
                    <Section>
                    <WorkGridItem id="Login" title="Basic Login Form" thumbnail={basiclogin}>
                    Basic react-application using React.
                    </WorkGridItem>
                </Section>
                <Section delay={0.1}>
                    <WorkGridItem id="zomato" title="Zomato-Clone" thumbnail={zomato}>
                        Zomato Clone Using React Js.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
           Projects I am Working on
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="energize"
            thumbnail={energize}
            title="energize.earth"
          >
            Website for a Company
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="crypto" thumbnail={cryptobase} title="cryptobase">
            cryptobase is a website for crypto currency users 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
        </Container>
    )
}

export default Works;
export { getServerSideProps } from '../components/chakra'