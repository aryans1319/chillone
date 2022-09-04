import {v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "Beaver Creek",
            cover:
                "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            artist: "J.Folk",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43902",
            color: ["#cf2e2e", "#f78da7"],
        },
        {
            name: "A Note from Book",
            cover:
                "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            artist: "J.Folk",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=36925",
            color: ["#cf2e2e", "#f78da7"],
        },
        {
            name: "Break",
            cover:
                "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            artist: "Swum, Idealism",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=43683",
            color: ["#cf2e2e", "#f78da7"],
        },
        {
            name: "Hold Me Tight",
            cover:
                "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            artist: "Philanthrope, Mommy",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=42445",
            color: ["#cf2e2e", "#f78da7"],
        },
        {
            name: "In Minutes",
            cover:
                "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
            artist: "ShrimpNose",
            id: uuidv4(),
            active: false,
            audio: "https://mp3.chillhop.com/serve.php/?mp3=41689",
            color: ["#cf2e2e", "#f78da7"],
        },
    ];
}

export default chillHop;
