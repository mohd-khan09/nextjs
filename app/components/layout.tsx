import Navbar from './navbar'

type Props = {
  children?: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
