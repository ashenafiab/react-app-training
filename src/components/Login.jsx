function Login() {
  return (
    <form className="form">
      <input
        type="text"
        id="name"
        autoComplete="given-name"
        placeholder="Username"
      />
      <input type="password" id="userPassword" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
