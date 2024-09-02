<template>
    <div class="app">
        <div id="atom">
            <div id="nucleus"></div>
            <div class="orbit">
                <div class="electron"></div>
            </div>
            <div class="orbit">
                <div class="electron"></div>
            </div>
            <div class="orbit">
                <div class="electron"></div>
            </div>
            <div id="text"><h1>NuC1ear&At0mic</h1></div>
        </div>
    </div>
</template>

<script lang="ts" setup name="HomeLayout">

</script>

<style scoped>

.app{
    display: flex;
    margin-top: 100px;
}
@-webkit-keyframes electronAnimation {
    0% {
        transform: rotateZ(0deg) translateX(100px) rotateZ(0deg) rotateY(-65deg);
    }

    100% {
        transform: rotateZ(360deg) translateX(100px) rotateZ(-360deg) rotateY(-65deg);
    }
}

@keyframes electronAnimation {
    0% {
        transform: rotateZ(0deg) translateX(100px) rotateZ(0deg) rotateY(-65deg);
    }

    100% {
        transform: rotateZ(360deg) translateX(100px) rotateZ(-360deg) rotateY(-65deg);
    }
}

@-webkit-keyframes orbitSpecial {
    0% {
        border: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }

    35% {
        border: 0;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
    }

    70% {
        border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    100% {
        border: 0;
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
}

@keyframes orbitSpecial {
    0% {
        border: 0;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }

    35% {
        border: 0;
        border-right: 1px solid rgba(255, 255, 255, 0.5);
    }

    70% {
        border: 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    100% {
        border: 0;
        border-left: 1px solid rgba(255, 255, 255, 0.5);
    }
}

@-webkit-keyframes shining {
    0% {
        box-shadow: 0 0 0 transparent;
    }

    50% {
        box-shadow: 0 0 40px #2196f3;
    }

    100% {
        box-shadow: 0 0 0 transparent;
    }
}

@keyframes shining {
    0% {
        box-shadow: 0 0 0 transparent;
    }

    50% {
        box-shadow: 0 0 40px #2196f3;
    }

    100% {
        box-shadow: 0 0 0 transparent;
    }
}

body {
    text-align: center;
    background: rgba(0, 0, 0, 1);
    color: white;
}

#atom {
    position: relative;
    width: 300px;
    height: 300px;
    display: inline-block;
    margin: 10px auto;
}

#nucleus,
.orbit,
.electron {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: auto;
}

#nucleus {
    animation: shining 2s infinite linear;
}

.orbit:before {
    content: " ";
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
}

.orbit {
    width: 260px;
    height: 260px;
    border: 0;
    transform-style: preserve-3d;
    animation: orbitSpecial 1.5s infinite linear;
}

.electron {
    position: relative;
    top: 145px;
    width: 10px;
    height: 10px;
    background: #ff9800;
    box-shadow: 0 0 15px #ff9800;
    border-radius: 50%;
    transform: translateX(150px);
    animation: electronAnimation 1.5s infinite linear;
}

.orbit:nth-child(4) {
    transform: rotateY(65deg) rotateX(5deg);
    animation-delay: -1s;
}

.orbit:nth-child(4) .electron {
    animation-delay: -1s;
}

.orbit:nth-child(2) {
    transform: rotateY(65deg) rotateX(-54deg);
    animation-delay: -1s;
    animation-duration: 1s;
}

.orbit:nth-child(2) .electron {
    animation-duration: 1s;
}

.orbit:nth-child(3) {
    transform: rotateY(65deg) rotateX(54deg);
}

#text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: bold;
    color: white;
}
</style>