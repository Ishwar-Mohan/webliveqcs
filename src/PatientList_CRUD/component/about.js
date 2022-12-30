import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
//import CardDeck from "react-bootstrap/CardDeck";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Col } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa";
//import CardColumns from "react-bootstrap/CardColumns";
import cards from "./card.css";

class About extends React.Component {
  render() {
    const style1 = {
      backgroundColor: "rgba(51, 204, 204, 0.7000)",
      padding: "30px",
      // width:'900px',
      borderRadius: "90px",
      color: "black",
    };

    return (
      <body style={style1}>
        <div class="main" className="animate__animated animate__fadeInDown">
          <div class="card">
            <div class="image">
              <img src="kapil.jpg" />
            </div>

            <div class="des">
              <Card.Title>Kapil Thakre</Card.Title>
              <Card.Text>
                <p>
                  <strong>Designation : </strong>CDAC Trainee{" "}
                </p>
                <p>
                  <strong>Contact : </strong>9860631460
                </p>
              </Card.Text>
              <hr />
              <a href="facebook">
                <FaFacebook size={25} style={{ fill: "#4267B2" }} />
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineInstagram size={25} style={{ fill: "#bc2a8d" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineTwitter size={25} style={{ fill: "#00acee" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>

          <div class="card">
            <div class="image">
              <img src="ishwar.jpg" />
            </div>

            <div class="des">
              <Card.Title>Ishwar Mohan</Card.Title>
              <Card.Text>
                <p>
                  <strong>Designation : </strong>CDAC Trainee{" "}
                </p>
                <p>
                  <strong>Contact : </strong>9860631460{" "}
                </p>
              </Card.Text>
              <hr />
              <a href="facebook">
                <FaFacebook size={25} style={{ fill: "#4267B2" }} />
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineInstagram size={25} style={{ fill: "#bc2a8d" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineTwitter size={25} style={{ fill: "#00acee" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>

          <div class="card">
            <div class="image">
              <img src="Monika.jpg" />
            </div>

            <div class="des">
              <Card.Title>Monika Dongale</Card.Title>
              <Card.Text>
                <p>
                  <strong>Designation : </strong>CDAC Trainee{" "}
                </p>
                <p>
                  <strong>Contact : </strong>9676933850{" "}
                </p>
              </Card.Text>
              <hr />
              <a href="facebook">
                <FaFacebook size={25} style={{ fill: "#4267B2" }} />
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineInstagram size={25} style={{ fill: "#bc2a8d" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineTwitter size={25} style={{ fill: "#00acee" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>

          <div class="card">
            <div class="image">
              <img src="priyanka.jpg" />
            </div>

            <div class="des">
              <Card.Title>Priyanka Gire</Card.Title>
              <Card.Text>
                <p>
                  <strong>Designation : </strong>CDAC Trainee{" "}
                </p>
                <p>
                  <strong>Contact : </strong>9860631460{" "}
                </p>
              </Card.Text>
              <hr />
              <a href="facebook">
                <FaFacebook size={25} style={{ fill: "#4267B2" }} />
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineInstagram size={25} style={{ fill: "#bc2a8d" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="instagram">
                <AiOutlineTwitter size={25} style={{ fill: "#00acee" }} />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default About;
