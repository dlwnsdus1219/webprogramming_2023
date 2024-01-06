// DB 만들고, 컬렉션 만들고, 도큐먼트 넣고 등등
const mongoose = require("mongoose");
const userModel = require("./models/UserModel");

//DB에 연결
mongoose.connect("mongodb://127.0.0.1/testDB");

//userModel을 통해 컬렉션에 데이터 보내
//create: 새로운 다큐 생성 -> DB에 저장
userModel
    .create([
        {
            id: 'hrpark',
            age: 50,
            addr: 'gwangju',
        },
        {
            id: 'lee',
            age: 24,
            addr: 'Seoul',
        },
    ])
    .then((result) => {
        console.log(result);
    })


//위에서 정의한 userschema 통해 user라는 Mongoose 모델 생성
//Mongoose는 모델 이름을 소문자로 바꾸고, 복수형으로 만들어 컬렉션 이름으로 사용
//따라서 이 모델은 MongoDB의 users 컬렉션과 상호작용하는 데에 사용된다
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;

