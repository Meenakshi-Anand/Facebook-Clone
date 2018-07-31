import React from 'react';
import {withRouter} from 'react-router-dom';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      birthday: "",
      sex: "",

    };
    this.err = {
      email_error:"",
      password_error:"",
      fname_error:"",
      lname_error:"",
      birthday_error:"",
      sex_error:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }


  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});

    };
  }

  updateSex(value){
    return(e)=>{
    this.setState({sex:value});
    };
  }

  renderErrors(){
    const {errors} = this.props;
    errors.signupErrors.forEach((error) => {
      if (error === "Email can't be blank"){
         this.err.email_error = "You'll use this when you log in and if you ever need to reset your password.";
      }else if(error === "Fname can't be blank"){
         this.err.fname_error = "Whats your name?";
      }else if(error === "Lname can't be blank"){
         this.err.lname_error ="Whats your name?";
      }else if(error === "Birthday can't be blank"){
         this.err.birthday_error ="Select your birthday. You can change who can see this later.";
      }else if(error === "Password is too short (minimum is 6 characters)"){
         this.err.password_error =
        "Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).";
      }
    });
  }
  renderSmallErrors(variable){
    console.log(variable);
    if (variable){
      return(<span className="tooltiptext">{variable}</span>);
    }else {
      return(null);
    }
  }
  renderSignup(){
    const {formType} = this.props;
    if (formType === "SIGNUP"){
    return(
      <div className="signup-form">
        <h2 className="sub-text">Create New Account</h2>
        <h3 className="sub-text">It's free and always will be</h3>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            <section className="tooltip">
            <input type="text"
              className={ this.err.fname_error === "" ? '' : 'error'}
              placeholder={'First Name'}
              value={this.state.fname} onChange={this.update('fname')} />
            {this.renderSmallErrors(this.err.fname_error)}
          </section>
          </label>
          <label>
            <section className="tooltip">
            <input type="text" placeholder={'Last Name'}
              className={ this.err.lname_error === "" ? '' : 'error'}
              value={this.state.lname} onChange={this.update('lname')} />
            {this.renderSmallErrors(this.err.lname_error)}
            </section>
         </label>
        </div>
          <label>
          <section className="tooltip">
          <input type="text" placeholder={'Email'}
            className={ this.err.email_error === "" ? '' : 'error'}
            value={this.state.email} onChange={this.update('email')} />
          {this.renderSmallErrors(this.err.email_error)}
            </section>
          </label>
          <label>
            <section className="tooltip">
            <input type="password" placeholder={'New Password'}
              className={ this.err.password_error === "" ? '' : 'error'}
              value={this.state.password} onChange={this.update('password')} />
            {this.renderSmallErrors(this.err.password_error)}
                </section>
          </label>
          <div className="birthday-signup">

          <label> <h3 className="bsub-text"> Birthday </h3>
            <div>
            <section className="tooltip">
            <input type="date" value={this.state.birthday}
              className={ this.err.birthday_error === "" ? '' : 'error'}
              onChange={this.update('birthday')} />
            {this.renderSmallErrors(this.err.birthday_error)}
                  </section>
            <span className="plink margintop deadlinks">Why do I need to provide
              my birthday?</span>
            </div>
          </label>
          </div>
          <div className="sex-signup">
          <label>
            <div>
             <label>
            <input className="radio" type="radio" name="my-input" value={"M"}
              onChange={this.updateSex("M")} />
              Male
             </label>
             <label>
            <input className="radio" type="radio" name="my-input" value={"F"}
              onChange={this.updateSex("F")} />
              Female
             </label>
             </div>
          </label>
        </div>
          <p>
          By clicking Sign Up,
          you agree to our <span className="plink deadlinks">Terms, Data Policy</span> and
          <span className="plink deadlinks"> Cookies Policy.</span> You may receive SMS Notifications from us
          and can opt out any time.</p>
          <button type="submit" value={formType}>Sign Up</button>
         </form>

      </div>
    );
  }
  }

  render(){
    return(
      this.renderSignup()
    );
  }
}

export default withRouter(SignupForm);
