function equation(a,b) {
    let x = -b/a;
    if (a == 0 && b == 0){
        alert('Phương trình vô số nghiệm');
    }else if (a != 0 && b == 0){
        alert('Phương trình có nghiệm x = 0');
    }else if (a == 0 && b != 0){
        alert('Phương trình vô nghiệm');
    }else {
        alert('Phương trình có 1 nghiệm duy nhất: ' + x);
    }
    return x;
}
equation(5,8);