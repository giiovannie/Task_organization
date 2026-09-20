import { Outlet } from 'react-router-dom'
import Brand from '../components/common/Brand.jsx'

const AuthLayout = () => (
  <main className="auth-layout min-vh-100 d-flex align-items-center py-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
          <div className="text-center mb-4"><Brand /></div>
          <Outlet />
          <p className="text-center small text-secondary mt-4 mb-0">Organizá tus días con claridad.</p>
        </div>
      </div>
    </div>
  </main>
)

export default AuthLayout
