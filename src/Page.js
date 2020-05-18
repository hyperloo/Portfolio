import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Progress,
} from "reactstrap";

// core components
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HoverCard from "./components/HoverCard";

import "./components/HoverCard/Hover.scss";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  var imge = require("./assets/img/login.webp");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Header />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button
                className="btn-round"
                color="info"
                style={{ padding: "1rem 2rem" }}
              >
                Get In Touch
              </Button>
              <Button
                className="btn-round btn-icon"
                style={{ padding: "1.5rem 1.5rem" }}
                color="default"
                id="tooltip515203352"
              >
                <a
                  href="https://github.com/hyperloo/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-github"></i>
                </a>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip515203352">
                Get in Touch on Github
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip340339231"
                style={{ padding: "1.5rem 1.5rem" }}
              >
                <a
                  href="https://www.linkedin.com/in/himanshu-singh-1b8009176/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip340339231">
                Follow me on LinkedIn
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="default"
                id="tooltip3403392378"
                style={{ padding: "1.5rem 1.5rem" }}
              >
                <a
                  href="mailto:hack.himanshu1024@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <i className="fab far fa-envelope"></i>
                </a>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip3403392378">
                Mail ME on G-Mail
              </UncontrolledTooltip>
            </div>
            <h2 className="title">Who I am?</h2>
            <h5
              className="description"
              style={{
                lineHeight: "1.8rem",
                color: `#444`,
                letterSpacing: "0.14rem",
                fontWeight: "lighter",
              }}
            >
              Hi, I am <mark>Himanshu</mark>, an Undergraduate Student pursuing
              B.Tech. in
              <mark>Mathematics and Computing</mark> from{" "}
              <mark>Delhi Technological University</mark>, passionate about{" "}
              <mark>Coding</mark>, currently doing
              <mark>Full Stack Web Development</mark> using MERN Stack. Amazed
              by the beauty of Nature and like to be{" "}
              <mark>limitless as the Universe</mark>. Tech, Task and Innovation
              are the adrenaline for ME. <br />
              <br />
              <i>
                &nbsp;<span style={{ fontSize: "2.8rem" }}>"</span>&nbsp;
                <mark>Evolution</mark> is the key to survival and thus always
                keep <mark>Learning</mark> and <mark>Evolving</mark>.
                <span style={{ fontSize: "2.8rem" }}>"</span>
              </i>
              <br />
              <br />
              Feel Free to <mark>Explore</mark>
            </h5>
            <div
              className="section section-team text-center"
              style={{ padding: "0px" }}
            >
              <Container>
                <h2 className="title">My Portfolio</h2>
                <div className="team">
                  <Row>
                    <Col
                      lg="4"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 5px -6px",
                        marginBottom: "2.8rem",
                        borderRadius: "1.8rem",
                      }}
                    >
                      <div className="team-player">
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("./assets/img/education.webp")}
                        ></img>
                        <h4 style={{ paddingTop: "0px" }} className="title">
                          Education
                        </h4>
                        <p className="category text-info">
                          <i>place where WE Learn to Learn</i>
                        </p>
                        <p style={{ color: `#444 !important` }}>
                          Completed my Schooling from Vanasthali Public School,
                          Mayur Vihar Phase 3. Second Year Engineering Student
                          Pursuing B.Tech. in Mathematics and Computing from{" "}
                          <a
                            href="http://dtu.ac.in"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Delhi Technological University
                          </a>{" "}
                          . Always keen to learn and evolve.
                        </p>
                      </div>
                    </Col>
                    <Col
                      lg="4"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 5px -6px",
                        marginBottom: "2.8rem",
                        borderRadius: "1.8rem",
                      }}
                    >
                      <div className="team-player">
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("./assets/img/skills.webp")}
                        ></img>
                        <h4 style={{ paddingTop: "0px" }} className="title">
                          Skills I know
                        </h4>
                        <p className="category text-info">
                          <i>What We learn and Implement</i>
                        </p>
                        <p style={{ padding: "1rem", color: "#444" }}>
                          <span
                            style={{
                              marginBottom: "1.4rem",
                              display: "inline-block",
                            }}
                          >
                            <mark>Competitive Coding</mark>: C++
                          </span>
                          <br />
                          <span
                            style={{
                              marginBottom: "1.4rem",
                              display: "inline-block",
                            }}
                          >
                            <mark>Web Designing</mark>: HTML, CSS
                          </span>
                          <br />
                          <span
                            style={{
                              marginBottom: "1.4rem",
                              display: "inline-block",
                            }}
                          >
                            <mark>Full Stack Web Development</mark>: Javascript,
                            Reactjs, Express, Nodejs, Graphql and MongoDb
                          </span>
                          <br />
                          <span
                            style={{
                              marginBottom: "1.4rem",
                              display: "inline-block",
                            }}
                          >
                            <mark>Video Editing</mark>: Wondershare Filmora,
                            Adobe Premiere Pro
                          </span>
                          <br />
                        </p>
                      </div>
                    </Col>
                    <Col
                      lg="4"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 5px -6px",
                        marginBottom: "2.8rem",
                        background: "white",
                        borderRadius: "2.8rem",
                      }}
                    >
                      <div className="team-player">
                        <img
                          alt="..."
                          className="img-fluid"
                          src={require("./assets/img/Experience.webp")}
                        ></img>
                        <h4 style={{ paddingTop: "0px" }} className="title">
                          Experiences and Memberships
                        </h4>
                        <p className="category text-info">
                          <i>Team Work I have Done</i>
                        </p>
                        <p style={{ color: `#444 !important` }}>
                          <span
                            style={{
                              marginBottom: "1.4rem",
                              display: "inline-block",
                            }}
                          >
                            WebD Core Team Member in <br />
                            <mark>Google Developers Student Club DTU</mark>
                            <a
                              href="https://dsc-dtu.github.io/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              (DSC-DTU)
                            </a>{" "}
                            .
                          </span>
                          <span
                            style={{
                              marginBottom: "1.4rem",
                              display: "inline-block",
                            }}
                          >
                            Took Part in <br />
                            <mark>MHRD</mark> Mega Online Challenge
                            <mark>SAMADHAN</mark>
                            <a
                              href="https://www.mic.gov.in/samadhan/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {" "}
                              Ideathon
                            </a>{" "}
                            .
                          </span>
                          <br />
                          <span>
                            Member of <mark>Engifest</mark> (DTU)
                          </span>
                        </p>
                      </div>
                    </Col>
                    <Col
                      style={{
                        background: "whitesmoke",
                        borderRadius: "1.9rem",
                        padding: "0rem 3rem 5rem 3rem",
                        marginTop: "1rem",
                        boxShadow:
                          "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                      }}
                    >
                      <div className="team-player">
                        <h4 className="title mb-5">
                          Languages I have Worked On
                        </h4>
                        <div className="progress-container">
                          <span className="progress-badge text-danger">
                            C++
                          </span>
                          <Progress
                            max="100"
                            value="80"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-danger">
                              80%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-default">
                            HTML
                          </span>
                          <Progress
                            max="100"
                            value="90"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-default">
                              90%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-info">CSS</span>
                          <Progress
                            max="100"
                            value="85"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-info">
                              85%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-warning">
                            Javascript
                          </span>
                          <Progress
                            max="100"
                            value="70"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-warning">
                              70%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-success">
                            Reactjs
                          </span>
                          <Progress
                            max="100"
                            value="75"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-success">
                              75%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-primary">
                            Express
                          </span>
                          <Progress
                            max="100"
                            value="75"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-primary">
                              75%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-info">
                            Nodejs
                          </span>
                          <Progress
                            max="100"
                            value="70"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-info">
                              70%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-danger">
                            MongoDB
                          </span>
                          <Progress
                            max="100"
                            value="75"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-danger">
                              75%
                            </span>
                          </Progress>
                        </div>
                        <div className="progress-container">
                          <span className="progress-badge text-default">
                            GraphQL
                          </span>
                          <Progress
                            max="100"
                            value="45"
                            style={{ height: "2px" }}
                          >
                            <span className="progress-value text-default">
                              45%
                            </span>
                          </Progress>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h3 className="title text-center">My Projects</h3>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        id="html"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i class="fab fa-html5"></i>
                      </NavLink>
                      <UncontrolledTooltip target="#html">
                        HTML, CSS based basic Projects
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        id="react"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i class="fab fa-react"></i>
                      </NavLink>
                      <UncontrolledTooltip target="#react">
                        React, Redux & Express Based Projects
                      </UncontrolledTooltip>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        id="node"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i class="fas fa-database"></i>
                      </NavLink>
                      <UncontrolledTooltip target="#node">
                        MERN Stack based Projects
                      </UncontrolledTooltip>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="12">
                    <Row className="collections">
                      <Col md="6">
                        <HoverCard
                          title="tekhin 2.0"
                          img={require("./assets/img/img7.webp")}
                          description="My Portfolio Website"
                          link="http://tekhin2.000webhostapp.com/"
                        />
                        <HoverCard
                          title="Brij Dental Clinic"
                          img={require("./assets/img/brij.webp")}
                          description="Front End Web Design"
                          link="https://brijdentalclinic.netlify.app/"
                        />
                      </Col>
                      <Col md="6">
                        <HoverCard
                          title="IMUN Website"
                          img={require("./assets/img/img8.webp")}
                          link="https://imun.netlify.app/"
                          description="Website for an internship task in IMUN"
                        />
                        <HoverCard
                          title="Pocket Education"
                          img={require("./assets/img/pocket.webp")}
                          description="Basic Record Management Portal"
                          link="http://pocketeducation.000webhostapp.com/"
                        />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="12">
                    <Row className="collections">
                      <HoverCard
                        className="m-1"
                        title="My Portfolio"
                        img={require("./assets/img/profile.webp")}
                        description="A Reactjs Based Portfolio Website."
                        link="#"
                      />
                      <Col md="6">
                        <HoverCard
                          title="Hi-Tube"
                          img={require("./assets/img/youtubeclone.webp")}
                          description="Reactjs Based Youtube Clone one can perform CRUD on Channels"
                          link="https://myyoutubeclone.herokuapp.com/"
                        />
                        <HoverCard
                          title="Youtube Fetcher"
                          img={require("./assets/img/youtubefetcher.webp")}
                          description="Reactjs Based App to access Videos and Channels from Youtube API"
                          link="https://youtubfetcher.herokuapp.com/"
                        />
                      </Col>
                      <Col md="6">
                        <HoverCard
                          title="Express Places"
                          img={require("./assets/img/expressplaces.webp")}
                          description="Expressjs based Portal for creating Styled Page of places, perform CRUD & add comments."
                          link="https://expressplaces.herokuapp.com/"
                        />
                        <HoverCard
                          title="Express ChatCord"
                          img={require("./assets/img/chatcord.webp")}
                          description="Expressjs Based App to access for RealTime Chatting using Socket.io"
                          link="https://expresschatapp.herokuapp.com/"
                        />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="12">
                    <Row className="collections">
                      <Col md="6">
                        <HoverCard
                          title="Event Booking App"
                          img={require("./assets/img/eventbooking.webp")}
                          description="Event Booking App built using MERN Stack and GraphQL"
                          link="https://myeventbookingapp.netlify.app/"
                        />
                        <HoverCard
                          title="Shopping List"
                          img={require("./assets/img/shoppinglist.webp")}
                          description="Todo List APP built using MERN Stack and Redux"
                          link="http://shoppingitems.herokuapp.com/"
                        />
                      </Col>
                      <Col md="6">
                        <HoverCard
                          title="Blog Website"
                          img={require("./assets/img/gatsbyblog.webp")}
                          description="A Blog Website built using Gatsby"
                          link="https://mygatsbyblogpost.netlify.app/"
                        />
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
            <div
              style={{
                width: "100%",
                padding: "3.8rem",
                textAlign: "center",
                background: `url(${imge}), linear-gradient(rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.3) 100%)`,
                boxSizing: "border-box",
                backgroundPosition: "center",
                boxShadow: "0 0 8px 8px white inset",
              }}
            >
              <p>How the Experience was? Interested, Then</p>
              <h3>Let's do Something amazing together.</h3>
              <h4>
                Stop 'bye' and say 'Hi', Or just drop a mail,
                <br />I will get back to you ASAP
              </h4>
              <p>" Willing To Meet You Soon "</p>
              <a
                href="mailto:hack.himanshu1024@gmail.com"
                target="_blank"
                style={{
                  color: "black",
                  fontSize: "2rem",
                  textDecoration: "underline",
                }}
              >
                <i class="fas fa-mail-bulk"></i>
              </a>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ProfilePage;
