import React from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { SketchPicker } from 'react-color';
import Worker from './worker.js';

const worker = new Worker();

export default compose(
  withStateHandlers(
  {
    color: {
      main: '#000',
      sub1: '#000',
      sub2: '#000',
      sub3: '#000',
      sub4: '#000',
      sub5: '#000'
    }
  },
  {
    colorHandle: ({ color }) => v => ({ color: Object.assign({}, color, v)})
  }),
  lifecycle({
    componentDidMount() {
      worker.addEventListener('message', message => {
        this.props.colorHandle({ main: message.data });
      });
    },
    componentDidUnmount() {
      worker.terminate();
    }
  })
  )(({
    color,
    colorHandle
  }) => (
  <div>
    <StyledSketch color={color.main} onChange={c => {
      worker.postMessage(c.rgb);
    }} />
    {Object.keys(color).map(k => <Panel key={k} color={color[k]} />)}
  </div>
));

const StyledSketch = styled(SketchPicker)`
  display: inline-block;
`;

const Panel = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 1rem;
  background-color: ${({color}) => color};
`;
