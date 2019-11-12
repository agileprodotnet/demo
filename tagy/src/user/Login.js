import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from "mdbreact";
import "../pages/HomePage.css";
import SectionContainer from "../components/sectionContainer";


class Login extends React.Component {
    scrollToTop = () => window.scrollTo(0, 0);
    render() {
        return (
            <>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12" className="mt-4">
                            <MDBCol md="6" class="text-center">
                                <SectionContainer>
                                    <form>
                                        <p className="h5 text-center mb-4">Sign in</p>
                                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                            Your email
                                        </label>
                                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                            Your password
                                        </label>
                                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                                        <div className="text-center mt-4">
                                            <button className="btn btn-indigo" type="submit">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </SectionContainer>
                            </MDBCol>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}

export default Login;
