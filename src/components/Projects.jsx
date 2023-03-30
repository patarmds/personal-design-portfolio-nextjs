import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { useState } from "react";

export const Projects = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const projects = [
    {
        "no": "1",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzue4.png"
    },
    {
        "no": "2",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpznqX.png"
    },
    {
        "no": "3",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzxgs.png"
    },
    {
        "no": "4",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzIdG.png"
    },
    {
        "no": "5",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzAml.png"
    },
    {
        "no": "6",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpz7XS.png"
    },
    {
        "no": "7",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzYL7.png"
    },
    {
        "no": "8",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzcB9.png"
    },
    {
        "no": "9",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzl1e.png"
    },
    {
        "no": "10",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzG7j.png"
    },
    {
        "no": "11",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzEdb.png"
    },
    {
        "no": "12",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzVmQ.png"
    },
    {
        "no": "13",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzXIV.png"
    },
    {
        "no": "14",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzNB1.png"
    },
    {
        "no": "15",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzOEF.png"
    },
    {
        "no": "16",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzerg.png"
    },
    {
        "no": "17",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpz8YJ.png"
    },
    {
        "no": "18",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzSkv.png"
    },
    {
        "no": "19",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzrIp.png"
    },
    {
        "no": "20",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpz4hN.png"
    },
    {
        "no": "21",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzsEX.png"
    },
    {
        "no": "22",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpzL4n.png"
    },
    {
        "no": "23",
        "title": "UI Design",
        "description": "Description",
        "imgUrl": "https://iili.io/HNpztYG.png"
    }
];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            if(index < 10){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => handleShow}
                                  />
                              )
                            }
                            
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if(index >= 10 && index < 20){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => handleShow}
                                  />
                              )
                            }
                            
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if(index >= 20){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  onClick={() => handleShow}
                                  />
                              )
                            }
                            
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
