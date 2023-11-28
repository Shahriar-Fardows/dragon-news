/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ShortNews = ({ data }) => {
    console.log(data.author)
    const { image_url,title,author,total_view } = data;
    return (
       
            <div className="card my-5 w-96 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        
                    </h2>
                    <p>More...</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{author.published_date}</div>
                        <div className="badge badge-outline">View: {total_view}</div>
                    </div>
                </div>
            </div>
       
    );
};

export default ShortNews;