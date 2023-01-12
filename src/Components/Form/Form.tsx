import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <span>Try it free 7 days</span> then
        <br /> $20/mo. there after
      </div>
      <div className={styles.body}>
        <form
          onSubmit={handleSubmit(() => {
            reset();
          })}
        >
          <input
            {...register("firstname", {
              required: "First Name can not be empty",
            })}
            placeholder="First Name"
          />
          <p>{errors.firstname?.message}</p>
          <input
            {...register("lastname", {
              required: "Last Name can not be empty",
            })}
            placeholder="Last Name"
          />
          <p>{errors.lastname?.message}</p>
          <input
            {...register("email", {
              required: "Email can not be empty",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Looks like it's not an email",
              },
            })}
            placeholder="Email Address"
          />
          <p>{errors.email?.message}</p>
          <input
            {...register("password", { required: "Password can not be empty" })}
            placeholder="Password"
          />
          <p>{errors.password?.message}</p>
          <input type="submit" value="claim your free trail" />
          <div className={styles.terms}>
            By clicking the button, you are agreeing to our
            <span className={styles.services}>Terms and Services</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
