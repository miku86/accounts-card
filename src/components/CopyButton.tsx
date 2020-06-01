import { IconButton } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

interface Props {
  text: string;
}

const CopyButton = ({ text }: Props) => (
  <CopyToClipboard text={text}>
    <IconButton aria-label="copy">
      <FileCopy />
    </IconButton>
  </CopyToClipboard>
);

export default CopyButton;
