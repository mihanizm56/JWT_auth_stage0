const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
	review: {
		type: String,
		required: true,
		unique: false,
	},
	user: {
		type: String,
		required: true,
		unique: true,
	},
	login: {
		type: String,
		required: true,
		unique: true,
	},
});

mongoose.model("Review", reviewsSchema, "Reviews");


// module.exports = {
// 	reviews: [
// 		{
// 			review:
// 				"Я молодая мама, но все равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке и мои фотографии сразу стали более стильнее, а также набирают больше лайков!",
// 			user: "Анастасия Красильникова",
// 			login: "@misssssiskras",
// 		},
// 		{
// 			review: "Мне очень понравилось качество изделий",
// 			user: "Михаил Кожевников",
// 			login: "@mihanizm56",
// 		},
// 		{
// 			review: "Первое, что мне запомнилось - клёвый и интересный сайт! Потом купила первую игрушку и понеслась!",
// 			user: "Анастасия Зивинская",
// 			login: "@nasiwin",
// 		},
// 		{
// 			review: "test-review",
// 			user: "test-user",
// 			login: "test-login",
// 		},
// 	],
// };