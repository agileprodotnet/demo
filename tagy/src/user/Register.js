import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBBtn
} from "mdbreact";
import "../pages/HomePage.css";
import SectionContainer from "../components/sectionContainer";


export default class Register extends React.Component {
    
    constructor(){
        super();
        this.postData = this.postData.bind(this);
        this.userDetails = {
            FirstName:  "",
            LastName: "",
            EmailId: "",
            Address1: "",   
            Address2: "",
            City: "",
            State: "",
            Country: "",
            Phone: ""
        };
    }

    scrollToTop = () => window.scrollTo(0, 0);    

    // Validate First and Last names
    validateName(e) {
        if (!e.target.value.match(/^[a-zA-Z]+$/)) {
            alert((e.target.id=="firstName")?"Invalid First Name":"Invalid Last Name");
        }
    }
 
    //validation for email
    validateEmail(e) {
        if (!e.target.value.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)) {
            alert('wrong');
        }
    }

     //validation for strong password
     validateStrongPassword(e) {
        if(!e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            alert('Password should have Minimum eight characters, at least one letter and one number');
        }
    }
 
    //validation for confirm password
    validateConfirmPassword(e) {
    var password = document.getElementById("password").value;
    if (password == '') {
        alert('enter password');
    } else {
        if(password != e.target.value ) {
            alert('password mismatch');
        }
    }
    }

    // Validate Mobile Number
    validateMobileNumber(e){
        var contactNumber=e.target.value;
        if((!contactNumber.match(/^[0-9]*$/)) || contactNumber.length>10){
        alert("Invalid Contact Number");
        }
    }

    // Post the form data
    postData(e){        
        this.userDetails = {
            FirstName:  document.getElementById("firstName").value,
            LastName: document.getElementById("lastName").value,
            EmailId: document.getElementById("emailId").value,
            Address1: document.getElementById("address1").value,
            Address2: document.getElementById("address2").value,
            City: document.getElementById("city").value,
            State: document.getElementById("state").value,
            Country: document.getElementById("country").value,
            Phone: document.getElementById("contactNumber").value
        };
        console.log(this.userDetails);
    }


    render() {
        return (
            <>
                <MDBContainer>
                    <MDBRow>
                        <SectionContainer header="Register" className="row" noBorder>
                            <MDBCol md="6">
                                <SectionContainer>
                                    <form>
                                        <p className="h5 text-center mb-4">Sign up</p>
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            First Name
                </label>
                                        <input type="text" id="firstName" className="form-control" onBlur={this.validateName}/>
                                        <br />
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Last Name
                </label>
                                        <input type="text" id="lastName" className="form-control" onBlur={this.validateName}/>
                                        <br />
                                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                                            Email Id
                </label>
                                        <input type="email" id="emailId" className="form-control" onBlur={this.validateEmail}/>
                                        <br />
                                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                            Password
                </label>
                                        <input type="password" id="password" className="form-control" onBlur={this.validateStrongPassword}/>
                                        <br />
                                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                            Confirm Password
                </label>
                                        <input type="password" id="confirmPassword" className="form-control" onBlur={this.validateConfirmPassword}/>
                                        <br />
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Address1
                </label>
                                        <input type="text" id="address1" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Address2
                </label>
                                        <input type="text" id="address2" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            City
                </label>
                                        <input type="text" id="city" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            State
                </label>
                                        <input type="text" id="state" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Country
                </label>
                                        <input type="text" id="country" className="form-control" />
                                        <br />
                                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                                            Contact Number 
                </label>
                                        <input type="text" id="contactNumber" className="form-control" onBlur={this.validateMobileNumber}/>
                                        <br />
                                      <div className="text-center mt-4">
                                            <button className="btn btn-unique" type="submit" onClick={this.postData}>
                                                Register
                  </button>
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
