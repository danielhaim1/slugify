import slugify from '../index.js';

const createTest = (description, input, expected) => {
    test(description, () => {
        const slugifier = new slugify();
        const output = slugifier.generate(input);
        expect(output).toEqual(expected);
    });
};

describe('German special characters', () => {
    createTest('Ist dein Name Sophia?',
        'Ist dein Name Sophia?',
        'ist-dein-name-sophia');
});

describe('Cyrillic characters (Russian)', () => {
    createTest('Твоё имя София?',
        'Твоё имя София?',
        'tvoyo-imya-sofiya');
});

describe('French special characters', () => {
    createTest('Sophia, PhD en sciences',
        'Sophia, PhD en sciences',
        'sophia-phd-en-sciences');
});

describe('Spanish special characters', () => {
    createTest('¿Tu nombre es Sophia?',
        '¿Tu nombre es Sophia?',
        'tu-nombre-es-sophia');
});

describe('German special characters', () => {
    createTest('Ist dein Name Sophia?',
        'Ist dein Name Sophia?',
        'ist-dein-name-sophia');
    
    createTest('Sophia, Ärztin aus Hamburg',
        'Sophia, Ärztin aus Hamburg',
        'sophia-aerztin-aus-hamburg');
    
    createTest('Wie geht es dir, Sophia?',
        'Wie geht es dir, Sophia?',
        'wie-geht-es-dir-sophia');
    
    createTest('Süße Sophia, schön und klug',
        'Süße Sophia, schön und klug',
        'suesse-sophia-schoen-und-klug');
    
    createTest('Sophia\'s Geburtstag',
        'Sophia\'s Geburtstag',
        'sophias-geburtstag');
});


describe('Additional examples with special characters and delimiters', () => {
    createTest('#1 Best in Class',
        '#1 Best in Class',
        'number-1-best-in-class');

    createTest('hello@example.com',
        'hello@example.com',
        'hello-at-example-com');

    createTest('Hello, world!',
        'hello-world',
        'hello-world');

    createTest('Hello, world!',
        'hello_world',
        'hello_world');

    createTest('Hello, world!',
        'Hello, world!',
        'hello-world');

    createTest('Hello, world!',
        'Hello, world!',
        'hello-world');
});
