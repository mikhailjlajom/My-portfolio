import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Mikhail.</a>
            <div className="itemContainer">
            <PersonIcon className="icon"/>
            <span>+1 702-375-6785</span>
            </div>
            <div className="itemContainer">
            <MailIcon className="icon"/>
            <span>mikhailj.lajom@gmail.com</span>
            </div>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  )
}
