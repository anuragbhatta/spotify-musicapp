import React, { Component } from 'react';
import MyPlayer from './MyPlayer';

class AlbumDetails extends Component {

    state = {
        index: -1
    }

    msToMin = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    handlePlayTrack = (e, j) => {
        e.preventDefault();
        this.setState({
            index: j
        });
    }

    render() {

        console.log(this.props);

        return (
            <div>
                <h4 style={{ color: "white" }}>Album Details</h4>
                <img
                    class="card-img-top"
                    src={this.props.gotAnAlbumData.images[0].url}
                    alt="Card image"
                    style={{ maxWidth: "120px", height: "auto" }}
                />
                <p style={{ color: "white" }}>Release Date : {this.props.gotAnAlbumData.release_date}</p>
                <p style={{ color: "white" }}>Track No.    Track Name       Duration</p>
                {
                    this.props.gotAnAlbumData.tracks.items.map((track, j) => {
                        return (
                            <div>
                                <p onClick={(e) => { this.handlePlayTrack(e, j) }} style={{ color: "white" }}>{j + 1} : {track.name} {this.msToMin(track.duration_ms)}</p>
                                {
                                    this.state.index === j
                                        ?
                                        (
                                            // <audio className="audio-element">
                                            //     {/* <source src={track.external_urls.spotify}></source> */}
                                            //     <source src={track.preview_url}></source>
                                            // </audio>
                                            // <div>{track.external_urls.spotify}</div>
                                            <MyPlayer url={track.preview_url}/>
                                        )
                                        :
                                        null
                                }
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default AlbumDetails;
