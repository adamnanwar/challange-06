import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const iconSize = 40;

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <h4 className="text-danger fw-bold">Movielist</h4>
        </div>

        <div>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#3b5998",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaFacebookF color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#1DA1F2",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaTwitter color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#DB4437",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaGoogle color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#E4405F",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaInstagram color="white" />
          </Button>
          <Button
            className="me-3"
            style={{
              backgroundColor: "#0077B5",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaLinkedin color="white" />
          </Button>
          <Button
            className="me-4"
            style={{
              backgroundColor: "#24292e",
              width: iconSize,
              height: iconSize,
              borderRadius: "50%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
            href="/"
          >
            <FaGithub color="white" />
          </Button>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://react.com/">
          www.react.com
        </a>
      </div>
    </MDBFooter>
  );
}
