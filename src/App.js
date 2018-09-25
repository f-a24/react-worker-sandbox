import React, { Fragment } from "react";
import styled from "styled-components";
import { compose, withStateHandlers, lifecycle } from "recompose";
import { SketchPicker } from "react-color";
import Worker from "./worker.js";

const worker = new Worker();

export default compose(
  withStateHandlers(
    {
      color: {
        main: "#000",
        sub: {
          "1": {},
          "2": {},
          "3": {},
          "4": {},
          "5": {},
          "6": {},
          "7": {}
        }
      }
    },
    {
      colorHandle: ({ color }) => v => ({ color: Object.assign({}, color, v) })
    }
  ),
  lifecycle({
    componentDidMount() {
      worker.addEventListener("message", message => {
        this.props.colorHandle({
          sub: Object.assign({}, this.props.color.sub, message.data)
        });
      });
    },
    componentDidUnmount() {
      worker.terminate();
    }
  })
)(({ color, colorHandle }) => (
  <Area>
    <SketchPicker
      color={color.main}
      onChange={c => {
        colorHandle({ main: c.hex });
        Object.keys(color.sub).forEach(n => {
          worker.postMessage({ n: n, main: c.hex });
        });
      }}
    />
    <div>
      {Object.keys(color.sub).map(n => (
        <div key={n}>
          <Panel color={color.main} />
          {Object.keys(color.sub[n]).map(k => (
            <Panel key={k} color={color.sub[n][k]} />
          ))}
        </div>
      ))}
    </div>
  </Area>
));

const Area = styled.div`
  display: flex;
`;

const Panel = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 0.5rem;
  background-color: ${({ color }) => color || "#000"};
`;
