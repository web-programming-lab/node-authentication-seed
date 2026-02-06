const express = require('express');
const server = express();

server.get('/technologies', (req, res) => {
    return res.json(staticTechnologies);
});

server.listen(4566, () => {
    console.log('a server with express is running....');
});

const staticTechnologies = [
    {
        "name": "Angular",
        "kategorie": "kategorie 1",
        "ring": "Hold",
        "description": "Angular is cool",
        "category": "Frameworks",
        "id": "1"
    },
    {
        "name": "Vue",
        "kategorie": "kategorie 2",
        "ring": "Hold",
        "description": "Vue is cool",
        "category": "Tools",
        "id": "2"
    },
    {
        "name": "Docker",
        "kategorie": "kategorie 4",
        "ring": "Hold",
        "description": "Docker",
        "category": "Tools",
        "id": "4"
    },
    {
        "name": "name 5",
        "kategorie": "kategorie 5",
        "ring": "ring 5",
        "description": "description 5",
        "category": "category 5",
        "id": "5"
    },
    {
        "name": "name 6",
        "kategorie": "kategorie 6",
        "ring": "ring 6",
        "description": "description 6",
        "category": "category 6",
        "id": "6"
    },
    {
        "name": "name 7",
        "kategorie": "kategorie 7",
        "ring": "ring 7",
        "description": "description 7",
        "category": "category 7",
        "id": "7"
    },
    {
        "name": "name 8",
        "kategorie": "kategorie 8",
        "ring": "ring 8",
        "description": "description 8",
        "category": "category 8",
        "id": "8"
    },
    {
        "name": "test123",
        "kategorie": "kategorie 9",
        "ring": "test",
        "description": "test",
        "category": "test",
        "id": "9"
    },
    {
        "name": "Svelte",
        "kategorie": "kategorie 10",
        "ring": "Assess",
        "description": "Reactive UI framework",
        "category": "Frameworks",
        "id": "10"
    },
    {
        "name": "Hallo Hannes",
        "kategorie": "kategorie 1",
        "ring": "Hallo Hannes",
        "description": "Hallo Hannes",
        "category": "category 11",
        "id": "11"
    },
    {
        "name": "fdsf",
        "kategorie": "kategorie 2",
        "ring": "dsfsdf",
        "description": "sdfsf",
        "category": "dsfsdf",
        "id": "12"
    },
    {
        "name": "dfsdf",
        "kategorie": "kategorie 1",
        "ring": "sdfsdf",
        "description": "dsfsf",
        "category": "sdfsf",
        "id": "13"
    },
    {
        "name": "dsfsadf",
        "kategorie": "kategorie 1",
        "ring": "sadfsadf",
        "description": "safdasfd",
        "category": "asdfaf",
        "id": "14"
    },
    {
        "name": "asdfsafd",
        "kategorie": "kategorie 1",
        "ring": "asdfsafd",
        "description": "afdadfa",
        "category": "fadsfasfd",
        "id": "15"
    },
    {
        "name": "B",
        "kategorie": "B",
        "ring": "B",
        "description": "B",
        "category": "B",
        "id": "16"
    },
    {
        "name": "safddsf",
        "kategorie": "kategorie 1",
        "ring": "asfdafd",
        "description": "asfdadfad",
        "category": "afdadf",
        "id": "17"
    },
    {
        "name": "dafdfaf",
        "kategorie": "kategorie 1",
        "ring": "adsfadf",
        "description": "adfadfdaf",
        "category": "adfadf",
        "id": "18"
    },
    {
        "name": "adfadf",
        "kategorie": "kategorie 1",
        "ring": "adfafd",
        "description": "adfadf",
        "category": "adfadf",
        "id": "19"
    },
    {
        "name": "afdsdsaf",
        "kategorie": "kategorie 1",
        "ring": "adfadf",
        "description": "adfafda",
        "category": "dfadfaf",
        "id": "20"
    },
    {
        "name": "name 21",
        "kategorie": "kategorie 21",
        "ring": "ring 21",
        "description": "description 21",
        "category": "category 21",
        "id": "21"
    },
    {
        "name": "name 22",
        "kategorie": "kategorie 22",
        "ring": "ring 22",
        "description": "description 22",
        "category": "category 22",
        "id": "22"
    },
    {
        "name": "name 23",
        "kategorie": "kategorie 23",
        "ring": "ring 23",
        "description": "description 23",
        "category": "category 23",
        "id": "23"
    },
    {
        "name": "name 24",
        "kategorie": "kategorie 24",
        "ring": "ring 24",
        "description": "description 24",
        "category": "category 24",
        "id": "24"
    },
    {
        "name": "name 25",
        "kategorie": "kategorie 25",
        "ring": "ring 25",
        "description": "description 25",
        "category": "category 25",
        "id": "25"
    },
    {
        "name": "t",
        "kategorie": "kategorie 26",
        "ring": "Ring 0",
        "description": "t",
        "category": "techniques",
        "id": "26"
    }

];