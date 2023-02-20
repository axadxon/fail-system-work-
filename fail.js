const fs = require('fs')

const path = require('path')


//    ============ 1 ===========
const CreateFile = () => {
    fs.mkdir(path.join("practise"), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Amalyot bajarildi");
    })
}

setTimeout(() => {
    CreateFile()
}, 2000);

// //  =============== 2 va 3 ===============

const CreateFile2 = () => {
    fs.writeFile(path.join('practise', 'text.txt'), '"nimadir yozdik"', (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('.txt farmatidagi fail yaratildi va ichiga yozildi!');
})}

setTimeout(() => {
    CreateFile2()
}, 3000);

//  ============== 4 ==================



const CreateFile3 = () => {
    fs.readFile(path.join('practise', 'text.txt'), 'utf-8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data);
    console.log('Fail o`qildi!');
})}

setTimeout(() => {
    CreateFile3()
}, 4000);

//  =============== 5 =================


const CreateFile4 = () => {
    fs.rename(
    path.join('practise', 'text.txt'),
    path.join('practise', 'index.txt'),
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Fail nomi o`zgartirildi!');
    }
)}


setTimeout(() => {
    CreateFile4()
}, 5000);


// ============== 6 ==================

const CreateFile5 = () => {

fs.rm(path.join('practise', 'index.txt'), (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Fail muofaqqiyatli o`chirildi!');
})} 


setTimeout(() => {
    CreateFile5()
}, 6000);




const CreateFile6 = () => {
    fs.rmdir(path.join("practise"), (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(" Papka ham o`chirildi");
})}
setTimeout(() => {
    CreateFile6()
}, 7000);