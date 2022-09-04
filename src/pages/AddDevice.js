import React, { Component } from "react";
import axios from "axios";
import AppWrapper from "../wrapper/AppWrapper";
import Button from "react-bootstrap/Button";
import PageHeading from "../components/PageHeading/PageHeading";
import newDetailCard from "../pages/newDetaildCard"

class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: "",
      device: "",
    };
  }

  componentDidMount() {
    var token = localStorage.getItem("token");
    this.setState({ userToken: token });
    console.log("token : " + this.state.userToken);
  }

  handleChange = (event) => {
    this.setState({ device: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      device: this.state.device,
      email: this.state.userToken,
    };

    localStorage.setItem("device", user.device);

    if (user.device === "") {
      console.log("Enter Device");
      alert("Enter Device");
    } else if (user.email === "") {
      console.log("Please Login First");
      alert("Please Login First");
    } else {
      axios
        .post(`https://app.maddashes.com:5000/api/addDevice/`, user)
        .then((res) => {
          if (res.status === 200) {
            console.log("Device Added Successfully");
            alert("Device Added Successfully");
          } else {
            alert("Signup Failed");
          }
          console.log(res);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  };


  render() {
    return (
      <>
        <div className="container-fluid">
          <PageHeading title={"Devices"} />
        </div>
        <div className="container mt-5">
          <div className="row">
            <newDetailCard
              title1={"Instructions to add a device"}
              desc1={"my name is khan"}
            />
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Enter your SSID</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                />
                <Button type="submit" variant="primary" className="mt-4">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>

        
      </>
    );
  }
}

export default AppWrapper(AddDevice);
