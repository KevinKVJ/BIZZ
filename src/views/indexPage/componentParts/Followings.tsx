const Followings = () => {
    return (
        <div className='followings_wrapper'>
            <div className='followings_title'>From Users You Follow</div>
            <div className='block_wrapper'>
                <div className='series_name'>Series</div>
                <div className='chapter_title'>Chapter X</div>
                <div className='author_info'>
                    <div className='author_avatar'></div>
                    <div className='author_name'></div>
                </div>
                <div className='tags'>#Gaming</div>
                <div className='likes_and_stats'>
                    <div className='likes'>
                        <div className='like_icon'></div>
                        <div className='like_amount'>42k</div>
                    </div>
                    <div className='stats'>4000 character(s)</div>
                </div>
            </div>
        </div>
    );
};

export default Followings;
