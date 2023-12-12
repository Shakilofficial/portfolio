import Image from "next/image";


const DevImg = ({containerStyles, imgSrc}) => {
    return (
        <div>
            <Image src={imgSrc} fill priority alt="Hero Image" style={containerStyles} />
        </div>
    );
};

export default DevImg;