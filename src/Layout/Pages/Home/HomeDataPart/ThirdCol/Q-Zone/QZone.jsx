import qZone1 from '../../../../../../assets/qZone1.png'
import qZone2 from '../../../../../../assets/qZone2.png'
import qZone3 from '../../../../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className="border bg-[#F3F3F3]">
            <h1 className=' m-5  text-base  font-bold text-gray-900 md:text-xl dark:text-white'>Q-Zone</h1><br />
            <div className='grid justify-center'>
            <img src={qZone1} alt="" /><br />
            <img src={qZone2} alt="" /><br />
            <img src={qZone3} alt="" /><br />
            </div>
        </div>
    );
};

export default QZone;