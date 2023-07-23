import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
const images = [
    "https://images.pexels.com/photos/5432843/pexels-photo-5432843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   
    "https://images.pexels.com/photos/7978821/pexels-photo-7978821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7978219/pexels-photo-7978219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8389774/pexels-photo-8389774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7978253/pexels-photo-7978253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7978815/pexels-photo-7978815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.ctfassets.net/usf1vwtuqyxm/4TvhVjbd04qSecMMWU2a82/62a75e21523f17613289f34276aac22a/AlbusDumbledore_WB_F2_DumbledoreWithMcGonagallSproutAndSnape_Still_080615_Land.jpg?w=914&q=70&fm=webp",
    
    
];

    return (
        <Carousel>
            {images.map((imageUrl, index) => (
                <div key={index}>
                    <img
                        src={imageUrl}
                        alt={`Image ${index + 1}`}
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            ))}

        </Carousel>
    );
};

export default Banner;