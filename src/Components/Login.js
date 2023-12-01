import './Components.css'
// import { Account } from "react-icons/vsc";

function LoginPage() {
  return (
    <div className="App-header">
        <div>Money Tracker</div>

        <div className="login-form">
            <div className="input-group flex-nowrap">
                <span class="input-group-text" id="basic-addon1"></span>
                <input type="text" className="form-control login-inp" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" autoFocus autoComplete='off'/>
            </div>
            <br/>
            <div className="input-group flex-nowrap">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control login-inp" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" autoComplete='off'/>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary mb-3">Login</button>
        </div>
    </div>
  )
}

export default LoginPage