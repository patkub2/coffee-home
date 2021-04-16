import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const Div = styled.div`
  // border: 1px solid red; /* BORDER TEST*/
`;

const useStyles = makeStyles({
  root: {
    width: 300,
    color: "#000000",
  },
});
const AirbnbSlider = withStyles({
  root: {
    color: "#000000",
    height: 3,
    padding: "13px 0",
  },

  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#E6E6E6",
    opacity: 1,
    height: 3,
  },
})(Slider);

export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([10, 100]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
    props.value(value);
    console.log(newValue);
  };
  return (
    <Div>
      <div className={classes.root}>
        <AirbnbSlider
          color="primary"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
        />
      </div>
    </Div>
  );
}
