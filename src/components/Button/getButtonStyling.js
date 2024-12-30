function getButtonStyling(styleType){
    switch(styleType){
        case "primary":
            return "bg-blue-500 text-white";
        case "secondary":
            return "bg-gray-500 text-white";
        case "error":
            return "bg-red-500";
        case "success":
            return "bg-green-500";
        case "warning":
            return "bg-yellow-500";
    }
}

export default getButtonStyling;