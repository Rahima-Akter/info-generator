const info = [
    {
        "id": 1,
        "age": 40,
        "eyeColor": "brown",
        "name": "Theresa Boyle",
        "gender": "female",
        "company": "ZILLATIDE",
        "email": "theresaboyle@zillatide.com",
        "phone": "19935783976",
        "address": "710 Judge Street, Kraemer, Indiana, 9207",
        "favoriteFruit": "banana"
    },
    {
        "id": 2,
        "age": 30,
        "eyeColor": "blue",
        "name": "Turner Dillon",
        "gender": "male",
        "company": "SHEPARD",
        "email": "turnerdillon@shepard.com",
        "phone": "8624213520",
        "address": "744 Alton Place, Warsaw, Mississippi, 4201",
        "favoriteFruit": "banana"
    },
    {
        "id": 3,
        "age": 24,
        "eyeColor": "green",
        "name": "Ada Mccullough",
        "gender": "female",
        "email": "adamccullough@neptide.com",
        "phone": "8594822037",
        "favoriteFruit": "strawberry"
    },
    {
        "id": 4,
        "age": 28,
        "eyeColor": "blue",
        "name": "Tisha Chapman",
        "gender": "female",
        "company": "FLEXIGEN",
        "email": "tishachapman@flexigen.com",
        "phone": "8915022209",
        "address": "905 Denton Place, Sanders, Nebraska, 7190",
        "favoriteFruit": "banana"
    },
    {
        "id": 5,
        "age": 33,
        "eyeColor": "blue",
        "name": "Rocha Maxwell",
        "gender": "male",
        "company": "KOZGENE",
        "phone": "19464992739",
        "address": "732 Amherst Street, Fairlee, North Dakota, 3539",
        "favoriteFruit": "strawberry"
    }
]


const namelist = document.getElementById('people-list');
const peopleDetails = document.getElementById('people-details');
const hide = document.getElementById('hide');
const personDetails = (info) => {
    info.map((info) => {
        const li = document.createElement('li');
        li.className = 'list-none font-bold text-center text-blue-500 cursor-pointer hover:text-black';
        li.textContent = info.name;
        namelist.appendChild(li);

        li.addEventListener('click', () => {

            peopleDetails.className = 'bg-white shadow-xl p-4 rounded-md';
            peopleDetails.innerHTML = `
                <h2 class="text-sm font-semibold"><span class="text-lg font-bold">Name:</span>  ${info.name}</h2>
                <h2 class="text-sm font-semibold"><span class="text-lg font-bold">Age:</span>  ${info.age}</h2>
                <h2 class="text-sm font-semibold"><span class="text-lg font-bold">Gender:</span>  ${info.gender}</h2>
                <h2 class="text-sm font-semibold"><span class="text-lg font-bold">Company:</span>  ${info.company ? info.company : 'N/A'}</h2>
                <h2 class="text-sm font-semibold"><span class="text-lg font-bold">Email:</span>  ${info.email ? info.email : 'N/A'}</h2>
                <h2 class="text-sm font-semibold"><span class="text-lg font-bold">Address:</span>  ${info.address ? info.address : 'N/A'}</h2>
            `;

            hide.classList.add('hidden')
        })
    });
};

personDetails(info);
