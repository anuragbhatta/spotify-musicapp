import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getAnAlbumAction } from "../../actions/getAnAlbumAction";
import AlbumDetails from './AlbumDetails';


class SearchedList extends Component {

    state = {
        i: -1
    };

    handleAlbumDetails = (e, id, i) => {
        e.preventDefault();
        let payload = {
            albumID: id
        };
        this.props.getAnAlbumAction(payload);
        this.setState({
            i: i
        });
    }


    render() {
        console.log(this.props);
        let { gotAnAlbum, gotAnAlbumData } = this.props.getAnAlbumReducer;

        return (
            <div className="d-flex justify-content-between px-4">
                {
                    this.props.searched === false || this.props.searchedData === null || this.props.searchedData === undefined || this.props.searchedData.length < 1
                        ?
                        (
                            <Fragment>
                                <div
                                    class="card border-0"
                                    style={{ width: "112px", height: "155px" }}
                                >
                                    <img
                                        class="card-img-top"
                                        src="https://img.huffingtonpost.com/asset/5cec69712400003400854c94.jpeg?ops=scalefit_720_noupscale"
                                        alt="Card image"
                                        style={{ height: "70%" }}
                                    />
                                    <div
                                        class="card-body p-1"
                                        style={{ backgroundColor: "#2c314a" }}
                                    >
                                        <p class="card-title m-0 p-0" style={{ color: "#cdcfd1" }}>
                                            Nice For what
                    </p>
                                        <p
                                            class="card-text"
                                            style={{ fontSize: "12px", color: "#cdcfd1" }}
                                        >
                                            Some
                    </p>
                                    </div>
                                </div>
                                <div
                                    class="card border-0"
                                    style={{ width: "112px", height: "155px" }}
                                >
                                    <img
                                        class="card-img-top"
                                        src="https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/carley-pearce-ap-1537810542.jpg?crop=1.00xw:1.00xh;0,0&resize=900:*"
                                        alt="Card image"
                                        style={{ height: "70%" }}
                                    />
                                    <div
                                        class="card-body p-1"
                                        style={{ backgroundColor: "#2c314a" }}
                                    >
                                        <p class="card-title m-0 p-0" style={{ color: "#cdcfd1" }}>
                                            You Tricked
                    </p>
                                        <p
                                            class="card-text"
                                            style={{ fontSize: "12px", color: "#cdcfd1" }}
                                        >
                                            Lilly
                    </p>
                                    </div>
                                </div>

                                <div
                                    class="card border-0"
                                    style={{ width: "112px", height: "155px" }}
                                >
                                    <img
                                        class="card-img-top"
                                        src="data:image/jpeg;base64,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"
                                        alt="Card image"
                                        style={{ height: "70%" }}
                                    />
                                    <div
                                        class="card-body p-1"
                                        style={{ backgroundColor: "#2c314a" }}
                                    >
                                        <p class="card-title m-0 p-0" style={{ color: "#cdcfd1" }}>
                                            Look Alive
                    </p>
                                        <p
                                            class="card-text"
                                            style={{ fontSize: "12px", color: "#cdcfd1" }}
                                        >
                                            Annie
                    </p>
                                    </div>
                                </div>

                                <div
                                    class="card border-0"
                                    style={{ width: "112px", height: "155px" }}
                                >
                                    <img
                                        class="card-img-top"
                                        src="https://images.desimartini.com/media/external/56336-Arijit-Poll-copy.jpg"
                                        alt="Card image"
                                        style={{ height: "70%" }}
                                    />
                                    <div
                                        class="card-body p-1"
                                        style={{ backgroundColor: "#2c314a" }}
                                    >
                                        <p class="card-title m-0 p-0" style={{ color: "#cdcfd1" }}>
                                            Parody
                    </p>
                                        <p
                                            class="card-text"
                                            style={{ fontSize: "12px", color: "#cdcfd1" }}
                                        >
                                            Caira
                    </p>
                                    </div>
                                </div>
                                <div
                                    class="card border-0"
                                    style={{ width: "120px", height: "155px" }}
                                >
                                    <img
                                        class="card-img-top"
                                        src="https://www.gulftoday.ae/-/media/gulf-today/images/articles/culture/2020/3/8/neha1.ashx?h=400&w=750&hash=1A69789A9D712F90B24E97723B89414A"
                                        alt="Card image"
                                        style={{ height: "70%" }}
                                    />
                                    <div
                                        class="card-body p-1"
                                        style={{ backgroundColor: "#2c314a" }}
                                    >
                                        <p class="card-title m-0 p-0" style={{ color: "#cdcfd1" }}>
                                            Paradise
                    </p>
                                        <p
                                            class="card-text"
                                            style={{ fontSize: "12px", color: "#cdcfd1" }}
                                        >
                                            BillyJean
                    </p>
                                    </div>
                                </div>
                            </Fragment>
                        )
                        :
                        (
                            <div>
                                {
                                    this.props.searchedData.albums.items.slice(0, 4).map((album, i) => {
                                        return (
                                            <Fragment>
                                                <div
                                                    class="card border-0"
                                                    style={{ width: "120px", height: "155px" }}
                                                    onClick={(e) => { this.handleAlbumDetails(e, album.id, i) }}
                                                >
                                                    <img
                                                        class="card-img-top"
                                                        src={album.images[0].url}
                                                        alt="Card image"
                                                        style={{ height: "60%" }}
                                                    />
                                                    <div
                                                        class="card-body p-1"
                                                        style={{ backgroundColor: "#2c314a" }}
                                                    >
                                                        <p class="card-title m-0 p-0" style={{ color: "#cdcfd1" }}>
                                                            {album.name}
                                                        </p>
                                                        <p
                                                            class="card-text"
                                                            style={{ fontSize: "12px", color: "#cdcfd1" }}
                                                        >
                                                            {album.artists.name}
                                                        </p>
                                                    </div>
                                                </div>
                                                {
                                                    (gotAnAlbum === false || gotAnAlbumData === null || gotAnAlbumData === undefined || this.state.i !== i)
                                                        ?
                                                        null
                                                        :
                                                        <AlbumDetails
                                                            gotAnAlbumData={gotAnAlbumData}
                                                        />
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getAnAlbumAction
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchedList));
