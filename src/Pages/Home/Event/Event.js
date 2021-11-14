

const Event = ({ event }) => {

    const colors = ["bg-red-500", "bg-yellow-500", "bg-green-500", "bg-blue-500"]


    const randomIndex = Math.floor(Math.random() * 4)





    const { title, img } = event;
    return (
        <div className="text-center relative">
            <img src={img} alt="" />
            <h5 className={`${colors[randomIndex]} text-xl font-semibold h-16 bg-red-500 w-full absolute  rounded-b-lg bottom-0 text-white `} >{title}</h5>
        </div>
    );
};

export default Event;