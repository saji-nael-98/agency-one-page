import React, { useReducer } from "react";
import styles from "./ContactForm.module.css";
import Input from "../UI/Input/input";
import Button from "../UI/Button/Button";
import TextArea from "../UI/TextArea/TextArea";

const nameReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      error: action.val.length !== 0 ? null : "required",
    };
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      error: state.value.length !== 0 ? null : "required",
    };
  }

  return {
    value: "",
    error: null,
  };
};
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      error:
        action.val.length !== 0
          ? action.val.includes("@")
            ? null
            : "email is invalid!"
          : "required",
    };
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      error:
        state.value.length !== 0
          ? state.value.includes("@")
            ? null
            : "email is invalid!"
          : "required",
    };
  }

  return {
    value: "",
    error: null,
  };
};
const mobileReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      error: action.val.length !== 0 ? null : "required",
    };
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      error: state.value.length !== 0 ? null : "required",
    };
  }

  return {
    value: "",
    error: null,
  };
};
const msgReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      error: action.val.length !== 0 ? null : "required",
    };
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      error: state.value.length !== 0 ? null : "required",
    };
  }

  return {
    value: "",
    error: null,
  };
};
function ContactForm(props) {
  const [nameState, dispatchName] = useReducer(nameReducer, {
    value: "",
    error: null,
  });
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    error: null,
  });
  const [mobileState, dispatchMobile] = useReducer(mobileReducer, {
    value: "",
    error: null,
  });
  const [msgState, dispatchMsg] = useReducer(msgReducer, {
    value: "",
    error: null,
  });
  const nameChangeHandler = (event) => {
    dispatchName({ type: "USER_INPUT", val: event.target.value });
  };
  const nameOnBlurHandler = () => {
    dispatchName({ type: "INPUT_BLUR" });
  };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };
  const emailOnBlurHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };
  const mobileChangeHandler = (event) => {
    dispatchMobile({ type: "USER_INPUT", val: event.target.value });
  };
  const mobileOnBlurHandler = () => {
    dispatchMobile({ type: "INPUT_BLUR" });
  };
  const msgChangeHandler = (event) => {
    dispatchMsg({ type: "USER_INPUT", val: event.target.value });
  };
  const msgOnBlurHandler = () => {
    dispatchMsg({ type: "INPUT_BLUR" });
  };
  //from submit
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className={styles["contact-form__controls"]}>
        <div className={styles["contact-form__user-information"]}>
          <Input
            label={"name"}
            value={nameState.value}
            error={nameState.error}
            onChange={nameChangeHandler}
            onBlur={nameOnBlurHandler}
          />
          <Input
            label={"email"}
            type="email"
            value={emailState.value}
            error={emailState.error}
            onChange={emailChangeHandler}
            onBlur={emailOnBlurHandler}
          />
          <Input
            label={"mobile"}
            value={mobileState.value}
            error={mobileState.error}
            onChange={mobileChangeHandler}
            onBlur={mobileOnBlurHandler}
          />
        </div>
        <div className={styles["contact-form__message"]}>
          <TextArea
            label="message"
            placeholder="enter your message"
            value={msgState.value}
            error={msgState.error}
            onChange={msgChangeHandler}
            onBlur={msgOnBlurHandler}
          />
        </div>

        <div className={styles["contact-form__action"]}>
          <Button type="submit">send</Button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
