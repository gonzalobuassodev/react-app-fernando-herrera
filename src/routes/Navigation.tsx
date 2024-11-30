import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom'

import logo from '../assets/react.svg'
import { FormkAbstractionPage, FormkBasicPage, FormkComponentsPage, FormkYupPage, RegisterPage } from '../03-forms/pages';


export const Navigation = () => {
  return (
		<BrowserRouter>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='react logo' />

					<ul>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/about'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/users'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Users
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/register'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Register
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formikbasic'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formikyup'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formikcomponents'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formikabstraction'
								className={({ isActive }) =>
									isActive ? 'nav-active' : ''
								}>
								Formik Abstraction
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path='register' element={<RegisterPage />} />
					<Route path='about' element={<h1>About</h1>} />
					<Route path='users' element={<h1>Users</h1>} />
					<Route path='formikbasic' element={<FormkBasicPage />} />
					<Route path='formikyup' element={<FormkYupPage />} />
					<Route path='formikcomponents' element={<FormkComponentsPage />} />
					<Route path='formikabstraction' element={<FormkAbstractionPage />} />
					<Route path='/' element={<h1>Home</h1>} />

					<Route path='/*' element={<Navigate to='/' />} />
				</Routes>
			</div>
		</BrowserRouter>
  );
}
