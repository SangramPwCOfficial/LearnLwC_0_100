/**
 * @description       : 
 * @author            : Sangram Keshari Upadhyaya
 * @group             : 
 * @last modified on  : 17-09-2024
 * @last modified by  : Sangram Keshari Upadhyaya
 * Modifications Log
 * Ver   Date         Author                      Modification
 * 1.0   16-09-2024   Sangram Keshari Upadhyaya   Initial Version
**/
import { LightningElement } from 'lwc';

export default class Lwc_QuizApp extends LightningElement {

    lwcQuestions = [{
        qId : '000x1',
        question : 'Which one of the following is not a template loop ?',
        answers : {
            a : 'forEach',
            b : 'for',
            c : 'each',
            d : 'none'
        },
        correctAnswer : 'd'
    },
    {
        qId : '000x2',
        question : 'What is key & it\'s importance ?',
        answers : {
            a : 'A key is a special string attribute that we need to include to the first element inside the template when creating lists of elements.',
            b : 'A key must be a number or string, it can\'t be an object.',
            c : 'A key is a way to identify which items have changed, are added, or are removed.',
            d : 'A key is a way to identify which items are the first or the last.'
        },
        correctAnswer : 'c'
    },
    {
        qId : '000x3',
        question : 'Which of the file is invalid in LwC component folder ?',
        answers : {
            a : '.svg',
            b : '.apex',
            c : '.js',
            d : 'None of the above'
        },
        correctAnswer : 'b'
    },
    {
        qId : '000x4',
        question : 'Which of the following is not a directive ?',
        answers : {
            a : 'for:each',
            b : 'lwc:if',
            c : 'if:true',
            d : '@track'
        },
        correctAnswer : 'd'
    },
    {
        qId : '000x5',
        question : 'Which of the file is invalid in LwC component folder ?',
        answers : {
            a : '.svg',
            b : '.apex',
            c : '.js',
            d : 'None of the above'
        },
        correctAnswer : 'b'
    },
    
]
    
}