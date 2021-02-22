class Carousel {
    constructor(images) {
        this.images = images;
        this.currIdx = 0;
        this.showCurrentImage();
        document.querySelector('.prev').addEventListener('click', 
             () => this.prevImage() );
        document.querySelector('.next').addEventListener('click', 
            () => this.nextImage() );
    }
    showCurrentImage() {
        document.querySelector('.current').src = this.images[this.currIdx];
    }
    nextImage() {
        if (++this.currIdx >= this.images.length) this.currIdx = 0;
        this.showCurrentImage();
    }
    prevImage() {
        if (--this.currIdx < 0) this.currIdx = this.images.length - 1;
        this.showCurrentImage();
    }
}

new Carousel([
    'img/AdamInfo.png',
    'img/JackInfo.png',
    'img/MathewInfo.png'
]);
