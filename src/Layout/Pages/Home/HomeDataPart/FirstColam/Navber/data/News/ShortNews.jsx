/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ShortNews = ({ data }) => {
    const { title, img } = data;
    return (
       
            <div className="card my-5 w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
       
    );
};

export default ShortNews;