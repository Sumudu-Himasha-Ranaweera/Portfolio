import "animate.css";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const toRotate = [
    "Senior DevOps Engineer",
    "AWS & Azure Specialist",
    "AI Development Lead",
    "Cloud Infrastructure Expert",
  ];

  const TYPING_SPEED = 90;
  const DELETING_SPEED = 70;
  const PAUSE_TIME = 1400;

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(TYPING_SPEED);

  useEffect(() => {
    const ticker = setTimeout(() => tick(), speed);
    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      setSpeed(DELETING_SPEED);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setSpeed(TYPING_SPEED);
    }
  };

  return (
    <section className="banner" id="overview">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    CI/CD Automation • Infrastructure as Code • Kubernetes & Container Orchestration
                  </span>

                  <h1>
                    {`Hi! I'm Himasha `}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    Senior DevOps Engineer with <strong>5+ years</strong> of experience in cloud infrastructure 
                    and <strong>2+ years</strong> leading AI-assisted development using Claude AI, GitHub Copilot, 
                    and Cursor IDE. Currently at IFS R&D International, driving DevOps excellence through CI/CD 
                    automation, Infrastructure as Code (Terraform), and pioneering Model Context Protocol (MCP) 
                    server implementations—reducing deployment times by up to <strong>60%</strong>.
                  </p>

                  <button
                    onClick={() =>
                      document
                        .getElementById("connect")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="DevOps Engineer" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
