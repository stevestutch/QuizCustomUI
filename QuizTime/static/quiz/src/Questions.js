const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Paris", "London", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["O2", "CO2", "H2O", "H2SO4"],
        correctAnswer: "H2O"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Fe", "Cu"],
        correctAnswer: "Au"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Who is credited with the theory of relativity?",
        answers: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
        correctAnswer: "Albert Einstein"
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: ["Venus", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        answers: ["Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the capital of Japan?",
        answers: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Who painted 'The Starry Night'?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí"],
        correctAnswer: "Vincent van Gogh"
    },
    {
        question: "What is the largest organ in the human body?",
        answers: ["Brain", "Liver", "Skin", "Heart"],
        correctAnswer: "Skin"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answers: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"],
        correctAnswer: "Marie Curie"
    },
    {
        question: "What is the largest ocean in the world?",
        answers: ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        answers: ["Christopher Marlowe", "William Shakespeare", "George Bernard Shaw", "Arthur Miller"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        answers: ["O2", "CO2", "O", "H2O"],
        correctAnswer: "O"
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        answers: ["Bill Gates", "Steve Jobs", "Alan Turing", "Charles Babbage"],
        correctAnswer: "Charles Babbage"
    },
    {
        question: "What is the longest river in the world?",
        answers: ["Nile River", "Amazon River", "Mississippi River", "Yangtze River"],
        correctAnswer: "Nile River"
    },
    {
        question: "Who was the first President of the United States?",
        answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        correctAnswer: "George Washington"
    },
    {
        question: "What is the chemical symbol for carbon?",
        answers: ["C", "Co", "Ca", "Cr"],
        correctAnswer: "C"
    },
    {
        question: "Who wrote '1984'?",
        answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Margaret Atwood"],
        correctAnswer: "George Orwell"
    },
    {
        question: "What is the speed of light in a vacuum?",
        answers: ["299,792,458 meters per second", "186,282 miles per second", "300,000 kilometers per second", "100,000 miles per second"],
        correctAnswer: "299,792,458 meters per second"
    },
    {
        question: "Which planet is closest to the sun?",
        answers: ["Venus", "Mars", "Earth", "Mercury"],
        correctAnswer: "Mercury"
    },
    {
        question: "Who developed the theory of evolution by natural selection?",
        answers: ["Gregor Mendel", "Louis Pasteur", "Charles Darwin", "Isaac Newton"],
        correctAnswer: "Charles Darwin"
    },
    {
        question: "What is the chemical symbol for sodium?",
        answers: ["Na", "No", "So", "Sa"],
        correctAnswer: "Na"
    },
    {
        question: "Who is the author of 'Pride and Prejudice'?",
        answers: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Louisa May Alcott"],
        correctAnswer: "Jane Austen"
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: ["Fe", "Fr", "Ir", "In"],
        correctAnswer: "Fe"
    },
    {
        question: "Who discovered penicillin?",
        answers: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Jonas Salk"],
        correctAnswer: "Alexander Fleming"
    },
    {
        question: "What is the smallest country in the world?",
        answers: ["Monaco", "Vatican City", "Maldives", "Singapore"],
        correctAnswer: "Vatican City"
    },
    {
        question: "Who wrote 'The Catcher in the Rye'?",
        answers: ["F. Scott Fitzgerald", "J.D. Salinger", "Ernest Hemingway", "George Orwell"],
        correctAnswer: "J.D. Salinger"
    },
    {
        question: "What is the chemical symbol for silver?",
        answers: ["Si", "Sv", "Ag", "Sl"],
        correctAnswer: "Ag"
    },
    {
        question: "Who painted 'The Persistence of Memory'?",
        answers: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        correctAnswer: "Salvador Dalí"
    },
    {
        question: "What is the deepest ocean in the world?",
        answers: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who invented the telephone?",
        answers: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: "Alexander Graham Bell"
    },
    {
        question: "What is the chemical symbol for calcium?",
        answers: ["Cl", "Ce", "Ca", "Cm"],
        correctAnswer: "Ca"
    },
    {
        question: "Who wrote 'Frankenstein'?",
        answers: ["Mary Shelley", "Emily Brontë", "Bram Stoker", "H.G. Wells"],
        correctAnswer: "Mary Shelley"
    },
    {
        question: "What is the melting point of water?",
        answers: ["100 degrees Celsius", "0 degrees Celsius", "50 degrees Celsius", "200 degrees Celsius"],
        correctAnswer: "0 degrees Celsius"
    },
    {
        question: "Who discovered gravity?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: "Isaac Newton"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: ["Gold", "Diamond", "Iron", "Titanium"],
        correctAnswer: "Diamond"
    },
    {
        question: "Who is known as the 'Father of Geometry'?",
        answers: ["Euclid", "Pythagoras", "Archimedes", "Aristotle"],
        correctAnswer: "Euclid"
    }
];

export default questions;