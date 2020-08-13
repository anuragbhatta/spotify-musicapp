import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { FcMusic } from "react-icons/fc";
import { GiRingedPlanet } from "react-icons/gi";
import { GiMicrophone } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiInbox } from "react-icons/fi";
import { AiOutlineSetting } from "react-icons/ai";


import { getAuthTokenAction } from "../../actions/getAuthTokenAction";
import { getAnAlbumAction } from "../../actions/getAnAlbumAction";
import { searchAction } from "../../actions/searchAction";
import SearchedList from "./SearchedList";
import AlbumDetails from "./AlbumDetails";


export class HomePage extends Component {

  state = {
    query: null
  };
  
  componentDidMount = () => {
    let payload = {
      clientID : '3ac30f96b5ff43f5a3b37fdef51396ee',
      clientSecret : 'f298d99ed4334a75b3d2a5e6b31fc302'
    }
    this.props.getAuthTokenAction(payload);
    // console.log(result);
  }

  handleGetAlbum = (e) => {
    e.preventDefault();
    let payload = {
      albumID : '77jAfTh3KH9K2reMOmTgOh'
    }
    this.props.getAnAlbumAction(payload);
  }

  handleSearch = (e) => {
    e.preventDefault();
    let payload = {
      query: this.state.query
    }
    this.props.searchAction(payload);
  }

  handleQuery = (e) => {
    e.preventDefault();
    this.setState({
      query: e.target.value
    })
  }


  render() {
    console.log(this.props);
    let { gotAuthToken, gotAuthTokenData } = this.props.getAuthTokenReducer;
    let { searched, searchedData } = this.props.searchReducer;

    if(gotAuthToken === true && gotAuthTokenData.access_token !== null && gotAuthTokenData.access_token !== undefined){
      sessionStorage.setItem('authToken', gotAuthTokenData.access_token);
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            {/* left pane */}
            <div
              className="col-sm-3 col-md-2"
              style={{ backgroundColor: "#2c314a", padding: "0px" }}
            >
              <div
                className="navigationLyou text-center pt-5 pb-5"
                style={{ backgroundColor: "#2c314a", padding: "0px" }}
              >
                <a
                  href="#"
                  className="text-warning text-xl"
                  style={{ fontSize: "22px" }}
                >
                  HIWOW
                </a>
                <div className="pt-5">
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        <FcMusic style={{ marginRight: "13px" }} size={25} />
                        Music
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        <GiRingedPlanet
                          style={{ marginRight: "13px" }}
                          size={25}
                        />
                        Find
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        <GiMicrophone
                          style={{ marginRight: "13px" }}
                          size={25}
                        />
                        Singer
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        <AiFillStar style={{ marginRight: "13px" }} size={25} />
                        collection
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="pt-5 pb-5">
                  <ul class="nav flex-column">
                    <h4 className="text-white">Song List</h4>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        <span className="mr-4">-</span> Favourite Music
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        <span className="mr-4">-</span> Pop Music
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#">
                        <span className="mr-4">-</span> BGM Music
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
{/* mid pane */}
            <div
              className="col-sm-6 col-md-7"
              style={{ backgroundColor: "#191e3b", padding: "0px" }}
            >
              <div className="col-10">
                <form>
                  <div
                    className="input-group mb-3 mt-3 ml-5 mr-5"
                  >
                    <input
                      type="text"
                      className="form-control pl-3"
                      placeholder="Search"
                      value={this.state.query}
                      style={{
                        backgroundColor: "#2c314a",
                        padding: "0px",
                        border: "none",
                        color: "#ffffff"
                      }}
                      onChange={(e)=>{this.handleQuery(e)}}
                    />
                    <div class="input-group-append" onClick={(e)=>{this.handleSearch(e)}}>
                      <span
                        class="input-group-text text-white border-0"
                        style={{ backgroundColor: "#2c314a" }}
                      >
                        <BsSearch size={23} />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div onClick={(e)=>{this.handleGetAlbum(e)}} >
                <img
                  src={
                    "https://media4.s-nbcnews.com/j/newscms/2020_20/3347736/200512-travis-mcready-mn-0900_13b2f50787ccc2777558c8c6b9a11ce9.fit-760w.jpg"
                  }
                  alt="pic1"
                  style={{ width: "315px",height:"180px", position: "relative", left: "27%" }}
                />
              </div>

              <div className="d-flex justify-content-between px-4 mt-4 pb-2">
                <div>
                  <h5 className="text-white">Recommended album</h5>
                </div>
                <div>
                  <select
                    className="px-3 text-white border-0"
                    style={{ backgroundColor: "#2c314a" }}
                  >
                    <option className="text-white">Pop</option>
                    <option className="text-white">Jazz</option>
                    <option className="text-white">Hip-hop</option>
                  </select>
                </div>
              </div>

                <SearchedList
                  searchedData={searchedData}
                  searched={searched}
                />
                

              <div className="mt-3">
                <h5 className="text-white px-4">Recommended artist</h5>
              </div>
              <div className="d-flex justify-content-between px-4">
                <div>
                  <div>
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR436K6zkcuFixGAl9ZrIh6_Fohubb4Yd3QrA&usqp=CAU"
                      }
                      className="rounded-circle"
                      height={"95px"}
                      width={"100px"}
                    />
                  </div>
                  <p className="text-center" style={{ color: "#cdcfd1" }}>
                    Enrique
                  </p>
                </div>
                <div>
                  <div>
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfuqHUJ5uJGc7IVIyYCMCN2edmtRet83or3A&usqp=CAU"
                      }
                      className="rounded-circle"
                      height={"95px"}
                      width={"100px"}
                    />
                  </div>
                  <p className="text-center" style={{ color: "#cdcfd1" }}>
                    Lady Gaga
                  </p>
                </div>
                <div>
                  <div>
                    <img
                      src={
                        "data:image/jpeg;base64,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"
                      }
                      className="rounded-circle"
                      height={"95px"}
                      width={"100px"}
                    />
                  </div>
                  <p className="text-center" style={{ color: "#cdcfd1" }}>
                    Arijit
                  </p>
                </div>
                <div>
                  <div>
                    <img
                      src={
                        "data:image/jpeg;base64,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"
                      }
                      className="rounded-circle"
                      height={"95px"}
                      width={"100px"}
                    />
                  </div>
                  <p className="text-center" style={{ color: "#cdcfd1" }}>
                    Zayn
                  </p>
                </div>
                <div>
                  <div>
                    <img
                      src={
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjoSm4PpP7BUT39IllyWn4z1bOMpik-9efLA&usqp=CAU"
                      }
                      className="rounded-circle"
                      height={"95px"}
                      width={"100px"}
                    />
                  </div>
                  <p className="text-center" style={{ color: "#cdcfd1" }}>
                    Stone
                  </p>
                </div>
              </div>
            </div>
            {/* <right-pane> */}
            <div
              className="col-sm-3 col-md-3 pt-3 px-4"
              style={{ backgroundColor: "#191e3b" }}
            >
              <div className="d-flex justify-content-start">
                <div>
                  <img
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    className="rounded-circle"
                    height={"35px"}
                    width={"40px"}
                  />
                </div>
                <div>
                  <p className="text-white pl-2">Anurag Bhatta</p>
                  {/* <p className="text-white">No Record</p/> */}
                </div>
                <div>
                  <FiInbox className="text-white ml-5" size={25} />
                </div>
                <div>
                  <AiOutlineSetting className="text-white ml-2" size={25} />
                </div>
              </div>

              <div className="mt-4 mb-4">
                <h5 className="text-white">Weekly List</h5>
              </div>
              <div>
                <ol class="nav flex-column ">
                  <li class="nav-item">
                    <a class="nav-link" href="#" style={{color:"#bbbdbf",lineHeight:"1"}} >
                      <span className="pr-3">1</span>Love me like you do
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link bg-warning" href="#" style={{color:"#bbbdbf",lineHeight:"1"}}>
                    <span className="pr-3">2</span>Love me like you do
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" style={{color:"#bbbdbf",lineHeight:"1"}}>
                    <span className="pr-3">3</span>Love me like you do
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" style={{color:"#bbbdbf",lineHeight:"1"}}>
                    <span className="pr-3">4</span>Love me like you do
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#" style={{color:"#bbbdbf",lineHeight:"1"}}>
                    <span className="pr-3">5</span>Love me like you do
                    </a>
                  </li>
                </ol>
              </div>

              <div className="mt-4">
                <h5 className="text-white">Sales support</h5>
              </div>

              <div className="d-flex justify-content-start mb-3">
                <div>
                  <img src={"data:image/jpeg;base64,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"} 
                  width={"75px"} height={"65px"} />
                </div>
                <div className="text-white pl-4" style={{backgroundColor: "#2c314a", width:"100%"}}>
                  <p className="p-0 m-0">Hawana</p>
                  <p className="p-0 m-0" style={{fontSize:"12px", color:"#7a7c7d"}}>Columbia</p>
                  <p className="p-0 m-0" style={{fontSize:"14px",}}>$ 23</p>
                 </div>
              </div>

              <div className="d-flex justify-content-start mb-3">
                <div>
                  <img src={"data:image/jpeg;base64,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"} 
                  width={"75px"} height={"65px"} />
                </div>
                <div className="text-white pl-4" style={{backgroundColor: "#2c314a", width:"100%"}}>
                  <p className="p-0 m-0">Hawana</p>
                  <p className="p-0 m-0" style={{fontSize:"12px", color:"#7a7c7d"}}>Columbia</p>
                  <p className="p-0 m-0" style={{fontSize:"14px",}}>$ 23</p>
                 </div>
              </div>

              <div className="d-flex justify-content-start mb-3">
                <div>
                  <img src={"data:image/jpeg;base64,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"} 
                  width={"75px"} height={"65px"} />
                </div>
                <div className="text-white pl-4" style={{backgroundColor: "#2c314a", width:"100%"}}>
                  <p className="p-0 m-0">Hawana</p>
                  <p className="p-0 m-0" style={{fontSize:"12px", color:"#7a7c7d"}}>Columbia</p>
                  <p className="p-0 m-0" style={{fontSize:"14px",}}>$ 23</p>
                 </div>
              </div>

              <div className="text-white text-center" style={{backgroundColor: "#2c314a"}}>
                <p>View All </p>
              </div>

            </div>
            {/* end of right pane */}
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAuthTokenAction,
    getAnAlbumAction,
    searchAction
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
