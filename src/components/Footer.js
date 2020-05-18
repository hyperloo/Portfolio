/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a href="https://twitter.com/himansh42304464" target="_blank">
                Himanshu
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/himanshu-singh-1b8009176/"
                target="_blank"
              >
                About ME
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Made with{" "}
          <i class="fas fa-heart" style={{ color: "red" }}></i> by{" "}
          <a href="https://github.com/hyperloo" target="_blank">
            tekhin
          </a>{" "}
          |{" "}
          <a href="#" target="_blank">
            Himanshu
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
