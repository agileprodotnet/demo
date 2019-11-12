import React from "react";
import {
    MDBEdgeHeader,
    MDBFreeBird,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBAnimation,
    MDBNavLink
} from "mdbreact";
import "./HomePage.css";

class Login extends React.Component {
    scrollToTop = () => window.scrollTo(0, 0);
    render() {
        return (
            <>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12" className="mt-4">
                            Login page
                            </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}

export default Login;
