import {Formiz, useForm} from "@formiz/core";
import {isEmail} from "@formiz/validations";
import MyField from "../compentes/MyField";
import React from "react";
import {Button} from "@chakra-ui/react";

const MyForm = () => {
  const myForm = useForm()
  const [isLoading, setIsLoading] = React.useState(false)
  const submitForm = (values: any) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      alert(JSON.stringify(values))
      myForm.invalidateFields({
        email: 'You can display an error after an API call',
      })
    }, 1000)
  }
  return (
    <Formiz onValidSubmit={submitForm} connect={myForm}>
      <form
        noValidate
        onSubmit={myForm.submit}
        className="demo-form"
        style={{ minHeight: '16rem' }}
      >
        <div className="demo-form__content">
          <MyField
            name="name"
            label="Name"
            required="Name is required"
          />

          <MyField
            name="nickname"
            label="Nickname"
          />

          <MyField
            name="email"
            label="Email"
            type="email"
            required="Email is required"
            validations={[
              {
                rule: isEmail(),
                message: 'Not a valid email',
              }
            ]}
          />

          <MyField
            name="password"
            label="Password"
            type="password"
          />
          <MyField
            name="passwordConfirm"
            label="Confirm password"
            type="password"
            validations={[
              {
                rule: (value: any) => myForm.values.password === value,
                deps: [myForm.values.password],
                message: 'Passwords do not match',
              }
            ]}
          />
        </div>

        <div className="demo-form__footer">
          <div
            className="ml-auto"
            style={{ minWidth: '6rem' }}
          >
            <Button
              className="demo-button is-full is-primary"
              type="submit"
              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}
            >
              {isLoading ? 'Loading...' : 'Submit'}
            </Button>
          </div>
        </div>
      </form>
    </Formiz>
  )
}

export default MyForm;
