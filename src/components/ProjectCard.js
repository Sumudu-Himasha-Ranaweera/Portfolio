import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tech, badge }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          {badge && <span className="proj-badge">{badge}</span>}
          <h4>{title}</h4>
          <span>{description}</span>
          {tech && <p className="proj-tech">{tech}</p>}
        </div>
      </div>
    </Col>
  );
};
