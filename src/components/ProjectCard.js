import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, tech, badge }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-card">
        {/* Default view - Title */}
        <div className="proj-title-view">
          {badge && <span className="proj-badge">{badge}</span>}
          <h4>{title}</h4>
          {tech && <p className="proj-tech">{tech}</p>}
        </div>
        
        {/* Hover view - Details */}
        <div className="proj-detail-view">
          <h4>{title}</h4>
          <span className="proj-description">{description}</span>
          {tech && <p className="proj-tech">{tech}</p>}
        </div>
      </div>
    </Col>
  );
};
