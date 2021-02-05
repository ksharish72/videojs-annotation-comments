import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import AnnotationComments from "@contently/videojs-annotation-comments";
import { v4 as uuidv4 } from 'uuid';


export default class VideoPlayer extends React.Component {
  componentDidMount() {
    //register plugin
    videojs.registerPlugin("annotationComments", AnnotationComments(videojs));
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
    var annotations = [
      {
        id: uuidv4(),
        range: {
          start: 55,
          end: 60
        },
        shape: {
          x1: 23.47,
          y1: 9.88,
          x2: 60.83,
          y2: 44.2
        },
        comments: [
          {
            id: uuidv4(),
            meta: {
              datetime: "2017-03-28T19:17:32.238Z",
              user_id: 1,
              user_name: "Jack Pope"
            },
            body:
              'Is the "Stories API" the only API we want to highlight here? It makes the system feel a little limited, even though we have robust functionality and multiple APIs'
          }
        ]
      },
      {
        range: {
          start: 65,
          stop: null
        },
        shape: {
          x1: 0.97,
          y1: 65.19,
          x2: 36.25,
          y2: 97.28
        },
        comments: [
          {
            id: "2854a682-ffdf-78a4-796d-22abb6d9cac3",
            meta: {
              datetime: "2017-03-28T19:18:25.485Z",
              user_id: 2,
              user_name: "Evan Carothers"
            },
            body: "Can we replace this logo with Microsoft?"
          },
          {
            id: uuidv4(),
            meta: {
              datetime: "2017-03-29T00:18:25.485Z",
              user_id: 1,
              user_name: "Jack Pope"
            },
            body:
              "Great idea Evan, that's a SUPER recognizable brand!\n\nAny other major company brands we are missing in this shot?"
          }
        ]
      },
      {
        range: {
          start: 100,
          end: null
        },
        shape: null,
        comments: [
          {
            id: "e0b9787b-fbe7-f1e9-5134-d0eb69a783aa",
            meta: {
              datetime: "2017-03-28T19:21:41.351Z",
              user_id: 1,
              user_name: "Jack Pope"
            },
            body:
              "Can we have a music change for this final section that transitions towards the final frame? Some sweet heavy rock 80s ballad?"
          }
        ]
      },
      {
        range: {
          start: 21,
          end: 61
        },
        shape: null,
        comments: [
          {
            id: "e0b9787b-fbe7-f1e9-5134-d0eb69a783aa",
            meta: {
              datetime: "2017-03-28T19:21:41.351Z",
              user_id: 2,
              user_name: "Evan Carothers"
            },
            body:
              "The music is a little loud through this section and distracts from the content and narration a bit - can we tone 'er down a couple nocks here?"
          }
        ]
      }
    ];
    const annotationPluginOptions = {
      annotationsObjects: annotations,
      bindArrowKeys: true,
      meta: {
        user_id: 2,
        user_name: "John Smith",
      },
      showControls: true,
      showCommentList: true,
      showFullScreen: true,
      startInAnnotationMode: true,
      showMarkerShapeAndTooltips: true,
    };
    this.annotationPlugin = this.player.annotationComments(
      annotationPluginOptions
    );
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js"
          ></video>
        </div>
      </div>
    );
  }
}
