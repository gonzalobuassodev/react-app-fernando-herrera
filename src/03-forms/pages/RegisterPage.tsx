import '../styles/styles.css'
import { useForm } from '../hooks/useForm'
import { isValidEmail } from '../hooks/isValidEmail'

interface FormData {
  name: string
  email: string
  password: string
  repeatPassword: string
}

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    repeatPassword,
    onChange,
    onSubmit,
    onResetForm,
  } = useForm<FormData>({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  })

  return (
    <div>
      <h1>Register Page</h1>
      <hr />

      <form noValidate onSubmit={onSubmit}>
        <input
          placeholder='Name'
          name='name'
          value={name}
          type='text'
          onChange={onChange}
          className={`${ name.trim().length <= 0 && 'has-error'}`}
        />
       { name.trim().length <= 0 && <span>Este campo es requerido</span>}


        <input
          placeholder='email'
          name='email'
          value={email}
          type='email'
          onChange={onChange}
          className={`${ !isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>Email invalido</span>}


        <input
          placeholder='password'
          name='password'
          value={password}
          type='password'
          onChange={onChange}
        />
        { password.length <=0 && <span>Este campo es necesario</span>}
        { password.length <  6 && <span>Las contraseñas no puede ser menor a 6</span>}

        <input
          placeholder='Repeat password'
          name='repeatPassword'
          value={repeatPassword}
          type='password'
          onChange={onChange}
          />
          { password !== repeatPassword && <span>Las contraseñas no coinciden</span>}

        <button type='submit'>Register</button>

        <button onClick={onResetForm} type='submit'>
          Reset
        </button>
      </form>
    </div>
  )
}
