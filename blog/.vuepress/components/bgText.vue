<template>
    <div id="bgText">
        <a class="magnetize"> Magnetize!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! </a>
        <div class="cursor"></div>
        <div class="cursor-border"></div>
    </div>
</template>

<script>
export default {
    name: 'bgText',
    mounted() {
        this.init()
    },
    methods: {
        init() {
            let cursor = document.querySelector(".cursor");
            let cursorBorder = document.querySelector(".cursor-border");
            let magnetizedElements = [...document.querySelectorAll(".magnetize")];
            console.log(document.getElementsByClassName("magnetize"),document.querySelectorAll(".magnetize"),222222222222222)
            let threshold = 100;
            let getXY = (event, element) => {
                let x = event.clientX;
                let y = event.clientY;
                let rect = element.getBoundingClientRect();
                x -= rect.width / 2;
                y -= rect.height / 2;
                return [x, y];
            };
            let calcDistance = (x1, x2, y1, y2) => {
                return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            };
            let magnetize = (event, element) => {
                // x1, y1为鼠标坐标
                let x1 = event.clientX;
                let y1 = event.clientY;
                let rect = element.getBoundingClientRect();
                // x2, y2为物体中心坐标
                let x2 = rect.left + rect.width / 2;
                let y2 = rect.top + rect.height / 2;
                let dx = Math.floor(x2 - x1);
                let dy = Math.floor(y2 - y1);
                let h = -0.45 * dx;
                let v = -0.45 * dy;
                let distance = calcDistance(x1, x2, y1, y2);
                if (distance < threshold) {
                    element.style.setProperty("--t", `0`);
                    element.style.setProperty("--h", `${h}px`);
                    element.style.setProperty("--v", `${v}px`);
                } else {
                    element.style.removeProperty("--t");
                    element.style.setProperty("--h", `0`);
                    element.style.setProperty("--v", `0`);
                }
            };

            document.addEventListener("mouseenter", (e) => {
                cursor.animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 300,
                    fill: "forwards"
                });
                cursorBorder.animate(
                    [
                        {
                            opacity: 0
                        },
                        {
                            opacity: 1
                        }
                    ],
                    {
                        duration: 300,
                        fill: "forwards"
                    }
                );
            });

            document.addEventListener("mousemove", (e) => {
                magnetizedElements.forEach((el) => magnetize(e, el));
                let [cursorX, cursorY] = getXY(e, cursor);
                let [cursorBorderX, cursorBorderY] = getXY(e, cursorBorder);
                if (e.target.tagName === "A") {
                    cursorBorder.classList.add("on-focus");
                } else {
                    cursorBorder.classList.remove("on-focus");
                }
                cursor.animate(
                    [
                        { transform: `translate(${cursorX}px, ${cursorY}px)` },
                        { transform: `translate(${cursorX}px, ${cursorY}px)` }
                    ],
                    {
                        duration: 300,
                        fill: "forwards",
                        delay: 50
                    }
                );
                cursorBorder.animate(
                    [
                        { transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` },
                        { transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` }
                    ],
                    {
                        duration: cursorBorder.classList.contains("on-focus") ? 1500 : 300,
                        fill: "forwards",
                        delay: 150
                    }
                );
            });

            document.addEventListener("mouseleave", (e) => {
                cursor.animate([{ opacity: 1 }, { opacity: 0 }], {
                    duration: 500,
                    fill: "forwards"
                });
                cursorBorder.animate(
                    [
                        {
                            opacity: 1
                        },
                        {
                            opacity: 0
                        }
                    ],
                    {
                        duration: 500,
                        fill: "forwards"
                    }
                );
            });

        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");

#bgText {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 5px);
    height: 100vh;
    font-family: Lora, sans-serif;
    background: black;
    cursor: none;
}

.cursor,
.cursor-border {
    position: fixed;
    top: 0;
    left: 0;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    will-change: transform;
    transition: 0.3s;
}

.cursor {
    background: white;
}

.cursor-border {
    padding: 2rem;
    border: 0.1rem solid white;

    &.on-focus {
        padding: 0.5rem;
        background: rgba(255, 255, 255, 0.5);
        border-color: transparent;
    }
}

.magnetize {
    font-size: 3rem;
    font-weight: bold;
    color: #fff;
    will-change: transform;
    transform: translate(var(--h, 0), var(--v, 0));
    transition: var(--t, 0.3s);
}
</style>
