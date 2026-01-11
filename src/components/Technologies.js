import "animate.css";
import { Card, Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Technologies = () => {
const techCategories = {
  cloud: [
    {
      name: "Azure",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "AWS",
      img: "https://static.vecteezy.com/system/resources/thumbnails/066/712/306/small/aws-icon-logo-symbol-free-png.png",
    },
    {
      name: "Oracle Cloud",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
  ],
  devops: [
    {
      name: "Terraform",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
    {
      name: "Docker",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    },
    {
      name: "Jenkins",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "Ansible",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    },
  ],
  programming: [
    {
      name: ".NET Core",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    },
    {
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Python",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ],
  ai: [
    {
      name: "Claude AI",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Claude_AI_symbol.svg", // public domain SVG available :contentReference[oaicite:1]{index=1}
    },
    {
      name: "GitHub Copilot",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-copilot-white-icon.png", // Copilot icon from Lobehub repo :contentReference[oaicite:2]{index=2}
    },
    {
      name: "Cursor IDE",
      img: "https://img.icons8.com/color/512/cursor-ai.png", // Cursor logo available via Lobehub :contentReference[oaicite:3]{index=3}
    },
  ],
  security: [
    {
      name: "OAuth 2.0",
      img: "https://miro.medium.com/1*e2x6biTeTNWeMc-C4aPogw.jpeg",
    },
    {
      name: "JWT",
      img: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
    },
    {
      name: "Auth0",
      img: "https://images.seeklogo.com/logo-png/42/1/auth0-logo-png_seeklogo-426699.png",
    },
    {
      name: "Azure AD",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
  ],
};


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <section className="technologies" id="technologies">
                <Container>
                  <Row>
                    <Col size={12}>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            className={
                              isVisible
                                ? "animate__animated animate__fadeIn"
                                : ""
                            }
                          >
                            <h2>Technologies I Use</h2>
                            <p>
                              These are the main tools, platforms, and
                              frameworks I use for Cloud, DevOps, AI, and
                              Software Development.
                            </p>

                            <Tab.Container
                              id="technologies-tabs"
                              defaultActiveKey="cloud"
                            >
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                              >
                                <Nav.Item>
                                  <Nav.Link eventKey="cloud">Cloud</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="devops">
                                    DevOps & Infra
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="programming">
                                    Programming
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="ai">
                                    AI & Automation
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey="security">
                                    Security
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>

                              <Tab.Content
                                id="slideInUp"
                                className={
                                  isVisible
                                    ? "animate__animated animate__slideInUp"
                                    : ""
                                }
                              >
                                {Object.keys(techCategories).map((category) => (
                                  <Tab.Pane eventKey={category} key={category}>
                                    <div className="tech-row">
                                      {techCategories[category].map(
                                        (tech, index) => (
                                          <Card
                                            key={index}
                                            className="tech-card text-center"
                                          >
                                            <Card.Img
                                              variant="top"
                                              src={tech.img}
                                              alt={tech.name}
                                            />
                                            {/* <Card.Body>
                                  <Card.Text>{tech.name}</Card.Text>
                                </Card.Body> */}
                                          </Card>
                                        )
                                      )}
                                    </div>
                                  </Tab.Pane>
                                ))}
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                        )}
                      </TrackVisibility>
                    </Col>
                  </Row>
                </Container>
              </section>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background design"
      />
    </section>
  );
};
