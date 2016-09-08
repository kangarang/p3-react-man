export default (e, position) => {

    e.preventDefault();

    let x = position.x;
    let y = position.y;

    if (e.code === "Space" || e.code === "KeyE") {
        return "bomb";
    }

    switch (event.code){
        case "ArrowDown":
            y--
            break;
        case "KeyS":
            y--
            break;
        case "ArrowUp":
            y++
            break;
        case "KeyW":
            y++
            break;
        case "ArrowLeft":
            x--
            break;
        case "KeyA":
            x--
            break;
        case "ArrowRight":
            x++
            break;
        case "KeyD":
            x++
            break;
        default:
    }

    return [x, y];

};
