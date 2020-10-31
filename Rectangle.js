class Rectangle{
    constructor(w,l) {
        this.width = +w;
        this.length = +l;
    }
    getWidth() {
        return this.width;
    }
    getLength() {
        return this.length
    }
    getArea() {
        return this.length*this.width;
    }
    getPerimeter(){
        return 2*(this.width+this.length);
    }
    draw(canvas){
        let pen = canvas.getContext('2d');
        pen.beginPath();
        pen.rect(0,0,this.width*100,this.length*100);
    }
}