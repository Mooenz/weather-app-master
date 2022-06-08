import React from 'react';

// Styles
import { Container } from './styles';

let options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0,
};

function success(pos) {
  let crd = pos.coords;

  console.log(
    `Your current position is: lan ${crd.latitude}, lon ${crd.longitude}`
  );

  console.log({crd});
}

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);

const index = () => {
  return (
    <Container>
      created by <span>Mooenz</span> - devChallenges.io
    </Container>
  );
};

export default index;
