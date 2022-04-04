const quizData = [
    {
        question: 'Which two countries have not missed one of the modern-day Olympics?',
        a : 'Great Britain and France',
        b : 'Greece and Australia',
        c : 'USA and China',
        d : 'Scotland and USA',
        correct : 'Greece and Australia',
        
    },
    {
        question: 'Which country won the first-ever soccer World Cup in 1930?',
        a : 'France',
        b : 'Greece',
        c : 'Uruguay',
        d : 'Brazil',
        correct : 'Uruguay',
        
    },
    {
        question: 'Which is the only American Football team to go a whole season undefeated, including the Super Bowl?',
        a : 'The Miami Dolphins(1972)',
        b : 'The New England Patriots(1963)',
        c : 'The Los Angeles Rams(1972)',
        d : 'The New York Giants(1972)',
        correct : 'The Miami Dolphins(1972)',
        
    },  
    {
        question: 'Which Former NBA Player Was Nicknamed “Agent Zero”?',
        a : 'Micheal Jordan',
        b : 'Kobe Bryant',
        c : 'Ray Allen',
        d : 'Gilbert Arenas',
        correct : 'Gilbert Arenas',
        
    },
    {
        question: 'What is the name of the professional ice hockey team based in Toronto, Canada?',
        a : 'Toronto Raptors',
        b : 'Toronto Argonauts',
        c : 'Toronto Maple Leafs',
        d : 'Toronto Marlies',
        correct : 'Toronto Maple Leafs',
        
    },

    { question: 'Who was the first gymnast to score a perfect 10 score?',
        a : 'Handball',
        b : 'Basketball',
        c : 'Volleyball',
        d : 'Badminton',
        correct : 'Volleyball',
        
    },

    { question: 'How many points did Michael Jordan score on his first NBA game?',
        a : '16 points',
        b : '19 points',
        c : '15 points',
        d : '23 points',
        correct : '16 points',
        
    },


    { question: 'What does “www” stand for in a website browser?',
        a : 'Web World Wide',
        b : 'World Web Wide',
        c : 'Width Web Wide',
        d : 'World Wide Web',
        correct : 'World Wide Web',
        
    },

    { question: 'What is "cynophobia"?',
        a : 'Fear of dogs',
        b : 'Fear of cats',
        c : 'Fear of snakes',
        d : 'Fear of goats',
        correct : 'Fear of dogs',
        
    },

    { question: 'How many languages are written from right to left?',
        a : '12',
        b : '5',
        c : '32',
        d : '24',
        correct : '12',
        
    },

    { question: 'Which monarch officially made Valentines Day a holiday in 1537?',
        a : 'Henry VIII',
        b : 'James the great',
        c : 'Queen Elizabeth',
        d : 'Henry VI	',
        correct : 'Henry VIII',
        
    },

    { question: 'What geometric shape is generally used for stop signs?',
        a : 'Hexagon',
        b : 'Decagon',
        c : 'Pentagon',
        d : 'Octagon',
        correct : 'Octagon',
        
    },

    { question: 'Which country do cities of Perth, Adelade & Brisbane belong to?',
        a : 'Germany',
        b : 'Italy',
        c : 'Australia',
        d : 'Japan',
        correct : 'Australia',
        
    },

    { question: 'What countries made up the original Axis powers in World War II?',
        a : 'Germany, Italy, and Japan',
        b : 'Russia, Italy, and Japan',
        c : 'Germany, England, and USA',
        d : 'China, Italy, and USA',
        correct : 'Germany, Italy, and Japan',
        
    },
    { question: 'Which animal can be seen on the Porsche logo?',
        a : 'Zebra',
        b : 'Lion',
        c : 'Donkey',
        d : 'Horse',
        correct : 'Horse',
        
    },

    { question: 'What is the name of the largest ocean on earth?',
        a : 'Pacific Ocean',
        b : 'Arctic Ocean',
        c : 'Atlantic Ocean',
        d : 'Indian Ocean',
        correct : 'Pacific Ocean',
        
    },
    { question: 'Demolition of the Berlin wall separating East and West Germany began in what year?',
        a : '1989',
        b : '1879',
        c : '1990',
        d : '1994',
        correct : '1989',
        
    },
    { question: 'What is the rarest M&M color?',
        a : 'Green',
        b : 'Blue',
        c : 'Brown',
        d : 'Yellow ',
        correct : 'Brown',
        
    },
    { question: 'Which country consumes the most chocolate per capita?',
        a : 'Belgium',
        b : 'Germany',
        c : 'Poland',
        d : 'Switzerland ',
        correct : 'Switzerland',
        
    },

    { question: 'What was the first soft drink in space?',
        a : 'Coca Cola',
        b : 'Tang',
        c : 'Hennessy',
        d : 'Pepsi ',
        correct : 'Coca Cola',
        
    },

    { question: 'What is the most consumed manufactured drink in the world?',
        a : 'Soda',
        b : 'Coca Cola',
        c : 'Tea',
        d : 'Pepsi',
        correct : 'Tea',
        
    },

    { question: 'Which is the only edible food that never goes bad?',
        a : 'Locust',
        b : 'Lime',
        c : 'Honey',
        d : 'Tea',
        correct : 'Honey',
        
    },
    { question: 'Which country invented ice cream?',
        a : 'Greece',
        b : 'France',
        c : 'Sweden',
        d : 'China',
        correct : 'China',
        
    },

    { question: 'Which member of the Beatles married Yoko Ono?',
        a : 'Paul McCartney',
        b : 'John Lennon',
        c : 'Ringo Starr',
        d : 'George Harrison',
        correct : 'John Lennon',
        
    },
    { question: 'On the farm, what is a kid?',
        a : 'A baby cat',
        b : 'A baby sheep',
        c : 'A baby dog',
        d : 'A baby goat',
        correct : 'A baby goat',
        
    },
    { question: '“Stars and Stripes” is the nickname of the flag of which country?',
        a : 'England',
        b : 'France',
        c : 'Scotland',
        d : 'USA',
        correct : 'USA',
        
    },
    { question: 'What is the loudest animal on Earth?',
        a : 'Elephant',
        b : 'Sperm Whale',
        c : 'Lion',
        d : 'Monkeys',
        correct : 'Sperm Whale',
        
    },

    { question: 'How many hearts does an octopus have?',
        a : '4',
        b : '5',
        c : '12',
        d : '3',
        correct : '3',
        
    },

    { question: 'A group of ravens is known as?',
        a : 'Murder',
        b : 'parliament',
        c : 'Unkindness',
        d : 'convocation',
        correct : 'Unkindness',
        
    },

    { question: 'In the state of Georgia, it’s illegal to eat what with a fork?',
        a : 'Noodles',
        b : 'Pork',
        c : 'Fried chicken',
        d : 'Fish Stew',
        correct : 'Fried chicken',
        
    },  

    { question: 'What is measured in "Mickeys"?',
        a : 'The speed of a computer mouse',
        b : 'The speed of a computer',
        c : 'The speed of a Spaceship',
        d : 'The speed of a Airplane',
        correct : 'The speed of a computer mouse',
        
    }


]