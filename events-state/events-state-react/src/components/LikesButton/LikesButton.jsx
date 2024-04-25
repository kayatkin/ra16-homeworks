
export const LikesButton = () => {
    const handleAddLike = (e) => {
        console.log(e);
    };

    const handleChange = (e) => {
        console.log(e.target)
    };

    return (
      <>
        <input type="text" onChange={handleChange} />
        {/*<button className="bg-teal-700"
        onClick={handleAddLike}>Likes</button>*/}
      </>
    );
};
