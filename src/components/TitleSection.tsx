import React from "react";
import Row from "react-bootstrap/Row";

export default function TitleSection(props) {
    return (
        <Row {...props} className={"justify-content-md-center " + props.className} style={{...props.style, minHeight: "15vh"}}>
            {props.children}
        </Row>
    );
}
