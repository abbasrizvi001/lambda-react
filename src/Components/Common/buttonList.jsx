import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";


export default function ButtonList(props) {
  const [selectedButton, setSelectedButton] = useState([]);

  function isChecked(item) {
    return selectedButton.includes(item);
  }

  function isselectedButton(item) {
    if (selectedButton.includes(item)) {
      const uncheckedButton = selectedButton.filter((e) => e !== item);
      setSelectedButton(uncheckedButton);
    } else {
      const newSelected = [...selectedButton, item];
      setSelectedButton(newSelected);
    }
  }

  const defaultButtonList = props.listToIterate.map((item, index) => {
    const checkedButton = isChecked(item);
    return (
      <Grid item xs={12} key={item + index}>
        <Button
          id={item}
          onClick={() => isselectedButton(item)}
          fullWidth
          variant="contained"
          color={checkedButton ? "secondary" : "primary"}
          endIcon={checkedButton ? props.endIconButton1 : props.endIconButton2}
        >
          {item}
        </Button>
      </Grid>
    );
  });

  return defaultButtonList;
}
