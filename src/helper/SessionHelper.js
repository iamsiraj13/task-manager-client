class sessionHelper {
  setToken(token) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }

  // EMAIL
  setEmail(email) {
    localStorage.setItem("email", email);
  }
  getEmail() {
    return localStorage.getItem("email");
  }
  // OTP
  setOTP(OTP) {
    localStorage.setItem("OTP", OTP);
  }
  getOTP() {
    return localStorage.getItem("OTP");
  }

  setUserDetails(UserDetails) {
    localStorage.setItem("userDetails", JSON.stringify(UserDetails));
  }
  getUserDetails() {
    return JSON.parse(localStorage.getItem("userDetails"));
  }
  removeSession() {
    localStorage.clear();
    window.location.href = "/login";
  }
}

export const {
  setToken,
  getToken,
  setUserDetails,
  getUserDetails,
  removeSession,
  setEmail,
  getEmail,
  setOTP,
  getOTP,
} = new sessionHelper();
