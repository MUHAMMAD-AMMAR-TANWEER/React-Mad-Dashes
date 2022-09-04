import React, { Component } from "react";

import AppWrapper from "../wrapper/AppWrapper";
import PageHeading from "../components/PageHeading/PageHeading";
import CardBox from "../components/CardBox/CardBox";



const cardBoxContent=[
  {
    id:0,
    title:"Add Device",
    url:"/addDevice",
    classTitle:"primary",
    iconName:"fa-solid fa-microchip",
    viewText:"ACE"
  },
  {
    id:1,
    title:"Play Schedule",
    url:"/laserSchedule",
    classTitle:"success",
    iconName:"fa-table",
    viewText:"ACE!"
  },
  {
    id:2,
    title:"Draw",
    url:"/draw",
    classTitle:"info",
    iconName:"fa-chart-area",
    viewText:"ACE2"
  }
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: "",
    };
  }

  componentDidMount() {
    var token = localStorage.getItem("token");
    this.setState({ userToken: token });
    console.log("token : " + this.state.userToken);
  }


  render() {
    return (
      <>
        <div className="container-fluid">
          <PageHeading title={"Dashboard"} />
        </div>

        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-center">
                <h6 className="m-0 font-weight-bold text-primary text-center">
                  <span className="text-gray-800">User</span>:{" "}
                  {this.state.userToken}
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {
            cardBoxContent.map((data,index)=><CardBox 
            title={data.title}
            url={data.url}
            classTitle={data.classTitle}
            iconName={data.iconName} 
            viewText={data.viewText}
            key={index}
            />)
          }
         
        </div>

       
      </>
    );
  }
}

export default AppWrapper(Home);
