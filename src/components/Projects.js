import "animate.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "AI Development Platform & Planning Automation",
      description:
        "Built AI-powered planning workspace using Claude AI, Azure DevOps integration, and Model Context Protocol (MCP) for automated workflows and feature prioritization.",
      // replace with proper images
      imgUrl: "https://placehold.co/600x400",
    },
    {
      title: "IFS Tenant Migration – Hub-Spoke Infrastructure",
      description:
        "Led migration to IFS Tenant with hub-and-spoke topology using Terraform, automating pre-prod validation, module compliance, and environment provisioning.",
      // replace with proper images
      imgUrl: "https://placehold.co/600x400",
    },
    {
      title: "Terraform Platform Upgrades (0.12 → 1.x)",
      description:
        "Planned and executed sequential Terraform migration for infrastructure modules with automated validation and sandbox testing.",
      // replace with proper images
      imgUrl: "https://placehold.co/600x400",
    },
    {
      title: "AI Platform Enablement – Repository Documentation Automation",
      description:
        "Standardized AI-friendly documentation across repositories with CI-based generation and Serena memory integration for team onboarding.",
      // replace with proper images
      imgUrl: "https://placehold.co/600x400",
    },
    {
      title: "Agrox – AI-Powered Cinnamon Quality Assessment",
      description:
        "Developed ML and CV solution for automated cinnamon quality detection using Python, TensorFlow, Keras, OpenCV, achieving national recognition (NBQSA Bronze).",
      // replace with proper images
      imgUrl: "https://placehold.co/600x400",
    },
    {
      title: "Cloud-Native Microservices Development",
      description:
        "Designed and deployed .NET Core microservices on Azure AKS with CI/CD, Docker, OAuth2.0 security, and API Management for multi-tenant SaaS platforms.",
      // replace with proper images
      imgUrl: "https://placehold.co/600x400",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects & Achievements</h2>
                  <p>
                    Here are some of the key projects and innovations led by
                    Himasha Ranaweera, showcasing expertise in DevOps, Cloud,
                    AI, and Automation.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Cloud & DevOps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">AI & Automation</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Research & Innovation
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Cloud & DevOps */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 3).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* AI & Automation */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(3, 5).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Research & Innovation */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.slice(5, 6).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background design"
      />
    </section>
  );
};
