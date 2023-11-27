import logo from '../../../../../assets/logo.png'
import moment from 'moment';

const WebName = () => {
    return (
        <div className='grid justify-center text-center m-5 '>
            <img src={logo} alt="" />
            <h1 className='text-lg	leading-10'>Journalism Without Fear or Favour</h1>
            <h1 className='text-xl	leading-10'>{moment().format('dddd, MMMM Do, YYYY')}</h1>
        </div>
    );
};

export default WebName;