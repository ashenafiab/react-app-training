function Input(props) {
  return (
    <div className="form">
      <input
        type={props.type}
        id={props.id}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
