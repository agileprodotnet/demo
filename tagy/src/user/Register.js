import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from "mdbreact";
import "../pages/HomePage.css";
import SectionContainer from "../components/sectionContainer";


export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }



    submitHandler = (e) => {
        e.preventDefault();
        console.warn(this.state);
    }

    scrollToTop = () => window.scrollTo(0, 0);

    render() {
        const { name, email, password } = this.state
        return (

            <>
                <MDBContainer>
                    <MDBRow>
                        <SectionContainer header="Register" className="row" noBorder>
                            <MDBCol md="6">
                                <SectionContainer>
                                    <form onSubmit={this.submitHandler}>
                                    <p className="h5 text-center mb-4">Sign up</p>
                                    <label className="grey-text">
                                        Your name
                                        </label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={this.changeHandler} />
                                    <br />
                                    <label className="grey-text">
                                        Your email
                                        </label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={this.changeHandler} />
                                    <br />
                                    <label className="grey-text">
                                        Your password
                                        </label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={this.changeHandler} />
                                    <div className="text-center mt-4">
                                        <button className="btn btn-indigo">Register</button>
                                    </div>
                                    </form>
                                </SectionContainer>
                            </MDBCol>
                        </SectionContainer>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}
