import "animate.css";
import { Col, Container, Row, Card } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import colorSharp from "../assets/img/color-sharp.png";

export const Certifications = () => {
  const education = [
    {
      institution: "SLIIT (Sri Lanka Institute of Information Technology)",
      degree: "BSc (Hons) in Information Technology",
      specialization: "Specializing in Software Engineering",
      period: "2019 - 2023",
      grade: "First Class | GPA: 3.74",
    },
    {
      institution: "University of Moratuwa",
      degree: "Bachelor of Information Technology",
      specialization: "BIT (HND)",
      period: "2018 - 2020",
      grade: "",
    },
    {
      institution: "University of Bedfordshire",
      degree: "Higher National Diploma in Computer Science",
      specialization: "HND",
      period: "2018 - 2020",
      grade: "GPA: 3.28",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      date: "Oct 2022",
      icon: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      date: "March 2022",
      icon: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png",
    },
    {
      name: "AZ-900: Azure Fundamentals",
      provider: "Microsoft",
      date: "",
      icon: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    },
    {
      name: "SC-900: Security, Compliance & Identity",
      provider: "Microsoft",
      date: "",
      icon: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    },
    {
      name: "DP-900: Azure Data Fundamentals",
      provider: "Microsoft",
      date: "",
      icon: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    },
    {
      name: "AI-900: Azure AI Fundamentals",
      provider: "Microsoft",
      date: "",
      icon: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    },
    {
      name: "Oracle Cloud Infrastructure 2023",
      provider: "Oracle",
      date: "Feb 2023",
      icon: "https://brm-workforce.oracle.com/pdf/certview/images/OCI2023CAFA.png",
    },
    {
      name: "Oracle Cloud Data Management 2023",
      provider: "Oracle",
      date: "March 2023",
      icon: "https://brm-workforce.oracle.com/pdf/certview/images/OCI2023CDMA.png",
    },
  ];

  const awards = [
    {
      title: "NBQSA 2023 Winners' Circle – Bronze Award",
      description: "National recognition for Agrox - AI-Powered Cinnamon Quality Assessment System",
      icon: "🏆",
    },
    {
      title: "12th Rank – Hatch Works' Green Innovation Lab",
      description: "Recognition for innovation in agricultural AI and sustainable technology",
      icon: "🥇",
    },
    {
      title: "Research Paper Publication",
      description: "5th International Conference on Advancements in Computing (2023)",
      icon: "📄",
    },
  ];

  return (
    <section className="certifications" id="certifications">
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
                  <h2>Education & Certifications</h2>
                  <p>
                    Academic background and professional certifications demonstrating commitment 
                    to continuous learning in Cloud, DevOps, and AI technologies.
                  </p>

                  {/* Awards Section */}
                  <div className="awards-section">
                    <h3>Awards & Recognition</h3>
                    <Row className="justify-content-center">
                      {awards.map((award, index) => (
                        <Col key={index} xs={12} md={4} className="mb-4">
                          <Card className="award-card h-100">
                            <Card.Body className="text-center">
                              <div className="award-icon">{award.icon}</div>
                              <Card.Title>{award.title}</Card.Title>
                              <Card.Text>{award.description}</Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  {/* Education Section */}
                  <div className="education-section">
                    <h3>Education</h3>
                    <Row className="justify-content-center">
                      {education.map((edu, index) => (
                        <Col key={index} xs={12} md={4} className="mb-4">
                          <div className="edu-card-static">
                            <span className="edu-period">{edu.period}</span>
                            <h4>{edu.institution}</h4>
                            <p className="edu-degree">{edu.degree}</p>
                            <p className="edu-spec">{edu.specialization}</p>
                            {edu.grade && <span className="edu-grade">{edu.grade}</span>}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  {/* Certifications Section */}
                  <div className="certs-section">
                    <h3>Professional Certifications</h3>
                    <Row>
                      {certifications.map((cert, index) => (
                        <Col key={index} xs={6} md={3} className="mb-4">
                          <Card className="cert-card h-100 text-center">
                            <Card.Body>
                              <div className="cert-icon-wrapper">
                                <img 
                                  src={cert.icon} 
                                  alt={cert.name}
                                  className="cert-icon"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <Card.Title className="cert-name">{cert.name}</Card.Title>
                              <Card.Text className="cert-provider">
                                {cert.provider}
                                {cert.date && <><br /><small>{cert.date}</small></>}
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};

