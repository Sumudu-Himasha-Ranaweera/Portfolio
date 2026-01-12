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
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      {
        name: "Oracle",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      },
      {
        name: "K8s",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
      },
      {
        name: "Docker",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
    devops: [
      {
        name: "Terraform",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      {
        name: "Ansible",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      },
      {
        name: "Jenkins",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "ADO",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
      },
      {
        name: "Actions",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
      },
      {
        name: "Git",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "Linux",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Grafana",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      },
    ],
    programming: [
      {
        name: ".NET",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
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
        name: "TS",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Bash",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
    ],
    ai: [
      {
        name: "TensorFlow",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Keras",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
      },
      {
        name: "OpenCV",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      },
      {
        name: "Jupyter",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "NumPy",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
    ],
    databases: [
      {
        name: "SQL Server",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
      },
      {
        name: "Postgres",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Dynamo",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dynamodb/dynamodb-original.svg",
      },
      {
        name: "Redis",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  };

  const categoryLabels = {
    cloud: "Cloud",
    devops: "DevOps & CI/CD",
    programming: "Languages",
    ai: "AI & ML",
    databases: "Databases",
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
                            <h2>Technical Skills</h2>
                            <p>
                              Expertise across Cloud Platforms, DevOps & CI/CD, Infrastructure as Code, 
                              AI Development Tools, and Full-Stack Technologies.
                            </p>

                            <Tab.Container
                              id="technologies-tabs"
                              defaultActiveKey="cloud"
                            >
                              <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                              >
                                {Object.keys(techCategories).map((category) => (
                                  <Nav.Item key={category}>
                                    <Nav.Link eventKey={category}>
                                      {categoryLabels[category]}
                                    </Nav.Link>
                                  </Nav.Item>
                                ))}
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
                                            <Card.Body>
                                              <Card.Text>{tech.name}</Card.Text>
                                            </Card.Body>
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
