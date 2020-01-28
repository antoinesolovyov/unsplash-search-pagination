import React, { useState } from "react";

import "./Header.css";

export default function Header(props) {
  return <header>{props.children}</header>;
}
