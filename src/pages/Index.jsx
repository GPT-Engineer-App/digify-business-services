import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon, IconButton } from "@chakra-ui/react";
import { FaRocket, FaBuilding, FaClipboardList, FaFileContract, FaChartLine, FaRegCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="start">
        <Heading as="h1" size="2xl">
          Digify Business Incubation eSwatini
        </Heading>
        <Text fontSize="lg">Digify Business Incubation eSwatini is a premier business development hub dedicated to nurturing and supporting startup businesses. Our comprehensive range of services is designed to guide entrepreneurs through every stage of their business journey, from initial idea to full-scale operation. With a focus on innovation, efficiency, and growth, Digify Business Incubation eSwatini provides the essential tools and resources needed to transform visions into successful ventures.</Text>

        <Heading as="h2" size="xl">
          Our Services
        </Heading>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            1. Business Incubation
          </Heading>
          <Text mb={2}>Digify Business Incubation eSwatini offers a robust business incubation program tailored to meet the diverse needs of startups. Our incubation services are divided into three categories: Virtual Incubation, Physical Incubation, and Inhouse Incubation.</Text>

          <Heading as="h4" size="md" mt={4}>
            Virtual Incubation
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaRocket} color="green.500" />
              Social Media Presence: Creating and managing effective social media strategies to engage with potential customers and build brand awareness.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="green.500" />
              Posters: Designing and distributing digital posters to promote business events, products, and services.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRocket} color="green.500" />
              Digital Presence: Developing and maintaining websites and online platforms to ensure businesses are visible and accessible to their target audience.
            </ListItem>
          </List>

          <Heading as="h4" size="md" mt={4}>
            Physical Incubation
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaBuilding} color="blue.500" />
              Business Daily Operations Management: Assisting with the day-to-day management of business activities to ensure smooth operations.
            </ListItem>
            <ListItem>
              <ListIcon as={FaBuilding} color="blue.500" />
              Business Logistics: Streamlining supply chain and logistics processes to improve efficiency and reduce costs.
            </ListItem>
            <ListItem>
              <ListIcon as={FaBuilding} color="blue.500" />
              Accounting: Offering comprehensive accounting services to manage financial records, budgeting, and financial planning.
            </ListItem>
            <ListItem>
              <ListIcon as={FaBuilding} color="blue.500" />
              Digital Systems Installation: Implementing digital systems to enhance operational efficiency and productivity.
            </ListItem>
            <ListItem>
              <ListIcon as={FaBuilding} color="blue.500" />
              Security Systems Implementation: Installing security systems to protect business assets and ensure a safe working environment.
            </ListItem>
          </List>

          <Heading as="h4" size="md" mt={4}>
            Inhouse Incubation
          </Heading>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaClipboardList} color="purple.500" />
              Office Space: Offering fully-equipped office spaces to create a conducive working environment.
            </ListItem>
            <ListItem>
              <ListIcon as={FaClipboardList} color="purple.500" />
              Product Manager: Assigning a dedicated product manager to oversee product development and strategy.
            </ListItem>
            <ListItem>
              <ListIcon as={FaClipboardList} color="purple.500" />
              Potential Investors: Connecting startups with a network of potential investors to secure necessary funding for growth and expansion.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            2. Business Registration
          </Heading>
          <Text mb={2}>Digify Business Incubation eSwatini simplifies the process of business registration, ensuring that startups meet all legal requirements efficiently. Our services include:</Text>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaFileContract} color="orange.500" />
              Company Name Search: Assisting in the selection of a unique and legally acceptable company name.
            </ListItem>
            <ListItem>
              <ListIcon as={FaFileContract} color="orange.500" />
              Document Preparation: Preparing all necessary documents for business registration.
            </ListItem>
            <ListItem>
              <ListIcon as={FaFileContract} color="orange.500" />
              Regulatory Compliance: Ensuring that businesses comply with all local, state, and federal regulations.
            </ListItem>
            <ListItem>
              <ListIcon as={FaFileContract} color="orange.500" />
              Filing and Submission: Handling the filing and submission of registration documents to the appropriate authorities.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            3. Business Plans
          </Heading>
          <Text mb={2}>We provide comprehensive business plan development services, which are crucial for securing investment and guiding business strategy. Our services include:</Text>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaChartLine} color="teal.500" />
              Market Research: Conducting thorough market research to inform business planning and decision-making.
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="teal.500" />
              Financial Projections: Creating detailed financial projections to demonstrate business viability and potential for growth.
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="teal.500" />
              Strategic Planning: Developing strategic plans that outline business goals, target markets, and competitive strategies.
            </ListItem>
            <ListItem>
              <ListIcon as={FaChartLine} color="teal.500" />
              Executive Summaries: Crafting compelling executive summaries that capture the essence of the business and its value proposition.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            4. Taxes and Compliance
          </Heading>
          <Text mb={2}>Navigating the complexities of taxes and regulatory compliance is essential for any business. Digify Business Incubation eSwatini offers:</Text>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaRegCheckCircle} color="red.500" />
              Tax Planning and Preparation: Providing expert tax planning and preparation services to minimize liabilities and ensure compliance.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCheckCircle} color="red.500" />
              Compliance Audits: Conducting compliance audits to identify and address potential regulatory issues.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCheckCircle} color="red.500" />
              Regulatory Updates: Keeping businesses informed about changes in tax laws and regulations that may impact their operations.
            </ListItem>
            <ListItem>
              <ListIcon as={FaRegCheckCircle} color="red.500" />
              Advisory Services: Offering advisory services to help businesses implement best practices in tax and compliance management.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Conclusion
          </Heading>
          <Text>Digify Business Incubation eSwatini is committed to empowering startups by providing a comprehensive suite of services that address the critical aspects of business development. Our holistic approach ensures that entrepreneurs receive the support they need at every stage of their journey, from initial setup to full-scale operations. With Digify Business Incubation eSwatini, startups can confidently navigate the complexities of business development and achieve their growth potential.</Text>
        </Box>

        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Summary
          </Heading>
          <Text>Digify Business Incubation eSwatini is a hub for startup businesses. We offer:</Text>
          <List spacing={2} mt={2}>
            <ListItem>
              <ListIcon as={FaRocket} color="green.500" />
              Virtual Incubation:
              <List pl={8} spacing={1}>
                <ListItem>Social Media Presence</ListItem>
                <ListItem>Posters</ListItem>
                <ListItem>Digital Presence</ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListIcon as={FaBuilding} color="blue.500" />
              Physical Incubation:
              <List pl={8} spacing={1}>
                <ListItem>Business Daily Operations Management</ListItem>
                <ListItem>Business Logistics</ListItem>
                <ListItem>Accounting</ListItem>
                <ListItem>Digital Systems Installation</ListItem>
                <ListItem>Security Systems Implementation</ListItem>
              </List>
            </ListItem>
            <ListItem>
              <ListIcon as={FaClipboardList} color="purple.500" />
              Inhouse Incubation:
              <List pl={8} spacing={1}>
                <ListItem>Office Space</ListItem>
                <ListItem>Product Manager</ListItem>
                <ListItem>Potential Investors</ListItem>
              </List>
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
