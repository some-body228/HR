export const getRandomFIO = ():string => {
    return ["Беспалов Л. Н.",
        "Фёдоров С. Л.",
        "Лыткин Ю. Б.",
        "Архипов Л. М.",
        "Гурьева Н. Л.",
        "Крюкова И. Ф.",
        "Степанова Х. Е.",
        "Субботина Ю. П.",
        "Фролова Г. П.",
        "Мамонтова М. И."][Math.floor(Math.random() * 10)]
}

export const getPhotoUrl = ():string => {
    return ["https://api.dicebear.com/8.x/pixel-art/svg",
        "https://api.dicebear.com/7.x/bottts/png",
        "https://api.dicebear.com/7.x/lorelei/svg",
        "https://xsgames.co/randomusers/avatar.php?g=male",
        "https://xsgames.co/randomusers/avatar.php?g=female",
        "https://xsgames.co/randomusers/avatar.php?g=pixel",
        "https://api.multiavatar.com/stefan.svg",
        "https://api.multiavatar.com/kathrin.svg",
        "https://api.multiavatar.com/zoe.svg",
        "https://robohash.org/stefan-one"][Math.floor(Math.random() * 10)]
}

export const team = [
    {name: "Новиков А. М.", grade: 10, posID: 42154, url: "https://img.freepik.com/free-photo/portrait-handsome-teenager-posing_23-2148505468.jpg?t=st=1714035706~exp=1714039306~hmac=8db93cfb1e9e81b8581e33446e84ae976fe657b7724d08a6a0a978833abe83a7&w=360"},
    {name: "Ворочкова И. А.", grade: 9, posID: 19038, url: "https://img.freepik.com/premium-photo/young-girl-working-at-a-coffee-shop-with-a-laptopfemale-freelancer-holding-a-credit-card_363394-130.jpg?size=626&ext=jpg"},
    {name: "Руденко О. С.", grade: 8, posID: 43902, url: "https://img.freepik.com/free-photo/portrait-serious-man-sitting-chair_155003-2801.jpg?t=st=1714035747~exp=1714039347~hmac=f6f530f95ca23517c290bcf129348761f772587dedd70cabc1a606b6ebf94b1a&w=360"},
    {name: "Макарова Д. С.", grade: 7, posID: 81855, url: "https://img.freepik.com/free-photo/portrait-of-blonde-woman-looking-at-photographer_23-2148348970.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1713916800&semt=ais"},
    {name: "Семиненко В. М.", grade: 9, posID: 89192, url: "https://img.freepik.com/free-photo/man-working-laptop_23-2149400028.jpg?t=st=1714035767~exp=1714039367~hmac=59543dc57edd6ec4df971ed5b43587ceba4bba98b496c5ef55efb4e936ba1c01&w=1060"},
]

export const grades = {
    7: "Инженер по разработке",
    8: "Старший инженер по разработке",
    9: "Ведущий инженер по разработке",
    10: "Главный инженер по разработке",
}
