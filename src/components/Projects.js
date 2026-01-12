import "animate.css";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const cloudDevOpsProjects = [
    {
      title: "IFS Tenant Migration – Hub-Spoke Infrastructure",
      description:
        "Led infrastructure migration to IFS Tenant with hub-and-spoke topology using Terraform v1.13.3. Designed hub-spoke skeleton with multi-hub attach capability and automated pre-prod validation workflows.",
      imgUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tech: "Terraform, Azure, Infrastructure as Code",
    },
    {
      title: "Terraform Platform Upgrades (0.12 → 1.x)",
      description:
        "Led sequential Terraform migration across platform infrastructure from 0.12 to 1.x with automated validation. Developed migration scripts and delivered training to engineering teams.",
      imgUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: "Terraform, Azure, CI/CD, Tfmigrate",
    },
    {
      title: "Azure Cloud Infrastructure – Multi-Tenant SaaS",
      description:
        "Designed and deployed Azure cloud infrastructure (AKS, API Management, Front Door, Service Bus) using Terraform for multi-tenant SaaS platform at IFS R&D.",
      imgUrl: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      tech: "Azure, AKS, Terraform, ARM Templates",
    },
  ];

  const aiAutomationProjects = [
    {
      title: "AI Development Platform & Planning Automation",
      description:
        "Pioneered custom AI agent framework using Claude Code with 40+ specialized slash commands. Architected MCP server integrating Claude AI with Azure DevOps, achieving 60% reduction in planning overhead.",
      imgUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: "Claude AI, MCP, Node.js, Azure DevOps API",
      badge: "🚀 Impact: 30%+ Productivity Gains",
    },
    {
      title: "8 MCP Server Implementations",
      description:
        "Architected and implemented 8 Model Context Protocol (MCP) servers: Claude Code, Azure DevOps MCP, Serena MCP, Zen MCP, Task Master MCP, and Puppeteer MCP for team-wide AI adoption.",
      imgUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tech: "MCP, Claude AI, Docker, Node.js",
      badge: "🤖 80% Team Adoption",
    },
    {
      title: "AI Platform Enablement – Documentation Automation",
      description:
        "Standardized AI-friendly documentation across all repositories with automated CI-based generation. Built templates for CHANGELOG, Developer Guide, and Architecture diagrams with Serena memory integration.",
      imgUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      tech: "CI/CD Pipelines, Serena MCP, Mermaid Diagrams",
    },
  ];

  const researchProjects = [
    {
      title: "Agrox – AI-Powered Cinnamon Quality Assessment",
      description:
        "Developed AI and Machine Learning-based solution for automated cinnamon quality assessment and disease detection to support Sri Lankan agricultural research and export industry.",
      imgUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      tech: "Python, TensorFlow, Keras, OpenCV, CNN",
      badge: "🏆 NBQSA 2023 Bronze Award",
    },
    {
      title: "Research Paper Publication",
      description:
        "Published research paper at the 5th International Conference on Advancements in Computing (2023). Certificate of recognition for contribution to agricultural AI and computer vision research.",
      imgUrl: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=400&fit=crop",
      tech: "Image Processing, Computer Vision, Agricultural AI",
      badge: "📄 International Publication",
    },
    {
      title: "Cloud-Native Microservices Development",
      description:
        "Designed and deployed .NET Core microservices on Azure AKS with CI/CD, Docker, OAuth2.0 security, and API Management for multi-tenant SaaS platforms at CodeGen International.",
      imgUrl: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      tech: ".NET Core, Azure AKS, Docker, OAuth 2.0",
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
                    Key projects and innovations showcasing expertise in DevOps, Cloud Infrastructure, 
                    AI Automation, and Research. Delivered enterprise-scale solutions at IFS R&D, 
                    CodeGen International, and Pearson Lanka.
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
                          {cloudDevOpsProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* AI & Automation */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {aiAutomationProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Research & Innovation */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {researchProjects.map((project, index) => (
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
